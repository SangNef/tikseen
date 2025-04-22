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
