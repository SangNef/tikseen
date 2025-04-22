# Local Rules – LiveChat

## 1. Công nghệ & Cấu trúc dự án

- **Framework:** Vue 3 (Composition API với `<script setup>`)
- **Build tool:** Vite
- **Router:** Vue Router (route.meta.layout cho xác định layout)
- **CSS:** Tailwind CSS (class-based, mobile-first, responsive)
- **Icons:** Heroicons (24/outline)
- **Cấu trúc thư mục:**
  - `src/components/`: Auth, Common, Main (PascalCase cho components)
  - `src/views/`: Chat, Auth, Setting, Hiring (mỗi tính năng 1 thư mục)
  - `src/layouts/`: DefaultLayout.vue, AuthLayout.vue
  - `src/data/`, `src/helpers/`, `src/assets/`, `src/routes/`
  - `App.vue`, `main.js`, `style.css` (global)

## 2. Quy tắc code đặc thù

- **Component:**
  - Sử dụng `<script setup>`, `<template>`, `<style scoped>`
  - Props: defineProps với TypeScript interface
  - Emits: defineEmits cho events
  - Ưu tiên Composition API, dùng ref/reactive cho state
  - Import dùng alias `@` cho import từ `src`
- **Naming:**
  - PascalCase cho components (InputMessage.vue)
  - camelCase cho biến, hàm, helpers
  - UPPER_SNAKE_CASE cho constants
  - File: PascalCase cho components, camelCase cho helpers
- **CSS:**
  - Sử dụng Tailwind, tuân thủ spacing system (gap-2, p-2)
  - Ưu tiên rounded-xl cho container chính, shadow-xl cho nổi bật
  - Breakpoint: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

## 3. UI/UX & Design System

- **Layout:** Mobile-first, responsive, sidebar trái, header trên
- **Cards:** rounded-xl, shadow
- **Buttons:** rounded corners, hover effects
- **Inputs:** Border & outline nhất quán, skeleton loader cho loading
- **Dropdown/Modal:** Overlay, container chuẩn, close button đúng vị trí
- **Typography:** Font sans-serif, size từ text-xs đến text-2xl
- **Icons:** Heroicons, nhất quán toàn hệ thống

---

## UI/UX thực tế dự án

### 1. Layout tổng thể

- **Main layout:**
  - Dùng `DefaultLayout.vue`: Flex row, sidebar trái cố định (w-16), content phải chiếm toàn bộ chiều rộng còn lại.
  - Sidebar luôn hiện, header cố định trên cùng, content scrollable bên dưới.
  - Auth layout (`AuthLayout.vue`): Header trên cùng, nội dung căn giữa, footer hình ảnh cố định đáy màn hình.

### 2. Sidebar (SideBar.vue)

- Sidebar dọc, nền xanh đậm (`bg-cyan-950`), icon trắng/xám, hover đổi màu.
- Icon động: Solid khi active, Outline khi inactive.
- Tooltip hiển thị tên chức năng khi hover.
- Responsive: Luôn cố định trái, không bị che khuất trên mobile/desktop.

### 3. Header (Header.vue)

- **Main Header:**
  - Nền xanh đậm, cao 48px, sticky top.
  - Bên phải: notification dropdown (chuông, badge đỏ), user avatar (dropdown profile).
  - Dropdown: bo góc, shadow, border, hover đổi nền, tối ưu cho thao tác chuột.
  - Avatar tròn, icon Heroicons, menu profile có icon, label tiếng Việt.
- **Auth Header:**
  - Logo trái, nút chuyển trang phải (Sign up free/Log in), border bo góc nhẹ.

### 4. Card, Button, Input

- **Card:**
  - Dùng rounded-xl, shadow-xl, padding đều, màu nền trắng/gray-100.
- **Button (BaseButton.vue):**
  - Bo góc lớn (rounded-lg), font nhỏ, padding đều, hiệu ứng hover sáng màu, disabled mờ.
  - Hỗ trợ 2 màu: primary (xanh), danger (đỏ).
