# Workflow: Build popup.min.js

## Current tasks

- Build file popup.js thành popup.min.js để có thể nhúng LiveChat widget vào bất kỳ website nào
- Sửa lỗi cấu hình với tùy chọn manualChunks trong vite.config.js

## Plan

1. Cập nhật vite.config.js để hỗ trợ build file popup.js thành popup.min.js
2. Nâng cấp popup.js thành một API hoàn chỉnh để tích hợp LiveChat
3. Cập nhật BubbleChat component để lắng nghe các sự kiện từ popup.js
4. Cập nhật README.md để thêm hướng dẫn sử dụng
5. Sửa lỗi cấu hình Rollup trong Vite

## Steps

1. ✅ Cập nhật vite.config.js với cấu hình rollup để build popup.js thành popup.min.js
2. ✅ Nâng cấp popup.js thành một API hoàn chỉnh với các phương thức init(), open(), close(), updateConfig()
3. ✅ Thêm khả năng tự động tạo container DOM element cho LiveChat widget
4. ✅ Cập nhật BubbleChat component để lắng nghe các sự kiện từ popup.js
5. ✅ Cập nhật README.md với hướng dẫn sử dụng popup.min.js
6. ✅ Cập nhật package.json với script build:popup
7. ✅ Build và kiểm tra file popup.min.js
8. ✅ Sửa cấu hình manualChunks trong vite.config.js để phù hợp với Vite phiên bản mới
9. ✅ Thay đổi tên global object từ VipmaxLiveChat thành VippromaxLiveChat

## Things done

- Cập nhật vite.config.js để hỗ trợ build file popup.js thành popup.min.js
- Nâng cấp popup.js thành một API hoàn chỉnh với các phương thức:
  - init(): Khởi tạo LiveChat widget
  - open(): Mở cửa sổ chat
  - close(): Đóng cửa sổ chat
  - updateConfig(): Cập nhật cấu hình LiveChat
- Thêm khả năng tự động tạo container DOM element cho LiveChat widget
- Cập nhật BubbleChat component để lắng nghe các sự kiện từ popup.js
- Cập nhật README.md với hướng dẫn sử dụng popup.min.js
- Cập nhật package.json với script build:popup
- Build và kiểm tra file popup.min.js
- Sửa lỗi cấu hình manualChunks trong Rollup (chuyển từ object sang function)
- Đổi tên global object từ VipmaxLiveChat thành VippromaxLiveChat

## Things not done yet

- Các tính năng nâng cao có thể được thêm vào trong tương lai:
  - Hỗ trợ đa ngôn ngữ
  - Tùy chỉnh theme nâng cao
  - Analytics và tracking

## Modified files

- src/popup.js
- vite.config.js
- src/views/BubbleChat/index.vue
- README.md
- package.json
- memory_bank/wf_build_popup_min_js.md
