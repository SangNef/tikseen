<template>
  <div class="flex-1 overflow-y-auto p-4 sm:p-6">
    <!-- Header document info -->
    <div class="flex items-center gap-2 mb-6">
      <DocumentIcon class="w-5 h-5 text-gray-600" />
      <h1 class="text-lg sm:text-xl font-medium text-gray-800">Apple Messages</h1>
      <div class="ml-auto">
        <a href="#" class="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
          <QuestionMarkCircleIcon class="w-5 h-5" />
          <!-- <span class="hidden sm:inline">Trung tâm trợ giúp</span> -->
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Left content -->
      <div class="w-full md:w-1/2">
        <!-- Available in business info -->
        <div class="mb-6">
          <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Có sẵn trong các gói BUSINESS & ENTERPRISE
          </div>
          <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Tương tác ở nơi giao tiếp diễn ra</h2>
          <p class="text-sm sm:text-base text-gray-600">
            Cho phép hơn 1.65 tỷ người dùng Apple kết nối với bạn chỉ như họ vẫn thường làm với bạn bè trong iMessage.
            Nhóm chăm sóc khách hàng của bạn sẽ trò chuyện với người dùng Apple trực tiếp từ ứng dụng LiveChat Agent.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-3 mb-6">
          <a
            href="#"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base">
            Xem các gói giá
          </a>
          <a href="#" class="px-4 py-2 text-blue-600 hover:text-blue-700 transition text-sm sm:text-base">
            Tìm hiểu thêm
          </a>
        </div>
      </div>

      <!-- Right content - Image -->
      <div class="w-full md:w-1/2">
        <div class="relative">
          <img
            src="https://www.livechat.com/wp-content/uploads/2020/10/LiveChat-Apple-Messages-for-Business-integration.png"
            alt="Apple Messages for Business integration"
            class="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DocumentIcon, QuestionMarkCircleIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline';
import useResponsive from '@/composables/useResponsive';

const { isMobile, setSettingMobileView } = useResponsive();

function handleBack() {
  setSettingMobileView('menu');
}
</script>

<style scoped></style>
