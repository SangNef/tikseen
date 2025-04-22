<template>
  <div class="flex-1 overflow-y-auto p-6">
    <div class="flex items-center gap-2 mb-6">
      <ClockIcon class="w-5 h-5 text-gray-600" />
      <h1 class="text-xl font-medium text-gray-800">Tính năng sắp ra mắt</h1>
    </div>

    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8 text-center">
      <div class="mb-6">
        <div class="mx-auto w-24 h-24 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
          <RocketLaunchIcon class="w-12 h-12" />
        </div>
      </div>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Tính năng đang được phát triển!</h2>

      <p class="text-gray-600 mb-6 text-lg">
        Chúng tôi đang nỗ lực hoàn thiện tính năng này để mang đến trải nghiệm tốt nhất cho bạn. Vui lòng quay lại sau.
      </p>

      <div class="flex justify-center gap-4">
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
          <BellAlertIcon class="w-5 h-5" />
          <span>Thông báo khi hoàn thành</span>
        </button>

        <button
          class="border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center gap-2 text-gray-700">
          <ArrowPathIcon class="w-5 h-5" />
          <span>Kiểm tra cập nhật</span>
        </button>
      </div>

      <div class="mt-10 border-t border-gray-200 pt-6">
        <h3 class="text-sm font-medium text-gray-700 mb-4">Những tính năng sắp ra mắt</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <TagIcon class="w-5 h-5 text-blue-600" />
              <h4 class="font-medium">Quản lý tags</h4>
            </div>
            <p class="text-xs text-gray-600">
              Phân loại cuộc trò chuyện và tổ chức dữ liệu với hệ thống tag thông minh
            </p>
          </div>

          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <ChatBubbleOvalLeftEllipsisIcon class="w-5 h-5 text-blue-600" />
              <h4 class="font-medium">Tích hợp Facebook</h4>
            </div>
            <p class="text-xs text-gray-600">
              Kết nối Messenger vào hệ thống và trả lời khách hàng từ một nơi duy nhất
            </p>
          </div>

          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <ChartBarIcon class="w-5 h-5 text-blue-600" />
              <h4 class="font-medium">Phân tích dữ liệu</h4>
            </div>
            <p class="text-xs text-gray-600">
              Báo cáo chi tiết về hiệu suất chat, thời gian phản hồi và mức độ hài lòng
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ClockIcon,
  RocketLaunchIcon,
  BellAlertIcon,
  ArrowPathIcon,
  TagIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline';
</script>

<style scoped></style>
