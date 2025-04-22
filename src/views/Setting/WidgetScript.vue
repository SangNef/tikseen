<template>
  <div class="flex-1 overflow-y-auto p-4 sm:p-6">
    <!-- Header document info -->
    <div class="flex items-center gap-2 mb-6">
      <CodeBracketIcon class="w-5 h-5 text-gray-600" />
      <h1 class="text-lg sm:text-xl font-medium text-gray-800">Mã nhúng widget</h1>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
      <!-- Left column - Installation instructions -->
      <div class="space-y-5">
        <!-- Script code -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="p-4 sm:p-6">
            <h2 class="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Mã nhúng LiveChat</h2>
            <p class="text-sm text-gray-600 mb-4">
              Sao chép đoạn mã dưới đây và dán vào trang web của bạn trước thẻ đóng &lt;/body&gt; để kích hoạt LiveChat.
            </p>
          </div>

          <div class="relative">
            <pre
              class="bg-gray-900 p-3 sm:p-4 text-gray-300 text-xs sm:text-sm overflow-x-auto"><code>&lt;!-- LiveChat Widget --&gt;
&lt;script&gt;
  (function(w, d, s, u) {
    var f = d.getElementsByTagName(s)[0];
    var l = d.createElement(s);
    l.type = 'text/javascript';
    l.async = true;
    l.src = u;
    f.parentNode.insertBefore(l, f);
  })(window, document, 'script', 'https://cdn.livechatinc.com/widget/{{ scriptId }}.js');
