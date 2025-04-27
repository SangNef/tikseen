# LiveChat - Thông tin dự án

## Tổng quan dự án

- **Tên dự án**: LiveChat
- **Mô tả**: Ứng dụng chat trực tuyến được phát triển với Vue 3 và Vite
- **Phiên bản**: 1.0.0
- **Mục tiêu**: Cung cấp nền tảng chat trực tuyến với giao diện người dùng thân thiện, đa ngôn ngữ và hiệu năng cao

## Công nghệ

- **Frontend**: Vue 3 (Composition API với script setup)
- **Build Tool**: Vite
- **Router**: Vue Router
- **CSS**: Tailwind CSS
- **Icons**: @heroicons/vue
- **Backend/Database**: Supabase (PostgreSQL)

## Cấu trúc dự án

```
livechat/
├── public/              # Tài nguyên tĩnh
├── src/
│   ├── assets/          # Hình ảnh, fonts và tài nguyên
│   ├── components/      # Các component dùng chung
│   │   ├── Auth/        # Components liên quan đến xác thực
│   │   ├── Common/      # Components dùng chung toàn ứng dụng
│   │   └── Main/        # Components chính của ứng dụng
│   ├── data/            # Dữ liệu mẫu và API
│   ├── helpers/         # Các hàm tiện ích
│   ├── layouts/         # Layout ứng dụng
│   │   ├── DefaultLayout.vue # Layout chính
│   │   └── AuthLayout.vue    # Layout cho trang xác thực
│   ├── routes/          # Cấu hình router
│   ├── views/           # Các trang của ứng dụng
│   │   ├── Auth/        # Trang xác thực
│   │   ├── Chat/        # Trang chat chính
│   │   ├── Hiring/      # Trang tuyển dụng
│   │   └── Setting/     # Trang cài đặt
│   ├── App.vue          # Component gốc
│   ├── main.js          # Entry point
│   └── style.css        # Global CSS
```

## Quy tắc coding

- **Component**: Sử dụng Composition API với script setup
- **Naming**: PascalCase cho components (VD: ChatMessage.vue)
- **CSS**: Tailwind CSS với class-based styling
- **State Management**: Sử dụng ref và reactive
- **Props & Emits**: Sử dụng defineProps và defineEmits với TypeScript interface
- **Imports**: Ưu tiên sử dụng alias @ cho import

## UI/UX Guidelines

- **Layout**: Mobile-first, responsive design
- **Colors**:

  - Primary: #0f766e (cyan-700)
  - Secondary: #7e22ce (purple-700)
  - Text: --text-dark, --text-light, --text-gray, --text-muted
  - Background: --bg-light, --bg-gray, --bg-dark
  - Status: success, warning, error, info

- **Components**:

  - Border radius: --rounded-custom (0.75rem)
  - Shadows: --shadow-custom
  - Transitions: duration-200, duration-300
  - Spacing: px-4 py-2 (buttons), px-3 py-2 (inputs)

- **Typography**:

  - Fonts: Inter sans-serif
  - Weights: font-normal, font-medium, font-semibold
  - Sizes: text-xs, text-sm, text-base, text-lg

- **Icons**:

  - @heroicons/vue/24/outline và @heroicons/vue/24/solid
  - Kích thước: w-5 h-5 (standard), w-6 h-6 (large)

- **Responsive**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Component patterns

- **Button**:

  - Variants: primary, secondary, danger, outline, link
  - Size: px-4 py-2 rounded-custom text-sm
  - States: normal, hover, disabled

- **Input**:

  - Size: h-11 px-3 py-2 rounded-custom
  - States: normal, focus, error
  - Types: text, password, email, tel

- **Dropdowns**:

  - Container: border border-light rounded-custom shadow-custom
  - Items: px-4 py-2 hover:bg-gray

- **Cards**:
  - Container: bg-light rounded-custom shadow-custom
  - Header/Footer: border-b/border-t border-light p-3

## Tính năng chính

- **Chat**: Giao diện chat trực tuyến
- **Authentication**: Đăng nhập, đăng ký, quên mật khẩu
- **Settings**: Tùy chỉnh giao diện, ngôn ngữ
- **Hiring**: Thông tin tuyển dụng

## Chiến lược phát triển

