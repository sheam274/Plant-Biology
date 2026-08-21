import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Users, BookOpen, GraduationCap, Image, MessageSquare, Mail, Rocket, Globe } from 'lucide-react';
import { toast } from 'sonner';

export const Route = createFileRoute('/_authenticated/admin')({
  component: AdminLayout,
});

function AdminLayout() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Logged out successfully');
      window.location.href = '/';
    }
  };

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/admin' },
    { label: 'Lab Members', icon: Users, to: '/admin/lab_members' },
    { label: 'Research Programs', icon: GraduationCap, to: '/admin/research_programs' },
    { label: 'Publications', icon: BookOpen, to: '/admin/publications' },
    { label: 'Collaborations', icon: Globe, to: '/admin/collaborations' },
    { label: 'Gallery Items', icon: Image, to: '/admin/gallery_items' },
    { label: 'Blog Posts', icon: MessageSquare, to: '/admin/blog_posts' },
    { label: 'Outreach Programs', icon: Rocket, to: '/admin/outreach_programs' },
    { label: 'Contact Messages', icon: Mail, to: '/admin/contact_messages' },
    { label: 'Subscribers', icon: Mail, to: '/admin/newsletter_subscribers' },
  ];

  return (
    <div className="flex min-h-screen bg-surface/20">
      {/* Sidebar */}
      <aside className="w-64 border-r border-line bg-surface/40 flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-line">
          <h1 className="mono-data text-primary text-lg font-bold">CGPBL ADMIN</h1>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: 'bg-primary text-white' }}
              inactiveProps={{ className: 'text-primary-soft hover:bg-surface' }}
              className="flex items-center gap-3 px-4 py-2 rounded-sm mono-data text-xs transition-colors"
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-line">
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="w-full border-line text-primary-soft mono-data text-xs"
          >
            LOGOUT
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
