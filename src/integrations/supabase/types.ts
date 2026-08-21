export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_id: string | null
          body: string
          category: string
          cover_image_url: string | null
          excerpt: string | null
          id: string
          published_at: string | null
          slug: string
          title: string
        }
        Insert: {
          author_id?: string | null
          body: string
          category: string
          cover_image_url?: string | null
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug: string
          title: string
        }
        Update: {
          author_id?: string | null
          body?: string
          category?: string
          cover_image_url?: string | null
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "lab_members"
            referencedColumns: ["id"]
          },
        ]
      }
      collaborations: {
        Row: {
          description: string | null
          id: string
          logo_url: string | null
          partner_name: string
          partner_type: string
          website_url: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          logo_url?: string | null
          partner_name: string
          partner_type: string
          website_url?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          logo_url?: string | null
          partner_name?: string
          partner_type?: string
          website_url?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          email: string
          id: string
          message: string
          name: string
          submitted_at: string
        }
        Insert: {
          email: string
          id?: string
          message: string
          name: string
          submitted_at?: string
        }
        Update: {
          email?: string
          id?: string
          message?: string
          name?: string
          submitted_at?: string
        }
        Relationships: []
      }
      gallery_items: {
        Row: {
          album: string
          display_order: number | null
          id: string
          image_url: string
          taken_at: string | null
          title: string
        }
        Insert: {
          album: string
          display_order?: number | null
          id?: string
          image_url: string
          taken_at?: string | null
          title: string
        }
        Update: {
          album?: string
          display_order?: number | null
          id?: string
          image_url?: string
          taken_at?: string | null
          title?: string
        }
        Relationships: []
      }
      lab_members: {
        Row: {
          alumni_year: number | null
          bio: string | null
          category: string
          created_at: string
          display_order: number | null
          email: string | null
          full_name: string
          id: string
          photo_url: string | null
          role: string
        }
        Insert: {
          alumni_year?: number | null
          bio?: string | null
          category: string
          created_at?: string
          display_order?: number | null
          email?: string | null
          full_name: string
          id?: string
          photo_url?: string | null
          role: string
        }
        Update: {
          alumni_year?: number | null
          bio?: string | null
          category?: string
          created_at?: string
          display_order?: number | null
          email?: string | null
          full_name?: string
          id?: string
          photo_url?: string | null
          role?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          subscribed_at?: string
        }
        Relationships: []
      }
      outreach_programs: {
        Row: {
          cover_image_url: string | null
          description: string
          event_date: string | null
          id: string
          program_type: string
          title: string
        }
        Insert: {
          cover_image_url?: string | null
          description: string
          event_date?: string | null
          id?: string
          program_type: string
          title: string
        }
        Update: {
          cover_image_url?: string | null
          description?: string
          event_date?: string | null
          id?: string
          program_type?: string
          title?: string
        }
        Relationships: []
      }
      publications: {
        Row: {
          abstract: string | null
          authors: string
          catalog_code: string
          doi_or_link: string | null
          id: string
          journal: string
          title: string
          year: number
        }
        Insert: {
          abstract?: string | null
          authors: string
          catalog_code: string
          doi_or_link?: string | null
          id?: string
          journal: string
          title: string
          year: number
        }
        Update: {
          abstract?: string | null
          authors?: string
          catalog_code?: string
          doi_or_link?: string | null
          id?: string
          journal?: string
          title?: string
          year?: number
        }
        Relationships: []
      }
      research_programs: {
        Row: {
          body: string
          catalog_code: string
          cover_image_url: string | null
          display_order: number | null
          id: string
          parent_program_id: string | null
          summary: string
          title: string
          track: string
        }
        Insert: {
          body: string
          catalog_code: string
          cover_image_url?: string | null
          display_order?: number | null
          id?: string
          parent_program_id?: string | null
          summary: string
          title: string
          track: string
        }
        Update: {
          body?: string
          catalog_code?: string
          cover_image_url?: string | null
          display_order?: number | null
          id?: string
          parent_program_id?: string | null
          summary?: string
          title?: string
          track?: string
        }
        Relationships: [
          {
            foreignKeyName: "research_programs_parent_program_id_fkey"
            columns: ["parent_program_id"]
            isOneToOne: false
            referencedRelation: "research_programs"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
