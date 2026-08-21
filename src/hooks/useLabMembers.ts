import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { type LabMember } from "../types";

export const useLabMembers = (category?: 'current' | 'alumni') => {
  return useQuery({
    queryKey: ["lab_members", category],
    queryFn: async () => {
      let query = supabase
        .from("lab_members")
        .select("*")
        .order("display_order", { ascending: true });

      if (category) {
        query = query.eq("category", category);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as LabMember[];
    },
  });
};
