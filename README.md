# VinGroup Website

Website chính thức của Tập đoàn Vingroup được phát triển với Vue 3 và Vite. Website hỗ trợ đa ngôn ngữ (Việt Nam và English) và cung cấp thông tin đầy đủ về tập đoàn, các lĩnh vực hoạt động, phát triển bền vững, quan hệ cổ đông, tin tức và sự kiện.

## Công Nghệ

- **Framework**: Vue 3 (Composition API với `<script setup>`)
- **Build Tool**: Vite
- **Router**: Vue Router 4
- **I18n**: Vue I18n 11 (hỗ trợ đa ngôn ngữ Việt/Anh)
- **UI/CSS**: Tailwind CSS 4, @heroicons/vue
- **Layout**: Thiết kế mobile-first, responsive

## Cấu Trúc Dự Án

```bash
vingroup/
├── public/              # Tài nguyên tĩnh
├── src/
│   ├── assets/          # Hình ảnh, fonts và tài nguyên
│   ├── components/      # Các component dùng chung
│   ├── data/            # Dữ liệu mẫu và API
│   ├── helpers/         # Các hàm tiện ích
│   ├── layouts/         # Layout ứng dụng (Default, Auth, Empty)
│   │   ├── DefaultLayout.vue  # Layout chính cho các trang công khai
│   │   ├── AuthLayout.vue     # Layout cho các trang xác thực
│   │   └── EmptyLayout.vue    # Layout trống không có header/footer
│   ├── locales/         # File ngôn ngữ (vi.json, en.json)
│   ├── routes/          # Cấu hình router
│   ├── views/           # Các trang của ứng dụng
│   │   ├── Home/        # Trang chủ
│   │   ├── About/       # Giới thiệu
│   │   ├── Activity/    # Lĩnh vực hoạt động
│   │   ├── Development/ # Phát triển bền vững
│   │   ├── Relation/    # Quan hệ cổ đông
│   │   ├── Event/       # Tin tức sự kiện
│   │   ├── Contact/     # Liên hệ
│   │   └── Auth/        # Trang xác thực
│   ├── App.vue          # Component gốc
│   ├── i18n.js          # Cấu hình đa ngôn ngữ
│   ├── main.js          # Entry point
│   └── style.css        # Global CSS
├── vite.config.js       # Cấu hình Vite
├── .cursorrules         # Quy tắc code và design system
└── package.json         # Dependencies
```

## Tính Năng

- **Đa ngôn ngữ**: Hỗ trợ Tiếng Việt và Tiếng Anh
- **Trang chủ**: Giới thiệu tổng quan về Vingroup
- **Giới thiệu**: Thông tin về lịch sử, tầm nhìn, sứ mệnh của tập đoàn
- **Lĩnh vực hoạt động**: Chi tiết các mảng kinh doanh của Vingroup
- **Phát triển bền vững**: Các hoạt động CSR và phát triển bền vững
- **Quan hệ cổ đông**: Thông tin tài chính và quan hệ nhà đầu tư
- **Tin tức sự kiện**: Tin tức mới nhất về tập đoàn
- **Liên hệ**: Thông tin liên hệ và form gửi yêu cầu

## UI Design System

- **Colors**: Bảng màu chính bao gồm:
  - Primary: #353228, #241e1e, #0a0a0a, #211c16
  - Text: #d4cbaf, #ffffff, #f3f3f3, #cccccc
  - Accent: #483b2b, #d4cbaf
- **Typography**:
  - Font: Manrope và Roboto
  - Kích thước text: small (xs, sm), normal (base), large (lg, xl), heading (2xl+)
- **Components**:
  - Cards với rounded corners và gradient borders
  - Buttons với gradient và hover effects
  - Icon system sử dụng Heroicons

## Cài Đặt & Phát Triển

```bash
# Clone repository
git clone <repository-url>

# Di chuyển vào thư mục dự án
cd vingroup

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

- **Cấu trúc Component**: Sử dụng `<script setup>` + `<template>` + `<style>`
- **Naming Convention**: PascalCase cho components (VD: BottomBar.vue)
- **State Management**: Sử dụng `ref` và `reactive` cho quản lý state
- **Import Path**: Ưu tiên sử dụng alias `@` cho import
- **Comments**: Chỉ comment cho logic phức tạp
- **Responsive Design**: Mobile-first approach với container `max-w-md`

Xem file `.cursorrules` để biết chi tiết đầy đủ về quy ước coding và design system.

## Đóng Góp

Khi đóng góp vào dự án, vui lòng tuân thủ các quy tắc sau:

1. Tuân thủ cấu trúc file và thư mục hiện có
2. Tuân thủ quy ước coding và design system trong `.cursorrules`
3. Đảm bảo responsive trên các thiết bị di động
4. Cập nhật cả hai file ngôn ngữ (vi.json và en.json) khi thêm nội dung mới
