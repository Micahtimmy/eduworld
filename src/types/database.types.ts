export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          role: string
          full_name: string
          avatar_url: string | null
          school_id: string | null
          onboarding_completed: boolean
          xp: number
          level: number
          streak: number
          last_active: string | null
          preferences: Json
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      schools: {
        Row: {
          id: string
          name: string
          logo_url: string | null
          type: string
          country: string
          timezone: string
          subscription_tier: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['schools']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['schools']['Insert']>
      }
      subjects: {
        Row: {
          id: string
          name: string
          color: string
          icon: string
          grade_level: string
          school_id: string
          teacher_id: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['subjects']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['subjects']['Insert']>
      }
      lessons: {
        Row: {
          id: string
          title: string
          subject_id: string
          teacher_id: string
          content_type: string
          duration_minutes: number
          xp_reward: number
          thumbnail_url: string | null
          content: Json
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['lessons']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['lessons']['Insert']>
      }
      assignments: {
        Row: {
          id: string
          title: string
          description: string
          subject_id: string
          teacher_id: string
          due_date: string
          max_score: number
          xp_reward: number
          status: string
          type: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['assignments']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['assignments']['Insert']>
      }
      achievements: {
        Row: {
          id: string
          title: string
          description: string
          icon: string
          tier: string
          xp_reward: number
          condition_type: string
          condition_value: number
        }
        Insert: Omit<Database['public']['Tables']['achievements']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['achievements']['Insert']>
      }
      user_achievements: {
        Row: {
          id: string
          user_id: string
          achievement_id: string
          unlocked_at: string
        }
        Insert: Omit<Database['public']['Tables']['user_achievements']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['user_achievements']['Insert']>
      }
      lesson_completions: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          score: number | null
          xp_earned: number
          completed_at: string
        }
        Insert: Omit<Database['public']['Tables']['lesson_completions']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['lesson_completions']['Insert']>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
