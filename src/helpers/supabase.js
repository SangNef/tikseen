import { createClient } from '@supabase/supabase-js';

// Supabase URL và API Key sẽ được lấy từ biến môi trường
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Tạo Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