- **Input (BaseInput.vue):**
  - Border bo góc lớn, outline rõ ràng, lỗi báo đỏ, icon show/hide password, label nhỏ phía trên.
  - Có validate email, số điện thoại, required, báo lỗi realtime.

### 5. Dropdown, Modal, Toast

- **Dropdown:**
  - Position tuyệt đối, bo góc, shadow, border, hover đổi nền, z-50.
  - Đóng khi click ngoài, menu item có icon, padding đều.
- **Modal:**
  - Overlay đen mờ, container bo góc lớn, shadow, close button trên phải.
- **Toast:**
  - Thông báo nổi, tự động ẩn, bo góc, màu sắc theo loại thông báo.

### 6. Responsive & Accessibility

- **Mobile-first:**
  - Sử dụng flex, gap, padding phù hợp, breakpoint Tailwind chuẩn.
  - Sidebar, header, dropdown, modal đều tương thích mobile.
- **Accessibility:**
  - Icon có aria-label, input có label, button có title, tương phản màu sắc tốt, thao tác bàn phím đầy đủ.

### 7. Typography & Color

- **Font:** Roboto, Inter, fallback sans-serif.
- **Size:** text-xs, text-sm, text-base, text-lg, text-xl (áp dụng cho từng khu vực).
- **Color:**
  - Nền: trắng, xám nhạt, xanh đậm cho sidebar/header.
  - Text: đen, xám đậm/nhạt, màu nổi bật cho badge/notification.
  - Accent: xanh dương, đỏ, xanh lá cho trạng thái.

### 8. Icon & Hiệu ứng

- **Icon:** Heroicons, size chuẩn 24px, nhất quán toàn hệ thống.
- **Hiệu ứng:**
  - Hover chuyển màu nền, shadow, transition 300ms.
  - Loading: skeleton hoặc spinner cho trạng thái chờ.

---

## 4. Logic & Patterns

- **Chat patterns:** InputMessage, MessageItem, ChatList (infinite scroll)
- **Auth patterns:** LoginForm, RegisterForm, ForgotPassword (validation)
- **Common patterns:** Dropdown, Modal, Toast (auto-hide)
- **State:** ref cho primitive, reactive cho objects
- **Event:** Đặt tên rõ ràng (handle*, toggle*, add\*)
- **Communication:** Props down, events up
- **Lifecycle:** onMounted, onBeforeUnmount khi cần
- **Side effects:** watchEffect/watch
- **Form:** v-model, validation functions

## 5. Phát triển & workflow

- **Git:**
  - Nhánh: feature/_, bugfix/_, hotfix/\*
  - Commit: feat/fix/docs/style/refactor/test/chore: nội dung
  - PR: mô tả chi tiết, test cases
- **Coding steps:**
  1. Xác định requirements
  2. Tạo components
  3. Implement logic
  4. Style
  5. Test
  6. Refactor/tối ưu
- **Testing:**
  - Functional, responsive, cross-browser

## 6. Accessibility & Security

- **HTML:** Semantic, ARIA labels cho UI elements
- **Keyboard:** Đảm bảo thao tác bàn phím cho mọi chức năng
- **Contrast:** Tỷ lệ tương phản đủ cao
- **Security:** Validation, sanitization, authentication đúng chuẩn

## 7. Ghi chú đặc biệt

- **Không thay đổi UI hoặc thêm UI element nếu không được yêu cầu**
- **Không vượt quá 250 dòng cho mỗi file source**
- **Đảm bảo code sạch, dễ đọc, dễ bảo trì**
- **Tất cả nội dung giao diện giữ nguyên tiếng Việt**
- **Luôn cập nhật README.md nếu thêm logic hoặc thay đổi hành vi**

---

Nếu cần bổ sung, chỉnh sửa, hoặc xuất ra định dạng khác (JSON, YAML...), vui lòng liên hệ AI hỗ trợ.
