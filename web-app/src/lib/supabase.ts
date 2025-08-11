import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Types for our database
export interface Profile {
  id: string
  email: string
  first_name: string
  last_name?: string
  date_of_birth: string
  bio?: string
  location?: string
  verification_status: 'pending' | 'verified' | 'rejected'
  verification_selfie_url?: string
  profile_picture_url?: string
  is_active: boolean
  membership_tier: 'free' | 'core' | 'premium'
  stripe_customer_id?: string
  created_at: string
  updated_at: string
}

export interface Interest {
  id: string
  name: string
  category: string
  description?: string
  icon?: string
  created_at: string
}

export interface Group {
  id: string
  name: string
  description?: string
  group_type: 'interest' | 'location' | 'activity'
  category?: string
  location?: string
  is_private: boolean
  max_members?: number
  current_member_count: number
  created_by: string
  image_url?: string
  rules?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  description?: string
  event_type: 'online' | 'in_person' | 'hybrid'
  location?: string
  virtual_link?: string
  start_datetime: string
  end_datetime: string
  max_attendees?: number
  current_attendee_count: number
  price: number
  currency: string
  group_id?: string
  created_by: string
  image_url?: string
  is_featured: boolean
  status: 'active' | 'cancelled' | 'completed'
  tags?: string[]
  created_at: string
  updated_at: string
}

// Helper functions for common operations
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export const uploadFile = async (bucket: string, path: string, file: File) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file)
  
  if (error) throw error
  return data
}

export const getPublicUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)
  
  return data.publicUrl
}