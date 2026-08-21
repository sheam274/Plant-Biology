import { supabase } from "@/integrations/supabase/client";

export async function searchLabLedger(query: string) {
  if (!query || query.length < 2) return null;

  const [research, publications, blog, members] = await Promise.all([
    supabase
      .from("research_programs")
      .select("id, title, catalog_code, summary")
      .or(`title.ilike.%${query}%,summary.ilike.%${query}%,catalog_code.ilike.%${query}%`)
      .limit(5),
    supabase
      .from("publications")
      .select("id, title, catalog_code, authors")
      .or(`title.ilike.%${query}%,authors.ilike.%${query}%,catalog_code.ilike.%${query}%`)
      .limit(5),
    supabase
      .from("blog_posts")
      .select("id, title, slug, category")
      .or(`title.ilike.%${query}%,category.ilike.%${query}%,slug.ilike.%${query}%`)
      .limit(5),
    supabase
      .from("lab_members")
      .select("id, full_name, catalog_code, role")
      .or(`full_name.ilike.%${query}%,role.ilike.%${query}%,catalog_code.ilike.%${query}%`)
      .limit(5),
  ]);

  return {
    research: research.data || [],
    publications: publications.data || [],
    blog: blog.data || [],
    members: members.data || [],
  };
}
