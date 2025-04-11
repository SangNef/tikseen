# VinClub

VinClub là ứng dụng web dành cho thiết bị di động được phát triển với Vue 3 và Vite. Ứng dụng cung cấp các tính năng phúc lợi, đầu tư và quản lý tài khoản.

## Công Nghệ

- **Framework**: Vue 3 (Composition API với `<script setup>`)
- **Build Tool**: Vite
- **Router**: Vue Router
- **UI/CSS**: Tailwind CSS, @heroicons/vue
- **Layout**: Thiết kế mobile-first, responsive

## Cấu Trúc Dự Án

```
vinclub/
├── public/              # Tài nguyên tĩnh
├── src/
│   ├── assets/          # Hình ảnh, fonts và tài nguyên
│   ├── components/      # Các component dùng chung
│   ├── data/            # Dữ liệu mẫu và API
│   ├── helpers/         # Các hàm tiện ích
│   ├── layouts/         # Layout ứng dụng (Default, Auth, Empty)
│   ├── routes/          # Cấu hình router
│   ├── views/           # Các trang của ứng dụng
│   ├── App.vue          # Component gốc
│   ├── main.js          # Entry point
│   └── style.css        # Global CSS
└── package.json         # Dependencies
```

## Tính Năng

- **Xác thực**: Đăng nhập/Đăng ký
- **Trang chủ**: Hiển thị thông tin người dùng, số dư và danh sách chức năng
- **Phúc lợi**: Quản lý và tham vấn phúc lợi
- **Dự án**: Danh sách và chi tiết dự án đầu tư
- **Tài khoản**: Quản lý thông tin cá nhân, lịch sử giao dịch
- **Giao dịch**: Nạp tiền và rút tiền

## Cài Đặt & Phát Triển

```bash
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

Xem file `.cursorrules` để biết chi tiết về quy ước coding và design system.

## Responsive Design

Ứng dụng được thiết kế với mobile-first approach, tối ưu cho các thiết bị di động với container chính có `max-width: 768px`.
