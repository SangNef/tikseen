<template>
  <div class="bg-gray-50 min-h-screen p-3 sm:p-6">
    <div class="mb-6 sm:mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">Thống kê hệ thống</h1>
      <p class="text-sm sm:text-base text-gray-600 mt-1">Tổng quan về hoạt động của hệ thống LiveChat</p>
    </div>

    <!-- Thống kê tổng quan -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
        <div class="flex items-center mb-3">
          <div class="p-2 sm:p-2.5 rounded-lg sm:rounded-xl" :class="stat.bgColor">
            <component :is="stat.icon" class="w-5 h-5 sm:w-6 sm:h-6" :class="stat.iconColor" />
          </div>
          <span class="text-gray-600 text-xs sm:text-sm ml-2 sm:ml-3 font-medium">{{ stat.name }}</span>
        </div>
        <div class="flex items-baseline mt-1 sm:mt-2">
          <span class="text-xl sm:text-3xl font-bold text-gray-800">{{ stat.value }}</span>
          <span
            class="ml-2 text-xs sm:text-sm font-medium flex items-center"
            :class="stat.changeColor"
            v-if="stat.change">
            <ArrowUpIcon class="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
            {{ stat.change }}
          </span>
        </div>
        <span class="text-xs text-gray-500 mt-0.5 sm:mt-1">So với tháng trước</span>
      </div>
    </div>

    <!-- Biểu đồ -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <!-- Biểu đồ lưu lượng truy cập -->
      <div
        class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div>
            <h2 class="font-bold text-gray-800 text-base sm:text-lg">Lưu lượng truy cập</h2>
            <p class="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">
              Biểu đồ theo dõi lượng truy cập theo thời gian
            </p>
          </div>
          <div class="bg-gray-100 rounded-full p-1 flex self-start sm:self-auto">
            <button
              v-for="period in ['Ngày', 'Tuần', 'Tháng']"
              :key="period"
              class="text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium transition-all duration-200"
              :class="
                selectedPeriod === period ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
              "
              @click="selectedPeriod = period">
              {{ period }}
            </button>
          </div>
        </div>
        <SimpleChart
          :data="
            selectedPeriod === 'Ngày'
              ? dailyTrafficData
              : selectedPeriod === 'Tuần'
                ? weeklyTrafficData
                : monthlyTrafficData
          "
          class="h-48 sm:h-64 p-5" />
      </div>

      <!-- Biểu đồ cuộc trò chuyện -->
      <div
        class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div>
            <h2 class="font-bold text-gray-800 text-base sm:text-lg">Phân tích cuộc trò chuyện</h2>
            <p class="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">Thống kê chi tiết các cuộc hội thoại</p>
          </div>
          <div class="bg-gray-100 rounded-full p-1 flex self-start sm:self-auto">
            <button
              v-for="type in ['Tổng quan', 'Chi tiết']"
              :key="type"
              class="text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium transition-all duration-200"
              :class="selectedType === type ? 'bg-indigo-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'"
              @click="selectedType = type">
              {{ type }}
            </button>
          </div>
        </div>
        <SimpleChart
          :data="selectedType === 'Tổng quan' ? conversationOverviewData : conversationDetailData"
          class="h-48 sm:h-64 p-5" />
      </div>
    </div>

    <!-- Bảng cuộc trò chuyện gần đây -->
    <div
      class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg mb-6 sm:mb-8 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div class="p-4 sm:p-6 border-b border-gray-100">
        <h2 class="font-bold text-gray-800 text-base sm:text-lg">Cuộc trò chuyện gần đây</h2>
        <p class="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">
          Danh sách các cuộc hội thoại mới nhất trên hệ thống
        </p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr class="text-left bg-gray-50">
              <th class="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-500 text-xs sm:text-sm">ID</th>
              <th class="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-500 text-xs sm:text-sm">Người dùng</th>
              <th class="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-500 text-xs sm:text-sm">Thời gian</th>
              <th class="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-500 text-xs sm:text-sm">Thời lượng</th>
              <th class="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-500 text-xs sm:text-sm">Tin nhắn</th>
              <th class="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-500 text-xs sm:text-sm">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(conversation, index) in conversations"
              :key="index"
              class="text-xs sm:text-sm border-t border-gray-100 hover:bg-blue-50 transition-colors duration-150">
              <td class="px-3 sm:px-6 py-3 sm:py-4 font-medium">{{ conversation.id }}</td>
              <td class="px-3 sm:px-6 py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="w-7 h-7 sm:w-9 sm:h-9 rounded-full overflow-hidden mr-2 sm:mr-3 border-2 border-gray-200">
                    <img :src="conversation.avatar" class="w-full h-full object-cover" />
                  </div>
                  <span class="font-medium">{{ conversation.user }}</span>
                </div>
              </td>
              <td class="px-3 sm:px-6 py-3 sm:py-4 text-gray-500">{{ conversation.time }}</td>
              <td class="px-3 sm:px-6 py-3 sm:py-4 text-gray-500">{{ conversation.duration }}</td>
              <td class="px-3 sm:px-6 py-3 sm:py-4 text-gray-500">{{ conversation.messages }}</td>
              <td class="px-3 sm:px-6 py-3 sm:py-4">
                <span
                  class="inline-flex px-2 sm:px-3 py-1 sm:py-1.5 text-xs rounded-full font-medium"
                  :class="{
                    'bg-green-100 text-green-700': conversation.status === 'Hoàn thành',
                    'bg-amber-100 text-amber-700': conversation.status === 'Đang xử lý',
                    'bg-red-100 text-red-700': conversation.status === 'Bỏ lỡ',
                  }">
                  {{ conversation.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="p-3 sm:p-5 flex justify-between items-center border-t border-gray-100 bg-gray-50">
        <span class="text-xs sm:text-sm text-gray-500">Hiển thị 1-10 của 56</span>
        <div class="flex">
          <button class="p-1.5 sm:p-2 mx-1 text-gray-500 hover:bg-gray-200 rounded-lg transition-colors">
            <ChevronLeftIcon class="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button class="p-1.5 sm:p-2 mx-1 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
            <ChevronRightIcon class="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CursorArrowRaysIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';
import SimpleChart from '@/components/Stats/SimpleChart.vue';

const selectedPeriod = ref('Ngày');
const selectedType = ref('Tổng quan');

const stats = ref([
  {
    name: 'Tổng người dùng',
    value: '12,546',
    change: '12%',
    icon: UserGroupIcon,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    changeColor: 'text-green-500',
  },
  {
    name: 'Cuộc hội thoại',
    value: '2,845',
    change: '18%',
    icon: ChatBubbleLeftRightIcon,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    changeColor: 'text-green-500',
  },
  {
    name: 'Thời gian phản hồi',
    value: '1.5 phút',
    change: '24%',
    icon: ClockIcon,
    bgColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
    changeColor: 'text-green-500',
  },
  {
    name: 'Tỷ lệ click',
    value: '42%',
    change: '8%',
    icon: CursorArrowRaysIcon,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    changeColor: 'text-green-500',
  },
]);

// Dữ liệu biểu đồ lưu lượng truy cập
const dailyTrafficData = ref([
  { label: 'T2', value: 1245, color: '#3b82f6' },
  { label: 'T3', value: 1422, color: '#3b82f6' },
  { label: 'T4', value: 1854, color: '#3b82f6' },
  { label: 'T5', value: 1678, color: '#3b82f6' },
  { label: 'T6', value: 2120, color: '#3b82f6' },
  { label: 'T7', value: 1345, color: '#3b82f6' },
  { label: 'CN', value: 980, color: '#3b82f6' },
]);

const weeklyTrafficData = ref([
  { label: 'Tuần 1', value: 5245, color: '#3b82f6' },
  { label: 'Tuần 2', value: 7422, color: '#3b82f6' },
  { label: 'Tuần 3', value: 6854, color: '#3b82f6' },
  { label: 'Tuần 4', value: 8120, color: '#3b82f6' },
]);

const monthlyTrafficData = ref([
  { label: 'Th1', value: 22450, color: '#3b82f6' },
  { label: 'Th2', value: 18650, color: '#3b82f6' },
  { label: 'Th3', value: 24580, color: '#3b82f6' },
  { label: 'Th4', value: 28790, color: '#3b82f6' },
  { label: 'Th5', value: 32450, color: '#3b82f6' },
  { label: 'Th6', value: 35670, color: '#3b82f6' },
]);

// Dữ liệu biểu đồ phân tích cuộc trò chuyện
const conversationOverviewData = ref([
  { label: 'Hoàn thành', value: 246, color: '#10b981' },
  { label: 'Đang xử lý', value: 87, color: '#f59e0b' },
  { label: 'Bỏ lỡ', value: 35, color: '#ef4444' },
]);

const conversationDetailData = ref([
  { label: 'Web', value: 156, color: '#3b82f6' },
  { label: 'Mobile', value: 98, color: '#8b5cf6' },
  { label: 'Email', value: 64, color: '#ec4899' },
  { label: 'Khác', value: 50, color: '#6b7280' },
]);

const conversations = ref([
  {
    id: '#LC-1234',
    user: 'Nguyễn Văn A',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    time: '2 giờ trước',
    duration: '15 phút',
    messages: '12',
    status: 'Hoàn thành',
  },
  {
    id: '#LC-1235',
    user: 'Trần Thị B',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    time: '3 giờ trước',
    duration: '8 phút',
    messages: '9',
    status: 'Hoàn thành',
  },
  {
    id: '#LC-1236',
    user: 'Lê Văn C',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    time: '4 giờ trước',
    duration: '20 phút',
    messages: '15',
    status: 'Đang xử lý',
  },
  {
    id: '#LC-1237',
    user: 'Phạm Thị D',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    time: '5 giờ trước',
    duration: '2 phút',
    messages: '3',
    status: 'Bỏ lỡ',
  },
  {
    id: '#LC-1238',
    user: 'Hoàng Văn E',
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    time: '6 giờ trước',
    duration: '12 phút',
    messages: '10',
    status: 'Hoàn thành',
  },
]);
</script>
