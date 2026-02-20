-- =====================================================
-- blog_posts table for AIToolRadar
-- Run this in Supabase SQL Editor
-- =====================================================

CREATE TABLE IF NOT EXISTS blog_posts (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug            text UNIQUE NOT NULL,
  title           text NOT NULL,
  excerpt         text,
  content_html    text,
  meta_description text,
  cover_image_url text,
  author          text DEFAULT 'AIToolRadar Editorial Team',
  category        text,
  reading_time_minutes integer DEFAULT 15,
  is_published    boolean DEFAULT true,
  published_at    timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

-- Index for fast slug lookup
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts (slug);

-- Index for listing (published, ordered by date)
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts (is_published, published_at DESC);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_blog_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blog_posts_updated_at ON blog_posts;
CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_blog_updated_at();
