import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { type GalleryItem } from "../types";

export const useGallery = (album?: string) => {
  return useQuery({
    queryKey: ["gallery", album],
    queryFn: async () => {
      let query = supabase
        .from("gallery_items")
        .select("*")
        .order("display_order", { ascending: true });

      if (album) {
        query = query.eq("album", album);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as GalleryItem[];
    },
  });
};
