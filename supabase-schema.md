# Supabase SQL Schema cho LiveChat

Dưới đây là các câu lệnh SQL để tạo cấu trúc cơ sở dữ liệu cho ứng dụng LiveChat trên Supabase:

> **Lưu ý quan trọng**: Để tránh lỗi "infinite recursion detected in policy for relation" trong các RLS policy, chúng ta cần:
>
> 1. Sử dụng `auth.jwt()` để truy cập trực tiếp vào JWT claim thay vì sử dụng truy vấn con (subquery) đến bảng có RLS.
> 2. Luôn chuyển đổi kiểu dữ liệu khi so sánh JWT claim với chuỗi, ví dụ: `(auth.jwt() ->> 'role')::text = 'superadmin'`
> 3. Tránh tham chiếu đệ quy giữa các policy khi một policy tham chiếu đến bảng khác mà bảng đó lại có policy tham chiếu ngược lại.
> 4. Ưu tiên sử dụng joins thay vì subqueries trong điều kiện EXISTS khi có thể.
> 5. Sử dụng rule SECURITY DEFINER cho các function được sử dụng trong RLS nếu cần.

```sql
-- Tạo enum types
CREATE TYPE user_role AS ENUM ('admin', 'agent', 'superadmin');
CREATE TYPE user_status AS ENUM ('active', 'inactive');
CREATE TYPE customer_status AS ENUM ('active', 'blocked');
CREATE TYPE conversation_status AS ENUM ('active', 'closed', 'pending');
CREATE TYPE message_type AS ENUM ('text', 'image', 'file', 'pre-form');
CREATE TYPE message_sender_type AS ENUM ('agent', 'customer');

-- Bảng users
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users,
  email TEXT NOT NULL UNIQUE,
  username TEXT,
  role user_role NOT NULL DEFAULT 'agent',
  status user_status NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bảng organizations
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  url TEXT,
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  data JSONB DEFAULT '{}'::jsonb,
  status user_status NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bảng agents
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  avatar_url TEXT,
  status user_status NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bảng organization_agents để quản lý mối quan hệ nhiều-nhiều giữa agents và organizations
CREATE TABLE organization_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(agent_id, organization_id)
);

-- Bảng customers
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT,
  status customer_status NOT NULL DEFAULT 'active',
  data JSONB DEFAULT '{}'::jsonb,
  ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bảng conversations
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  agent_id UUID REFERENCES agents(id) ON DELETE SET NULL,
  status conversation_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bảng messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL,
  receiver_id UUID,
  sender_type message_sender_type NOT NULL,
  content TEXT NOT NULL,
  type message_type NOT NULL DEFAULT 'text',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bảng settings
CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tạo indexes để tối ưu hiệu năng
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_organizations_owner ON organizations(owner_id);
CREATE INDEX idx_agents_user ON agents(user_id);
CREATE INDEX idx_organization_agents_organization ON organization_agents(organization_id);
CREATE INDEX idx_organization_agents_agent ON organization_agents(agent_id);
CREATE INDEX idx_customers_organization ON customers(organization_id);
CREATE INDEX idx_conversations_organization ON conversations(organization_id);
CREATE INDEX idx_conversations_customer ON conversations(customer_id);
CREATE INDEX idx_conversations_agent ON conversations(agent_id);
CREATE INDEX idx_conversations_status ON conversations(status);
CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
CREATE INDEX idx_settings_key ON settings(key);

-- Tạo triggers để cập nhật updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Function để lấy JWT claim
CREATE OR REPLACE FUNCTION auth.jwt()
RETURNS jsonb
LANGUAGE sql
STABLE
AS $$
  SELECT
    coalesce(
      nullif(current_setting('request.jwt.claims', true), '')::jsonb,
      '{}'::jsonb
    )
$$;


-- Tạo policy mới dùng JWT claim
CREATE POLICY "Superadmin can view all users" ON users
  FOR SELECT USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

CREATE POLICY "Superadmin can update all users" ON users
  FOR UPDATE USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- RLS (Row Level Security) Policies

-- RLS cho bảng users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own user data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own user data" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admin users can view organization users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM organizations o
      WHERE o.owner_id = auth.uid()
    )
  );

-- Các policy "Superadmin can view/update all users" gây đệ quy vô hạn
-- Thay thế bằng cách sử dụng JWT claim
DROP POLICY IF EXISTS "Superadmin can view all users" ON users;
DROP POLICY IF EXISTS "Superadmin can update all users" ON users;

CREATE POLICY "Superadmin can view all users" ON users
  FOR SELECT USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

CREATE POLICY "Superadmin can update all users" ON users
  FOR UPDATE USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- RLS cho bảng organizations
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own organizations" ON organizations
  FOR SELECT USING (
    owner_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM organization_agents oa
      JOIN agents a ON oa.agent_id = a.id
      WHERE a.user_id = auth.uid() AND oa.organization_id = organizations.id
    )
  );

CREATE POLICY "Owners can update their organizations" ON organizations
  FOR UPDATE USING (owner_id = auth.uid());

-- Thay thế policy gây đệ quy vô hạn bằng cách sử dụng JWT claim
DROP POLICY IF EXISTS "Superadmin can view all organizations" ON organizations;
DROP POLICY IF EXISTS "Superadmin can update all organizations" ON organizations;

CREATE POLICY "Superadmin can view all organizations" ON organizations
  FOR SELECT USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

CREATE POLICY "Superadmin can update all organizations" ON organizations
  FOR UPDATE USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- RLS cho bảng agents
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own agent data" ON agents
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Organization owners can view their organization agents" ON agents
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM organization_agents oa
      JOIN organizations o ON oa.organization_id = o.id
      WHERE o.owner_id = auth.uid() AND oa.agent_id = agents.id
    )
  );

-- Thay thế policy gây đệ quy vô hạn bằng cách sử dụng JWT claim
DROP POLICY IF EXISTS "Superadmin can view all agents" ON agents;

CREATE POLICY "Superadmin can view all agents" ON agents
  FOR SELECT USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- RLS cho bảng organization_agents
ALTER TABLE organization_agents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Organization owners can manage organization_agents" ON organization_agents
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM organizations o
      WHERE o.id = organization_agents.organization_id AND o.owner_id = auth.uid()
    )
  );

CREATE POLICY "Agents can view their organization relationships" ON organization_agents
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM agents a
      WHERE a.id = organization_agents.agent_id AND a.user_id = auth.uid()
    )
  );

-- Thay thế policy gây đệ quy vô hạn bằng cách sử dụng JWT claim
DROP POLICY IF EXISTS "Superadmin can manage all organization_agents" ON organization_agents;

CREATE POLICY "Superadmin can manage all organization_agents" ON organization_agents
  FOR ALL USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- RLS cho bảng customers
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Sửa đổi policy phức tạp để giảm nguy cơ đệ quy
CREATE POLICY "Organization members can view their customers" ON customers
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM organizations o
      WHERE o.id = customers.organization_id AND o.owner_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM agents a
      JOIN organization_agents oa ON oa.agent_id = a.id
      WHERE a.user_id = auth.uid() AND oa.organization_id = customers.organization_id
    )
  );

-- Thay thế policy gây đệ quy vô hạn bằng cách sử dụng JWT claim
DROP POLICY IF EXISTS "Superadmin can view all customers" ON customers;

CREATE POLICY "Superadmin can view all customers" ON customers
  FOR SELECT USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- RLS cho bảng conversations
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;

-- Sửa lại policy phức tạp có thể gây đệ quy
CREATE POLICY "Agents can view assigned conversations" ON conversations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM agents a
      WHERE a.id = conversations.agent_id AND a.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM organizations o
      WHERE o.id = conversations.organization_id AND o.owner_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM agents a
      JOIN organization_agents oa ON oa.agent_id = a.id
      WHERE a.user_id = auth.uid() AND oa.organization_id = conversations.organization_id
    )
  );

CREATE POLICY "Organization admins can update conversations" ON conversations
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM organizations o
      WHERE o.id = conversations.organization_id AND o.owner_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM agents a
      WHERE a.id = conversations.agent_id AND a.user_id = auth.uid()
    )
  );

-- Thay thế policy gây đệ quy vô hạn bằng cách sử dụng JWT claim
DROP POLICY IF EXISTS "Superadmin can view all conversations" ON conversations;

CREATE POLICY "Superadmin can view all conversations" ON conversations
  FOR SELECT USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- RLS cho bảng messages
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Sửa lại policy phức tạp có thể gây đệ quy
CREATE POLICY "Agents can view their conversations' messages" ON messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM conversations c
      JOIN agents a ON c.agent_id = a.id
      WHERE c.id = messages.conversation_id AND a.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM conversations c
      JOIN organizations o ON c.organization_id = o.id
      WHERE c.id = messages.conversation_id AND o.owner_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM conversations c
      JOIN organization_agents oa ON c.organization_id = oa.organization_id
      JOIN agents a ON oa.agent_id = a.id
      WHERE c.id = messages.conversation_id AND a.user_id = auth.uid()
    )
  );

-- Sửa lại policy phức tạp có thể gây đệ quy
CREATE POLICY "Agents can send messages" ON messages
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM conversations c
      JOIN agents a ON c.agent_id = a.id
      WHERE c.id = messages.conversation_id AND a.user_id = auth.uid() AND messages.sender_type = 'agent'
    ) OR
    EXISTS (
      SELECT 1 FROM conversations c
      JOIN organizations o ON c.organization_id = o.id
      WHERE c.id = messages.conversation_id AND o.owner_id = auth.uid() AND messages.sender_type = 'agent'
    ) OR
    EXISTS (
      SELECT 1 FROM conversations c
      JOIN organization_agents oa ON c.organization_id = oa.organization_id
      JOIN agents a ON oa.agent_id = a.id
      WHERE c.id = messages.conversation_id AND a.user_id = auth.uid() AND messages.sender_type = 'agent'
    )
  );

-- Thay thế policy gây đệ quy vô hạn bằng cách sử dụng JWT claim
DROP POLICY IF EXISTS "Superadmin can view all messages" ON messages;

CREATE POLICY "Superadmin can view all messages" ON messages
  FOR SELECT USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- RLS cho bảng settings
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "All users can view public settings" ON settings
  FOR SELECT USING (key LIKE 'public.%');

CREATE POLICY "Admin users can update organization settings" ON settings
  FOR UPDATE USING (
    (key LIKE 'org.%') AND
    EXISTS (
      SELECT 1 FROM organizations o
      WHERE o.owner_id = auth.uid()
    )
  );

-- Thay thế policy gây đệ quy vô hạn bằng cách sử dụng JWT claim
DROP POLICY IF EXISTS "Superadmin can manage all settings" ON settings;

CREATE POLICY "Superadmin can manage all settings" ON settings
  FOR ALL USING (
    (auth.jwt() ->> 'role')::text = 'superadmin'
  );

-- Realtime Publication cho messages
BEGIN;
  -- Thêm bảng messages vào realtime
  DROP PUBLICATION IF EXISTS supabase_realtime;
  CREATE PUBLICATION supabase_realtime FOR TABLE messages;
COMMIT;

-- Thiết lập function để tự động tạo agent khi user đăng ký
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, role, status)
  VALUES (NEW.id, NEW.email, 'agent', 'active');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger thực thi sau khi user mới được tạo trong auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

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
```

