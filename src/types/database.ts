// Supabase database types — regenerate with: pnpm dlx supabase gen types typescript

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          stripe_customer_id: string | null;
          subscription_status: "free" | "pro";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          stripe_customer_id?: string | null;
          subscription_status?: "free" | "pro";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          stripe_customer_id?: string | null;
          subscription_status?: "free" | "pro";
          created_at?: string;
          updated_at?: string;
        };
      };
      palettes: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          base_color: string;
          harmony_type: string;
          palette_data: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          base_color: string;
          harmony_type: string;
          palette_data: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          base_color?: string;
          harmony_type?: string;
          palette_data?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
