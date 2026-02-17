export interface AiTool {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  website_url: string | null;
  short_description: string | null;
  long_description: string | null;
  category_id: string | null;
  pricing_model: string | null;
  starting_price: number | null;
  has_free_trial: boolean;
  affiliate_url: string | null;
  affiliate_program: string | null;
  commission_type: string | null;
  commission_rate: string | null;
  features: Record<string, boolean>;
  pros: string[];
  cons: string[];
  rating: number | null;
  monthly_visits: number | null;
  founded_year: number | null;
  meta_description: string | null;
  content_html: string | null;
  created_at: string;
  updated_at: string;
  // Joined fields
  category?: Category;
  pricing_plans?: PricingPlan[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  meta_description: string | null;
  parent_id: string | null;
}

export interface PricingPlan {
  id: string;
  tool_id: string;
  plan_name: string;
  monthly_price: number | null;
  annual_price: number | null;
  features: string[];
  limits: Record<string, number | string> | null;
}

export interface Integration {
  id: string;
  tool_a_id: string;
  tool_b_id: string;
  integration_type: string | null;
  description: string | null;
}
