# LiveChat

Ứng dụng chat trực tuyến được phát triển với Vue 3 và Vite. Cung cấp giao diện chat hiện đại và đầy đủ tính năng với trải nghiệm người dùng tuyệt vời.

## Công Nghệ

-   **Framework**: Vue 3 (Composition API với `<script setup>`)
-   **Build Tool**: Vite
-   **Router**: Vue Router
-   **UI/CSS**: Tailwind CSS, @heroicons/vue
-   **Layout**: Thiết kế mobile-first, responsive

## Cấu Trúc Dự Án

```bash
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
│   │   ├── DefaultLayout.vue  # Layout chính cho các trang công khai
│   │   └── AuthLayout.vue     # Layout cho các trang xác thực
│   ├── routes/          # Cấu hình router
│   ├── views/           # Các trang của ứng dụng
│   │   ├── Chat/        # Giao diện chat
│   │   ├── Auth/        # Trang xác thực
│   │   ├── Setting/     # Trang cài đặt
│   │   └── Hiring/      # Trang tuyển dụng
│   ├── App.vue          # Component gốc
│   ├── main.js          # Entry point
│   └── style.css        # Global CSS
├── vite.config.js       # Cấu hình Vite
├── .cursorrules         # Quy tắc code và design system
└── package.json         # Dependencies
```

## Tính Năng

-   **Chat Trực Tuyến**: Giao diện chat thời gian thực với emoji, attachment
-   **Authentication**: Đăng nhập, đăng ký, quên mật khẩu
-   **Custom Messages**: Tin nhắn nhanh, tag và emoji
-   **File Sharing**: Tính năng chia sẻ file
-   **Responsive Design**: Hỗ trợ đầy đủ trên mọi thiết bị
-   **User Settings**: Tùy chỉnh giao diện, thông báo

## UI Design System

-   **Colors**: Bảng màu chính bao gồm:
    -   Background: #ffffff, #f3f4f6
    -   Primary: #3b82f6, #2563eb
    -   Text: #111827, #374151, #6b7280
    -   Accent: #ef4444, #10b981
-   **Typography**:
    -   Font: Hệ thống font sans-serif mặc định
    -   Kích thước text: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl
-   **Components**:
    -   Cards với rounded-xl và shadow
    -   Buttons với hover effects
    -   Dropdown menus và modals
    -   Icon system sử dụng Heroicons

## Cài Đặt & Phát Triển

```bash
# Clone repository
git clone <repository-url>

# Di chuyển vào thư mục dự án
cd livechat

# Cài đặt dependencies
npm install

# Chạy server phát triển
npm run dev

# Build cho production
npm run build

# Preview bản build
npm run preview
```

## Quy Tắc Code

-   **Cấu trúc Component**: Sử dụng `<script setup>` + `<template>` + `<style scoped>`
-   **Naming Convention**: PascalCase cho components (VD: InputMessage.vue)
-   **State Management**: Sử dụng `ref` và `reactive` cho quản lý state
-   **Import Path**: Ưu tiên sử dụng alias `@` cho import
-   **Event Handling**: Đặt tên sự kiện rõ ràng (handle*, toggle*, add\*)
-   **Responsive Design**: Mobile-first approach

Xem file `.cursorrules` để biết chi tiết đầy đủ về quy ước coding và design system.

## Contributing

Khi đóng góp vào dự án, vui lòng tuân thủ các quy tắc sau:

1. Tuân thủ cấu trúc file và thư mục hiện có
2. Tuân thủ quy ước coding và design system trong `.cursorrules`
3. Đảm bảo responsive trên các thiết bị di động
4. Follow quy trình git workflow với các nhánh feature/, bugfix/, hotfix/
5. Kiểm tra cross-browser compatibility
