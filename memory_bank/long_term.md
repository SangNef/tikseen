# LiveChat - Thông tin dự án

## Tổng quan dự án

-   **Tên dự án**: LiveChat
-   **Mô tả**: Ứng dụng chat trực tuyến được phát triển với Vue 3 và Vite
-   **Phiên bản**: 1.0.0
-   **Mục tiêu**: Cung cấp nền tảng chat trực tuyến với giao diện người dùng thân thiện, đa ngôn ngữ và hiệu năng cao

## Công nghệ

-   **Frontend**: Vue 3 (Composition API với script setup)
-   **Build Tool**: Vite
-   **Router**: Vue Router
-   **CSS**: Tailwind CSS
-   **Icons**: @heroicons/vue

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

-   **Component**: Sử dụng Composition API với script setup
-   **Naming**: PascalCase cho components (VD: ChatMessage.vue)
-   **CSS**: Tailwind CSS với class-based styling
-   **State Management**: Sử dụng ref và reactive
-   **Props & Emits**: Sử dụng defineProps và defineEmits với TypeScript interface
-   **Imports**: Ưu tiên sử dụng alias @ cho import

## UI/UX Guidelines

-   **Layout**: Mobile-first, responsive design
-   **Colors**: Sử dụng bảng màu được định nghĩa trong .cursorrules
-   **Components**: Card, buttons với gradient và hover effects
-   **Typography**: Manrope và Roboto, kích thước từ text-xs đến text-2xl
-   **Responsive**: Thiết kế mobile-first, container max-width phù hợp với breakpoints

## Tính năng chính

-   **Chat**: Giao diện chat trực tuyến
-   **Authentication**: Đăng nhập, đăng ký, quên mật khẩu
-   **Settings**: Tùy chỉnh giao diện, ngôn ngữ
-   **Hiring**: Thông tin tuyển dụng

## Chiến lược phát triển

-   **Phase 1**: Xây dựng giao diện người dùng cơ bản, authentication
-   **Phase 2**: Tích hợp tính năng chat thời gian thực
-   **Phase 3**: Bổ sung tính năng nâng cao (thông báo, emoji, file sharing)
-   **Phase 4**: Tối ưu hóa hiệu suất và trải nghiệm người dùng