- **Phase 1**: Xây dựng giao diện người dùng cơ bản, authentication
- **Phase 2**: Tích hợp tính năng chat thời gian thực
- **Phase 3**: Bổ sung tính năng nâng cao (thông báo, emoji, file sharing)
- **Phase 4**: Tối ưu hóa hiệu suất và trải nghiệm người dùng

## Cơ sở dữ liệu (Supabase)

### Enum Types

- **user_role**: 'admin', 'agent', 'superadmin'
- **user_status**: 'active', 'inactive'
- **customer_status**: 'active', 'blocked'
- **conversation_status**: 'active', 'closed', 'pending'
- **message_type**: 'text', 'image', 'file', 'pre-form'
- **message_sender_type**: 'agent', 'customer'

### Các bảng dữ liệu

1. **users**

   - `id`: UUID (Primary key, references auth.users)
   - `email`: Text (Unique)
   - `username`: Text
   - `role`: user_role (Default: 'agent')
   - `status`: user_status (Default: 'active')
   - `created_at`: Timestamp
   - `updated_at`: Timestamp

2. **organizations**

   - `id`: UUID (Primary key)
   - `name`: Text
   - `url`: Text
   - `owner_id`: UUID (References users.id)
   - `data`: JSONB
   - `status`: user_status (Default: 'active')
   - `created_at`: Timestamp

3. **agents**

   - `id`: UUID (Primary key)
   - `user_id`: UUID (References users.id)
   - `name`: Text
   - `avatar_url`: Text
   - `status`: user_status (Default: 'active')
   - `created_at`: Timestamp

4. **organization_agents**

   - `id`: UUID (Primary key)
   - `agent_id`: UUID (References agents.id)
   - `organization_id`: UUID (References organizations.id)
   - `created_at`: Timestamp

5. **customers**

   - `id`: UUID (Primary key)
   - `organization_id`: UUID (References organizations.id)
   - `name`: Text
   - `status`: customer_status (Default: 'active')
   - `data`: JSONB
   - `ip`: Text
   - `user_agent`: Text
   - `created_at`: Timestamp

6. **conversations**

   - `id`: UUID (Primary key)
   - `organization_id`: UUID (References organizations.id)
   - `customer_id`: UUID (References customers.id)
   - `agent_id`: UUID (References agents.id)
   - `status`: conversation_status (Default: 'pending')
   - `created_at`: Timestamp

7. **messages**

   - `id`: UUID (Primary key)
   - `conversation_id`: UUID (References conversations.id)
   - `sender_id`: UUID
   - `receiver_id`: UUID
   - `sender_type`: message_sender_type
   - `content`: Text
   - `type`: message_type (Default: 'text')
   - `created_at`: Timestamp

8. **settings**
   - `id`: UUID (Primary key)
   - `key`: Text (Unique)
   - `value`: JSONB
   - `created_at`: Timestamp

### Quan hệ giữa các bảng

- `users` -> `agents` (1:1): Mỗi user có thể là một agent
- `organizations` -> `organization_agents` -> `agents` (many-to-many): Nhiều agent có thể thuộc nhiều organization
- `organizations` -> `customers` (1:many): Mỗi organization có nhiều customers
- `organizations` -> `conversations` (1:many): Mỗi organization có nhiều conversations
- `customers` -> `conversations` (1:many): Mỗi customer có thể có nhiều conversations
- `agents` -> `conversations` (1:many): Mỗi agent có thể xử lý nhiều conversations
- `conversations` -> `messages` (1:many): Mỗi conversation có nhiều messages

### Row Level Security (RLS)

- Supabase RLS được áp dụng để kiểm soát quyền truy cập dữ liệu:
  - Người dùng thông thường chỉ có thể xem/cập nhật dữ liệu của họ
  - Admin có thể quản lý dữ liệu trong tổ chức của họ
  - Superadmin có quyền truy cập toàn bộ dữ liệu hệ thống

### Realtime Pub/Sub

- Supabase Realtime được kích hoạt cho bảng `messages` để cập nhật tin nhắn thời gian thực
- Agents và Customers đăng ký kênh `messages` theo conversation_id

### Triggers và Functions

- Tự động tạo bản ghi user khi đăng ký mới
- Tự động tạo agent và liên kết với tổ chức sau khi tạo tổ chức mới
- Functions cho Dashboard để lấy thống kê cuộc hội thoại và tin nhắn
