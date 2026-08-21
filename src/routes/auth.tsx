import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export const Route = createFileRoute('/auth')({
  component: AuthComponent,
});

function AuthComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const search = Route.useSearch() as { redirect?: string };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success('Logged in successfully');
      window.location.href = search.redirect || '/admin';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-4">
      <Card className="w-full max-w-md border-line">
        <CardHeader>
          <CardTitle className="text-primary mono-data text-xl">CGPBL ADMIN LOGIN</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] mono-data uppercase text-primary-soft">Email</label>
              <Input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="border-line focus:ring-amber"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] mono-data uppercase text-primary-soft">Password</label>
              <Input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="border-line focus:ring-amber"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-soft text-white mono-data"
              disabled={loading}
            >
              {loading ? 'AUTHENTICATING...' : 'LOGIN'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
