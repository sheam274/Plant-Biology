import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { type OutreachProgram } from "../types";

export const useOutreach = () => {
  return useQuery({
    queryKey: ["outreach"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("outreach_programs")
        .select("*")
        .order("event_date", { ascending: false });

      if (error) throw error;
      return data as OutreachProgram[];
    },
  });
};
