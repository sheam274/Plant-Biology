import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, GraduationCap, Image, MessageSquare, Mail, Rocket, Globe } from 'lucide-react';

export const Route = createFileRoute('/_authenticated/admin/')({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const results = await Promise.all([
        supabase.from('lab_members').select('*', { count: 'exact', head: true }),
        supabase.from('publications').select('*', { count: 'exact', head: true }),
        supabase.from('research_programs').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('gallery_items').select('*', { count: 'exact', head: true }),
        supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
      ]);
      
      return {
        members: results[0].count || 0,
        publications: results[1].count || 0,
        research: results[2].count || 0,
        posts: results[3].count || 0,
        gallery: results[4].count || 0,
        messages: results[5].count || 0,
      };
    }
  });

  const cards = [
    { label: 'Lab Members', count: stats?.members, icon: Users, color: 'text-primary' },
    { label: 'Publications', count: stats?.publications, icon: BookOpen, color: 'text-amber' },
    { label: 'Research Programs', count: stats?.research, icon: GraduationCap, color: 'text-teal' },
    { label: 'Blog Posts', count: stats?.posts, icon: MessageSquare, color: 'text-primary' },
    { label: 'Gallery Items', count: stats?.gallery, icon: Image, color: 'text-amber' },
    { label: 'Contact Messages', count: stats?.messages, icon: Mail, color: 'text-teal' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="Fraunces text-3xl text-primary mb-2">Dashboard Overview</h2>
        <p className="text-primary-soft mono-data text-xs uppercase">Catalog management statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.label} className="border-line bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[10px] mono-data uppercase text-primary-soft">{card.label}</CardTitle>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mono-data">{card.count ?? '...'}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
