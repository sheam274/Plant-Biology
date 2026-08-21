-- Migration to create CGPBL lab database schema

-- 1. Create enum for member status
CREATE TYPE public.member_status AS ENUM ('active', 'alumni', 'staff');

-- 2. Lab Members
CREATE TABLE public.lab_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    bio TEXT,
    image_url TEXT,
    catalog_id TEXT UNIQUE NOT NULL,
    status public.member_status DEFAULT 'active' NOT NULL,
    display_order INTEGER DEFAULT 0
);

-- 3. Research Programs
CREATE TABLE public.research_programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    catalog_id TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL
);

-- 4. Publications
CREATE TABLE public.publications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    title TEXT NOT NULL,
    authors TEXT[] NOT NULL,
    journal TEXT NOT NULL,
    year INTEGER NOT NULL,
    url TEXT,
    catalog_id TEXT UNIQUE NOT NULL
);

-- 5. Blog Posts
CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    date DATE DEFAULT CURRENT_DATE NOT NULL,
    image_url TEXT,
    catalog_id TEXT UNIQUE NOT NULL,
    published BOOLEAN DEFAULT true NOT NULL
);

-- 6. Outreach Events
CREATE TABLE public.outreach_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date DATE NOT NULL,
    location TEXT,
    catalog_id TEXT UNIQUE NOT NULL
);

-- 7. Gallery Items
CREATE TABLE public.gallery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    title TEXT NOT NULL,
    image_url TEXT NOT NULL,
    caption TEXT,
    category TEXT,
    catalog_id TEXT UNIQUE NOT NULL
);

-- RLS SETTINGS & GRANTS
ALTER TABLE public.lab_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.outreach_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO authenticated;

-- Policies
CREATE POLICY "Public read access for lab_members" ON public.lab_members FOR SELECT USING (true);
CREATE POLICY "Public read access for research_programs" ON public.research_programs FOR SELECT USING (true);
CREATE POLICY "Public read access for publications" ON public.publications FOR SELECT USING (true);
CREATE POLICY "Public read access for blog_posts" ON public.blog_posts FOR SELECT USING (true);
CREATE POLICY "Public read access for outreach_events" ON public.outreach_events FOR SELECT USING (true);
CREATE POLICY "Public read access for gallery_items" ON public.gallery_items FOR SELECT USING (true);

CREATE POLICY "Admin insert for lab_members" ON public.lab_members FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin update for lab_members" ON public.lab_members FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admin delete for lab_members" ON public.lab_members FOR DELETE TO authenticated USING (true);

CREATE POLICY "Admin insert for research_programs" ON public.research_programs FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin update for research_programs" ON public.research_programs FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admin delete for research_programs" ON public.research_programs FOR DELETE TO authenticated USING (true);

CREATE POLICY "Admin insert for publications" ON public.publications FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin update for publications" ON public.publications FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admin delete for publications" ON public.publications FOR DELETE TO authenticated USING (true);

CREATE POLICY "Admin insert for blog_posts" ON public.blog_posts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin update for blog_posts" ON public.blog_posts FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admin delete for blog_posts" ON public.blog_posts FOR DELETE TO authenticated USING (true);

CREATE POLICY "Admin insert for outreach_events" ON public.outreach_events FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin update for outreach_events" ON public.outreach_events FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admin delete for outreach_events" ON public.outreach_events FOR DELETE TO authenticated USING (true);

CREATE POLICY "Admin insert for gallery_items" ON public.gallery_items FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin update for gallery_items" ON public.gallery_items FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admin delete for gallery_items" ON public.gallery_items FOR DELETE TO authenticated USING (true);
