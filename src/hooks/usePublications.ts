import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { type Publication } from "../types";

export const usePublications = () => {
  return useQuery({
    queryKey: ["publications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("publications")
        .select("*")
        .order("year", { ascending: false });

      if (error) throw error;
      return data as Publication[];
    },
  });
};
