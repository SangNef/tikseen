import { createClient } from '@supabase/supabase-js';

// Supabase URL và API Key sẽ được lấy từ biến môi trường
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Tạo Supabase client với tùy chọn tắt xác thực email
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

/*
  SQL function cần chạy trên Supabase (thêm vào SQL Editor):
  
  -- Function để tự động đặt email_verified = true khi user đăng ký
  CREATE OR REPLACE FUNCTION auto_verify_email()
  RETURNS TRIGGER AS $$
  BEGIN
    -- Cập nhật email_verified_at cho user mới đăng ký
    UPDATE auth.users SET email_confirmed_at = now() WHERE id = NEW.id;
    RETURN NEW;
  END;
  $$ LANGUAGE plpgsql SECURITY DEFINER;

  -- Trigger cho user mới đăng ký
  DROP TRIGGER IF EXISTS auto_verify_email_on_signup ON auth.users;
  CREATE TRIGGER auto_verify_email_on_signup
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION auto_verify_email();
*/

export default supabase;