## Thêm Hooks sau khi tạo tổ chức

Để xử lý tự động tạo agent và liên kết với tổ chức sau khi tạo tổ chức mới, có thể thêm đoạn SQL sau:

```sql
-- Tạo function trigger sau khi tạo organization
CREATE OR REPLACE FUNCTION create_agent_after_organization()
RETURNS TRIGGER AS $$
DECLARE
  new_agent_id UUID;
BEGIN
  -- Tạo agent cho owner nếu chưa có
  INSERT INTO agents (user_id, name, avatar_url, status)
  SELECT
    NEW.owner_id,
    u.username,
    null,
    'active'
  FROM users u
  WHERE u.id = NEW.owner_id
  AND NOT EXISTS (
    SELECT 1 FROM agents WHERE user_id = NEW.owner_id
  )
  RETURNING id INTO new_agent_id;

  -- Nếu không tạo mới, lấy agent_id hiện có
  IF new_agent_id IS NULL THEN
    SELECT id INTO new_agent_id FROM agents WHERE user_id = NEW.owner_id;
  END IF;

  -- Liên kết agent với organization
  INSERT INTO organization_agents (agent_id, organization_id)
  VALUES (new_agent_id, NEW.id);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Đăng ký trigger cho bảng organizations
CREATE TRIGGER trigger_create_agent_after_organization
  AFTER INSERT ON organizations
  FOR EACH ROW
  EXECUTE FUNCTION create_agent_after_organization();
```

