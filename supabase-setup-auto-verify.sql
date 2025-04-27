-- Function để tự động đặt email_verified = true khi user đăng ký
CREATE OR REPLACE FUNCTION auto_verify_email()
RETURNS TRIGGER AS $$
BEGIN
  -- Cập nhật email_verified_at cho user mới đăng ký
  UPDATE auth.users 
  SET email_confirmed_at = now() 
  WHERE id = NEW.id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger cho user mới đăng ký
DROP TRIGGER IF EXISTS auto_verify_email_on_signup ON auth.users;
CREATE TRIGGER auto_verify_email_on_signup
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION auto_verify_email();

-- Chạy SQL này trong Supabase SQL Editor để thiết lập tự động xác thực email
-- Người dùng đăng ký mới sẽ có email_confirmed_at được đặt ngay lập tức
-- đồng nghĩa với việc email đã được xác thực (không cần click vào link xác thực)
