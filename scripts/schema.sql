-- AIToolRadar Database Schema
-- Run this in Supabase SQL Editor

-- Categories
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  meta_description TEXT,
  parent_id UUID REFERENCES categories(id)
);

-- AI Tools master table
CREATE TABLE IF NOT EXISTS ai_tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  short_description TEXT,
  long_description TEXT,
  category_id UUID REFERENCES categories(id),
  pricing_model TEXT CHECK (pricing_model IN ('free', 'freemium', 'paid', 'enterprise')),
  starting_price DECIMAL,
  has_free_trial BOOLEAN DEFAULT false,
  affiliate_url TEXT,
  affiliate_program TEXT,
  commission_type TEXT CHECK (commission_type IN ('recurring', 'one-time')),
  commission_rate TEXT,
  features JSONB DEFAULT '{}',
  pros TEXT[] DEFAULT '{}',
  cons TEXT[] DEFAULT '{}',
  rating DECIMAL CHECK (rating >= 0 AND rating <= 10),
  monthly_visits BIGINT,
  founded_year INT,
  meta_description TEXT,
  content_html TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pricing plans (multiple per tool)
CREATE TABLE IF NOT EXISTS pricing_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_id UUID REFERENCES ai_tools(id) ON DELETE CASCADE,
  plan_name TEXT NOT NULL,
  monthly_price DECIMAL,
  annual_price DECIMAL,
  features TEXT[] DEFAULT '{}',
  limits JSONB
);

-- Integrations between tools
CREATE TABLE IF NOT EXISTS integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_a_id UUID REFERENCES ai_tools(id) ON DELETE CASCADE,
  tool_b_id UUID REFERENCES ai_tools(id) ON DELETE CASCADE,
  integration_type TEXT CHECK (integration_type IN ('native', 'zapier', 'api', 'webhook')),
  description TEXT
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_ai_tools_slug ON ai_tools(slug);
CREATE INDEX IF NOT EXISTS idx_ai_tools_category ON ai_tools(category_id);
CREATE INDEX IF NOT EXISTS idx_ai_tools_rating ON ai_tools(rating DESC);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_pricing_plans_tool ON pricing_plans(tool_id);
CREATE INDEX IF NOT EXISTS idx_integrations_tools ON integrations(tool_a_id, tool_b_id);

-- Enable Row Level Security (public read)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE integrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read categories" ON categories;
DROP POLICY IF EXISTS "Public read ai_tools" ON ai_tools;
DROP POLICY IF EXISTS "Public read pricing_plans" ON pricing_plans;
DROP POLICY IF EXISTS "Public read integrations" ON integrations;

CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read ai_tools" ON ai_tools FOR SELECT USING (true);
CREATE POLICY "Public read pricing_plans" ON pricing_plans FOR SELECT USING (true);
CREATE POLICY "Public read integrations" ON integrations FOR SELECT USING (true);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS ai_tools_updated_at ON ai_tools;
CREATE TRIGGER ai_tools_updated_at
  BEFORE UPDATE ON ai_tools
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