&lt;/script&gt;</code></pre>

            <div class="absolute top-2 right-2">
              <button
                @click="copyToClipboard"
                class="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-lg flex items-center gap-1 transition">
                <DocumentDuplicateIcon class="w-4 h-4" />
                <span>{{ copied ? 'Đã sao chép' : 'Sao chép' }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Installation guide -->
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h2 class="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Hướng dẫn cài đặt</h2>

          <div class="space-y-4 sm:space-y-5">
            <div class="flex gap-2 sm:gap-3">
              <div
                class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm">
                1
              </div>
              <div class="space-y-1">
                <h3 class="text-sm sm:text-base font-medium text-gray-800">Sao chép mã nhúng</h3>
                <p class="text-xs sm:text-sm text-gray-600">
                  Sao chép đoạn mã JavaScript được cung cấp ở trên bằng cách nhấp vào nút "Sao chép".
                </p>
              </div>
            </div>

            <div class="flex gap-2 sm:gap-3">
              <div
                class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm">
                2
              </div>
              <div class="space-y-1">
                <h3 class="text-sm sm:text-base font-medium text-gray-800">Mở mã nguồn website</h3>
                <p class="text-xs sm:text-sm text-gray-600">
                  Truy cập vào file HTML chính hoặc khu vực quản trị của hệ thống quản lý nội dung.
                </p>
              </div>
            </div>

            <div class="flex gap-2 sm:gap-3">
              <div
                class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm">
                3
              </div>
              <div class="space-y-1">
                <h3 class="text-sm sm:text-base font-medium text-gray-800">Dán mã nhúng vào trang web</h3>
                <p class="text-xs sm:text-sm text-gray-600">
                  Dán đoạn mã vào trang web của bạn ngay trước thẻ đóng
                  <span class="font-mono text-xs bg-gray-100 px-1">&lt;/body&gt;</span>.
                </p>
              </div>
            </div>

            <div class="flex gap-2 sm:gap-3">
              <div
                class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium text-sm">
                4
              </div>
              <div class="space-y-1">
                <h3 class="text-sm sm:text-base font-medium text-gray-800">Lưu và kiểm tra</h3>
                <p class="text-xs sm:text-sm text-gray-600">
                  Lưu các thay đổi và truy cập trang web để đảm bảo LiveChat hoạt động chính xác.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CMS specific instructions -->
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h2 class="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Hướng dẫn theo nền tảng</h2>

          <div class="space-y-3 sm:space-y-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174881.png" alt="WordPress" class="w-5 h-5" />
                <h3 class="text-sm sm:text-base font-medium text-gray-800">WordPress</h3>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 pl-7">
                Cài đặt plugin "LiveChat" từ kho plugin hoặc thêm mã vào footer qua Theme Editor.
              </p>
            </div>

            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/825/825508.png" alt="Shopify" class="w-5 h-5" />
                <h3 class="text-sm sm:text-base font-medium text-gray-800">Shopify</h3>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 pl-7">
                Cài đặt ứng dụng "LiveChat" từ Shopify App Store hoặc thêm mã vào theme.liquid.
              </p>
            </div>

            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968970.png" alt="Wix" class="w-5 h-5" />
                <h3 class="text-sm sm:text-base font-medium text-gray-800">Wix</h3>
              </div>
              <p class="text-xs sm:text-sm text-gray-600 pl-7">
                Đi đến Settings > Custom Code và dán mã nhúng với tùy chọn "Add code to all pages".
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right column - Additional info & integration options -->
      <div class="space-y-5">
        <!-- Preview widget -->
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h2 class="text-base sm:text-lg font-medium text-gray-800 mb-3">Xem trước widget</h2>

          <div class="bg-gray-100 rounded-lg p-4 sm:p-6 relative h-48 sm:h-60">
            <div
              class="absolute bottom-4 right-4 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
              <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>

          <p class="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
            Widget sẽ xuất hiện ở góc dưới phải của trang web. Khách hàng có thể nhấp vào nút này để bắt đầu trò chuyện.
          </p>
        </div>

        <!-- URL integration options -->
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h2 class="text-base sm:text-lg font-medium text-gray-800 mb-3">Tùy chọn tích hợp URL</h2>

          <p class="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
            Bạn có thể thêm tham số URL để nắm bắt thông tin bổ sung hoặc tự động hiển thị widget.
          </p>

          <div class="space-y-3 sm:space-y-4">
            <div class="border border-gray-200 rounded-lg p-3 sm:p-4">
              <h3 class="font-medium text-xs sm:text-sm text-gray-800 mb-2">Mở widget tự động</h3>
              <code class="block bg-gray-100 p-2 rounded text-xs text-gray-800 mb-2 overflow-x-auto whitespace-nowrap"
                >https://example.com/?livechat_open=true</code
              >
              <p class="text-xs text-gray-600">Thêm tham số này để tự động mở widget khi trang tải xong.</p>
            </div>

            <div class="border border-gray-200 rounded-lg p-3 sm:p-4">
              <h3 class="font-medium text-xs sm:text-sm text-gray-800 mb-2">Thiết lập thông tin khách hàng</h3>
              <code class="block bg-gray-100 p-2 rounded text-xs text-gray-800 mb-2 overflow-x-auto whitespace-nowrap"
                >https://example.com/?livechat_name=NguyenVanA&livechat_email=example@gmail.com</code
              >
              <p class="text-xs text-gray-600">Điền trước thông tin khách hàng để tạo trải nghiệm cá nhân hóa.</p>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h2 class="text-base sm:text-lg font-medium text-gray-800 mb-3">Câu hỏi thường gặp</h2>

          <div class="space-y-3 sm:space-y-4">
            <div class="border-b border-gray-100 pb-3">
              <button @click="toggleFaq(0)" class="flex items-center justify-between w-full text-left">
                <h3 class="font-medium text-xs sm:text-sm text-gray-800">
                  Tôi không thấy widget trên trang web của mình?
                </h3>
                <ChevronDownIcon
                  class="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-200"
                  :class="openFaq === 0 ? 'transform rotate-180' : ''" />
              </button>
              <div v-if="openFaq === 0" class="mt-2 text-xs sm:text-sm text-gray-600">
                Đảm bảo rằng bạn đã dán mã nhúng đúng vị trí và không có lỗi JavaScript nào xuất hiện. Kiểm tra xem có
                plugin hay extension nào đang chặn script không.
              </div>
            </div>

            <div class="border-b border-gray-100 pb-3">
              <button @click="toggleFaq(1)" class="flex items-center justify-between w-full text-left">
                <h3 class="font-medium text-xs sm:text-sm text-gray-800">
                  Làm thế nào để tùy chỉnh màu sắc và vị trí của widget?
                </h3>
                <ChevronDownIcon
                  class="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-200"
                  :class="openFaq === 1 ? 'transform rotate-180' : ''" />
              </button>
              <div v-if="openFaq === 1" class="mt-2 text-xs sm:text-sm text-gray-600">
                Bạn có thể tùy chỉnh màu sắc, vị trí và biểu tượng của widget trong phần "Website Widget" tại menu cài
                đặt.
              </div>
            </div>

            <div class="border-b border-gray-100 pb-3">
              <button @click="toggleFaq(2)" class="flex items-center justify-between w-full text-left">
                <h3 class="font-medium text-xs sm:text-sm text-gray-800">
                  LiveChat có hoạt động trên thiết bị di động không?
                </h3>
                <ChevronDownIcon
                  class="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-200"
                  :class="openFaq === 2 ? 'transform rotate-180' : ''" />
              </button>
              <div v-if="openFaq === 2" class="mt-2 text-xs sm:text-sm text-gray-600">
                Có, LiveChat được tối ưu hóa cho cả thiết bị desktop và di động, đảm bảo trải nghiệm tốt trên mọi thiết
                bị.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  CodeBracketIcon,
  QuestionMarkCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentDuplicateIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
} from '@heroicons/vue/24/outline';
import useResponsive from '@/composables/useResponsive';

const { isMobile, setSettingMobileView } = useResponsive();

// Script ID
const scriptId = ref('abc123def456');
const copied = ref(false);

// Copy script to clipboard
function copyToClipboard() {
  const scriptCode = `<!-- LiveChat Widget -->
<script>
  (function(w, d, s, u) {
    var f = d.getElementsByTagName(s)[0];
    var l = d.createElement(s);
    l.type = 'text/javascript';
    l.async = true;
    l.src = u;
    f.parentNode.insertBefore(l, f);
  })(window, document, 'script', 'https://cdn.livechatinc.com/widget/${scriptId.value}.js');
</${'script'}>`; // This is a workaround to avoid script tag conflict

  navigator.clipboard.writeText(scriptCode).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  });
}

// FAQ toggle
const openFaq = ref(null);

function toggleFaq(index) {
  if (openFaq.value === index) {
    openFaq.value = null;
  } else {
    openFaq.value = index;
  }
}

function handleBack() {
  setSettingMobileView('menu');
}
</script>

<style scoped>
pre {
  scrollbar-width: thin;
  scrollbar-color: #4b5563 #1f2937;
}

pre::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

pre::-webkit-scrollbar-track {
  background: #1f2937;
}

pre::-webkit-scrollbar-thumb {
  background-color: #4b5563;
  border-radius: 3px;
}
</style>