## Tạo Function cho Dashboard

```sql
-- Function lấy số lượng cuộc hội thoại theo trạng thái cho một tổ chức
CREATE OR REPLACE FUNCTION get_conversation_stats(org_id UUID)
RETURNS TABLE (
  status conversation_status,
  count BIGINT
)
LANGUAGE SQL
SECURITY DEFINER
AS $$
  SELECT
    status,
    COUNT(*) as count
  FROM conversations
  WHERE organization_id = org_id
  GROUP BY status
$$;

-- Function lấy số lượng tin nhắn theo ngày cho một tổ chức
CREATE OR REPLACE FUNCTION get_message_stats(org_id UUID, days INTEGER DEFAULT 7)
RETURNS TABLE (
  date DATE,
  count BIGINT
)
LANGUAGE SQL
SECURITY DEFINER
AS $$
  SELECT
    DATE(m.created_at) as date,
    COUNT(*) as count
  FROM messages m
  JOIN conversations c ON m.conversation_id = c.id
  WHERE c.organization_id = org_id
  AND m.created_at >= NOW() - (days || ' day')::INTERVAL
  GROUP BY DATE(m.created_at)
  ORDER BY date
$$;
```

## Xử lý "Infinite Recursion" trong Supabase RLS

Để giải quyết lỗi "infinite recursion detected in policy for relation" trong Supabase RLS, chúng ta đã thực hiện các biện pháp sau:

