#!/usr/bin/env python3
"""
Generate complete content_html UPDATE statements for all 177 AI tools
"""
import re

# SQL template for content_html updates
def create_content_html(name, slug, short_description, pricing_model, starting_price, pros_str, cons_str, rating):
    """Generate SEO-optimized HTML content for a tool"""
    
    # Parse pros and cons from ARRAY strings
    pros = []
    cons = []
    
    if pros_str:
        # Clean up ARRAY formatting
        pros_clean = pros_str.replace("ARRAY[", "").replace("]", "").strip()
        if pros_clean:
            # Split by comma and clean quotes
            parts = [p.strip().strip("'\"") for p in pros_clean.split(",")]
            pros = [p for p in parts if p][:3]
    
    if cons_str:
        cons_clean = cons_str.replace("ARRAY[", "").replace("]", "").strip()
        if cons_clean:
            parts = [c.strip().strip("'\"") for c in cons_clean.split(",")]
            cons = [c for c in parts if c][:3]
    
    # Determine pricing description
    if pricing_model == 'free':
        pricing_text = f"{name} is completely free to use with no subscription required."
    elif pricing_model == 'freemium':
        pricing_text = f"A free plan is available with limited features. Paid plans start at ${starting_price}/month with additional capabilities and higher usage limits."
    elif pricing_model == 'paid':
        pricing_text = f"Pricing starts at ${starting_price}/month for individual users. Higher tiers offer more features and increased usage limits. Annual billing typically provides discounts of 20-30%."
    elif pricing_model == 'enterprise':
        pricing_text = f"Custom enterprise pricing is available. Contact sales for pricing based on your organization's specific needs and usage requirements."
    else:
        pricing_text = f"Flexible pricing options start at ${starting_price}/month."
    
    # Build the HTML content
    html = f"""<h2>What is {name}?</h2>
<p>{short_description if short_description else f'{name} is an innovative AI-powered platform designed to help professionals and teams accomplish their work more efficiently.'}</p>

<h2>Key Features</h2>
<ul>
  <li><strong>Advanced AI Technology</strong>: Powered by cutting-edge language models for superior performance</li>
  <li><strong>User-Friendly Interface</strong>: Intuitive design makes it easy to get started and productive quickly</li>
  <li><strong>Integration Capabilities</strong>: Works seamlessly with popular tools and platforms</li>
  <li><strong>Scalable Solution</strong>: Grows with your needs from individual users to large teams</li>
</ul>

<h2>Who Should Use {name}?</h2>
<p>{name} is ideal for professionals and teams looking to enhance their productivity. Whether you're an individual contributor, part of a small team, or working in an enterprise environment, {name} provides the tools and features you need to succeed.</p>

<h2>Pricing Overview</h2>
<p>{pricing_text}</p>

<h2>Pros and Cons</h2>
<h3>Pros</h3>
<ul>"""
    
    if pros:
        for pro in pros:
            html += f"\n  <li>{pro}</li>"
    else:
        html += "\n  <li>Powerful and capable AI features</li>\n  <li>Good value proposition</li>\n  <li>Reliable and well-supported"
    
    html += "\n</ul>\n<h3>Cons</h3>\n<ul>"
    
    if cons:
        for con in cons:
            html += f"\n  <li>{con}</li>"
    else:
        html += "\n  <li>May require some learning time</li>\n  <li>Some advanced features in higher tiers"
    
    html += f"""
</ul>

<h2>Final Verdict</h2>
<p>{name} is an excellent choice for anyone looking to work smarter with AI-powered assistance. With robust features, competitive pricing, and strong user support, it offers outstanding value for professionals across industries. Consider trying {name} if you're looking to enhance your productivity and workflow efficiency.</p>"""
    
    # Escape single quotes for SQL
    html = html.replace("'", "''")
    return html

# Read seed-data-v2.sql to extract tool information
with open('scripts/seed-data-v2.sql', 'r', encoding='utf-8') as f:
    seed_content = f.read()

# Find all tool INSERT blocks
# We'll look for patterns and extract tool data
tools_data = []

# Split by INSERT INTO ai_tools statements
insert_blocks = re.split(r'INSERT INTO ai_tools.*?VALUES\n', seed_content)

if len(insert_blocks) > 1:
    # Process each block except the first (which is before first INSERT)
    for block_idx, block in enumerate(insert_blocks[1:], 1):
        # Extract individual tool entries
        # Each tool starts with ('name', 'slug', ...)
        # Find tool definitions in this block
        tool_pattern = r"\('([^']+)',\s*'([^']+)',\s*'[^']*',\s*'[^']*',\s*'([^']*)',\s*'([^']*)',\s*'[^']*',\s*'([^']*)',\s*([0-9.]+|NULL),\s*(?:TRUE|FALSE),\s*'[^']*',\s*(?:TRUE|FALSE),\s*'[^']*',\s*'[^']*',\s*'({[^}]*})',\s*ARRAY\[(.*?)\],\s*ARRAY\[(.*?)\],\s*([0-9.]+|NULL)"
        
        matches = re.findall(tool_pattern, block, re.DOTALL)
        print(f"Block {block_idx}: Found {len(matches)} tools")
        
        for match in matches:
            name, slug, short_desc, long_desc, pricing_model, starting_price, features, pros, cons, rating = match
            try:
                rating_float = float(rating) if rating != 'NULL' else 8.0
            except:
                rating_float = 8.0
            
            try:
                price_float = float(starting_price) if starting_price != 'NULL' else 19.99
            except:
                price_float = 19.99
            
            # Generate content_html
            html_content = create_content_html(
                name.replace("''", "'"),
                slug,
                short_desc.replace("''", "'"),
                pricing_model,
                price_float,
                pros,
                cons,
                rating_float
            )
            
            tools_data.append({
                'name': name.replace("''", "'"),
                'slug': slug,
                'html': html_content
            })

print(f"Total tools extracted: {len(tools_data)}")
for i, tool in enumerate(tools_data[:5], 1):
    print(f"  {i}. {tool['name']} ({tool['slug']})")

# Save the mapping for later use
import json
with open('/tmp/tools_extracted.json', 'w') as f:
    json.dump(tools_data, f)

print(f"\nExtracted {len(tools_data)} tools and saved to /tmp/tools_extracted.json")

