-- Address security linter findings

-- 1. Revoke public execute on has_role function (Security Definer)
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM public, anon, authenticated;
-- Only the owner (postgres) can execute it, but it's used inside policies which run with owner privs.

-- 2. Add RLS policy for user_roles table (which was missing a policy)
CREATE POLICY "Admins can view all roles" ON public.user_roles 
FOR SELECT TO authenticated 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view their own roles" ON public.user_roles
FOR SELECT TO authenticated
USING (auth.uid() = user_id);

-- Also ensure anon can't see roles
-- (Default is no access, but explicit is better)
REVOKE ALL ON public.user_roles FROM anon;
GRANT SELECT ON public.user_roles TO authenticated;