1. **Sử dụng JWT claims thay vì truy vấn users:**

   - Thay vì `user_role = 'superadmin'` (cần truy vấn bảng users), chúng ta sử dụng `(auth.jwt() ->> 'role')::text = 'superadmin'`
   - Điều này tránh việc PostgreSQL thực hiện truy vấn đến bảng users, kích hoạt policy của bảng users và gây đệ quy vô hạn

2. **Tối ưu hóa cấu trúc query trong policy phức tạp:**

   - Sử dụng JOIN thay vì subquery lồng nhau trong điều kiện EXISTS
   - Tách các truy vấn phức tạp thành nhiều điều kiện EXISTS đơn giản hơn với toán tử OR
   - Giảm thiểu số lượng bảng tham gia trong một truy vấn

3. **Sử dụng SECURITY DEFINER cho các function:**

   - Các function get_conversation_stats và get_message_stats được đánh dấu với SECURITY DEFINER
   - Điều này giúp bỏ qua kiểm tra RLS khi function được gọi, tránh đệ quy

4. **Ép kiểu dữ liệu cho JWT claim:**
   - Luôn sử dụng ::text khi so sánh JWT claim với chuỗi, tránh trường hợp so sánh kiểu không khớp

Nếu vẫn gặp vấn đề đệ quy, có thể cần xem xét:

1. Sử dụng các function SECURITY DEFINER để thay thế các policy phức tạp
2. Tối ưu hóa hơn nữa cấu trúc dữ liệu và policy
3. Sử dụng service roles cho các thao tác quan trọng thay vì dựa vào RLS

```

```
