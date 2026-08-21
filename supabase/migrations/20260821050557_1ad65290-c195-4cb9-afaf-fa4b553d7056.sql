-- Drop existing initial schema if needed (caution: this drops data if any exists, but we are in early development)
DROP TABLE IF EXISTS public.lab_members CASCADE;
DROP TABLE IF EXISTS public.research_programs CASCADE;
DROP TABLE IF EXISTS public.publications CASCADE;
DROP TABLE IF EXISTS public.blog_posts CASCADE;
DROP TABLE IF EXISTS public.outreach_events CASCADE;
DROP TABLE IF EXISTS public.gallery_items CASCADE;
DROP TYPE IF EXISTS public.member_status CASCADE;

-- 1. Create Enums and Types if needed
-- We'll use text for now as it's more flexible for the client's varied lists, 
-- but we can add constraints in the app.

-- 2. lab_members
CREATE TABLE public.lab_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    role TEXT NOT NULL, -- 'Lab PI', 'Faculty', etc.
    category TEXT NOT NULL, -- 'current', 'alumni'
    alumni_year INTEGER,
    bio TEXT,
    photo_url TEXT,
    email TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. research_programs
CREATE TABLE public.research_programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    catalog_code TEXT UNIQUE NOT NULL, -- 'NAP-01', 'FOD-02'
    title TEXT NOT NULL,
    track TEXT NOT NULL, -- 'Lab Co-PI I', 'Ongoing Research', etc.
    parent_program_id UUID REFERENCES public.research_programs(id),
    summary TEXT NOT NULL,
    body TEXT NOT NULL,
    cover_image_url TEXT,
    display_order INTEGER DEFAULT 0
);

-- 4. publications
CREATE TABLE public.publications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    catalog_code TEXT UNIQUE NOT NULL, -- 'PUB-2024-11'
    title TEXT NOT NULL,
    authors TEXT NOT NULL,
    journal TEXT NOT NULL,
    year INTEGER NOT NULL,
    doi_or_link TEXT,
    abstract TEXT
);

-- 5. collaborations
CREATE TABLE public.collaborations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_name TEXT NOT NULL,
    partner_type TEXT NOT NULL, -- 'University', 'Funding Agency', etc.
    logo_url TEXT,
    description TEXT,
    website_url TEXT
);

-- 6. gallery_items
CREATE TABLE public.gallery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    image_url TEXT NOT NULL,
    album TEXT NOT NULL, -- 'Lab Facilities', etc.
    taken_at DATE,
    display_order INTEGER DEFAULT 0
);

-- 7. blog_posts
CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    excerpt TEXT,
    body TEXT NOT NULL,
    cover_image_url TEXT,
    published_at TIMESTAMPTZ,
    author_id UUID REFERENCES public.lab_members(id)
);

-- 8. outreach_programs
CREATE TABLE public.outreach_programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    program_type TEXT NOT NULL, -- 'Training', 'Internship', etc.
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    cover_image_url TEXT,
    event_date DATE
);

-- 9. contact_messages
CREATE TABLE public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 10. newsletter_subscribers
CREATE TABLE public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 11. User Roles System
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role public.app_role NOT NULL,
    UNIQUE (user_id, role)
);

-- RLS SETTINGS & GRANTS
ALTER TABLE public.lab_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collaborations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.outreach_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security Definer Function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- GRANTS
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT SELECT ON public.user_roles TO authenticated;

-- Public read access
CREATE POLICY "Public read lab_members" ON public.lab_members FOR SELECT USING (true);
CREATE POLICY "Public read research_programs" ON public.research_programs FOR SELECT USING (true);
CREATE POLICY "Public read publications" ON public.publications FOR SELECT USING (true);
CREATE POLICY "Public read collaborations" ON public.collaborations FOR SELECT USING (true);
CREATE POLICY "Public read gallery_items" ON public.gallery_items FOR SELECT USING (true);
CREATE POLICY "Public read blog_posts" ON public.blog_posts FOR SELECT USING (true);
CREATE POLICY "Public read outreach_programs" ON public.outreach_programs FOR SELECT USING (true);

-- Authenticated Admin Access
CREATE POLICY "Admins can manage lab_members" ON public.lab_members FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage research_programs" ON public.research_programs FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage publications" ON public.publications FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage collaborations" ON public.collaborations FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage gallery_items" ON public.gallery_items FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage blog_posts" ON public.blog_posts FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage outreach_programs" ON public.outreach_programs FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage contact_messages" ON public.contact_messages FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage newsletter_subscribers" ON public.newsletter_subscribers FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
