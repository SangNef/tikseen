<template>
  <div class="flex-1 overflow-y-auto p-6">
    <!-- Header document info -->
    <div class="flex items-center gap-2 mb-6">
      <ChatBubbleBottomCenterTextIcon class="w-5 h-5 text-gray-600" />
      <h1 class="text-xl font-medium text-gray-800">Cấu hình lời chào</h1>
    </div>

    <!-- Grid layout adjusted for responsive design -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left column -->
      <div class="space-y-6">
        <!-- Greeting settings -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-medium text-gray-800">Lời chào tự động</h2>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="isGreetingEnabled" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div v-if="isGreetingEnabled" class="space-y-5">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Thời gian hiển thị sau khi khách truy cập</label>
              <div class="flex items-center">
                <input
                  type="number"
                  v-model="greetingDelay"
                  min="0"
                  max="120"
                  class="w-20 border border-gray-300 rounded-lg p-2 text-sm" />
                <span class="ml-2 text-sm text-gray-600">giây</span>
              </div>
              <div class="text-xs text-gray-500">Đặt 0 để hiển thị ngay lập tức</div>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Lời chào</label>
              <textarea
                v-model="greetingMessage"
                rows="3"
                class="w-full border border-gray-300 rounded-lg p-3 text-sm"
                placeholder="Nhập lời chào của bạn..."></textarea>
              <div class="text-xs text-gray-500">
                Sử dụng biến {visitor_name} để thêm tên khách hàng vào lời chào (nếu có)
              </div>
            </div>
          </div>
        </div>

        <!-- Agent information -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-800 mb-4">Thông tin nhân viên</h2>

          <div class="space-y-4">
            <div class="grid grid-cols-4 gap-4">
              <div
                v-for="(agent, index) in agents"
                :key="index"
                @click="selectedAgent = index"
                class="relative cursor-pointer">
                <div
                  class="aspect-square rounded-lg overflow-hidden border-2"
                  :class="selectedAgent === index ? 'border-blue-500' : 'border-transparent'">
                  <img :src="agent.avatar" alt="Agent" class="w-full h-full object-cover" />
                </div>
                <div class="mt-1 text-xs text-center">{{ agent.name }}</div>
                <div
                  v-if="selectedAgent === index"
                  class="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full p-0.5">
                  <CheckIcon class="w-3 h-3" />
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Tên nhân viên hiển thị</label>
              <input
                type="text"
                v-model="agents[selectedAgent].name"
                class="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Chức danh</label>
              <input
                type="text"
                v-model="agents[selectedAgent].title"
                class="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>
          </div>
        </div>

        <!-- Advanced settings -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-800 mb-4">Cài đặt nâng cao</h2>

          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-700">Hiển thị trên thiết bị di động</h3>
                <p class="text-xs text-gray-500">Lời chào sẽ hiển thị trên cả thiết bị di động</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="showOnMobile" class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-700">Âm thanh thông báo</h3>
                <p class="text-xs text-gray-500">Phát âm thanh khi hiển thị lời chào</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="playSoundOnGreeting" class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-700">Tự động ẩn sau</h3>
                <p class="text-xs text-gray-500">Ẩn lời chào sau một khoảng thời gian</p>
              </div>
              <div class="flex items-center gap-2">
                <input
                  type="number"
                  v-model="autoHideDelay"
                  min="0"
                  class="w-16 border border-gray-300 rounded-lg p-1.5 text-sm" />
                <span class="text-sm text-gray-600">giây</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-right">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Lưu thay đổi
          </button>
        </div>
      </div>

      <!-- Right column -->
      <div>
        <h2 class="text-lg font-medium text-gray-800 mb-4">Xem trước</h2>

        <div class="bg-gray-100 rounded-xl p-6 h-96 relative">
          <!-- Website simulation -->
          <div class="bg-white rounded-lg p-4 shadow-sm h-full">
            <div class="h-8 flex items-center border-b pb-2 mb-4">
              <div class="flex space-x-1">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div class="flex-1 flex justify-center">
                <div class="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-500">example.com</div>
              </div>
            </div>

            <div class="space-y-3">
              <div class="h-6 bg-gray-100 w-1/2 rounded"></div>
              <div class="h-4 bg-gray-100 w-full rounded"></div>
              <div class="h-4 bg-gray-100 w-2/3 rounded"></div>
              <div class="h-4 bg-gray-100 w-full rounded"></div>
              <div class="h-4 bg-gray-100 w-3/4 rounded"></div>
            </div>
          </div>

          <!-- Chat widget button -->
          <div
            class="absolute bottom-10 right-10 h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
            <ChatBubbleOvalLeftEllipsisIcon class="w-7 h-7" />
          </div>

          <!-- Greeting popup -->
          <div
            v-if="isGreetingEnabled"
            class="absolute bottom-28 right-10 w-72 bg-white rounded-xl shadow-xl overflow-hidden">
            <div class="bg-blue-600 text-white p-3 flex items-start">
              <div class="mr-3">
                <div class="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                  <img :src="agents[selectedAgent].avatar" alt="Agent" class="w-full h-full object-cover" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-medium text-sm">{{ agents[selectedAgent].name }}</h3>
                <p class="text-xs text-blue-100">{{ agents[selectedAgent].title }}</p>
              </div>
              <button class="text-white">
                <XMarkIcon class="w-5 h-5" />
              </button>
            </div>
            <div class="p-3">
              <p class="text-sm text-gray-700">{{ greetingMessage }}</p>
            </div>
            <div class="bg-gray-50 p-3 flex">
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                class="w-full text-sm border border-gray-300 rounded-full py-1.5 px-3 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        <div class="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div class="flex items-center gap-2 text-gray-600 mb-2">
            <LightBulbIcon class="w-5 h-5" />
            <h4 class="font-medium">Mẹo sử dụng</h4>
          </div>
          <p class="text-sm text-gray-600">
            Lời chào tự động là cách tuyệt vời để khởi đầu cuộc trò chuyện với khách hàng. Hãy giữ thông điệp ngắn gọn,
            thân thiện và có nội dung cụ thể. Thiết lập thời gian hiển thị phù hợp để không làm phiền khách tham quan.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ChatBubbleBottomCenterTextIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  CheckIcon,
  XMarkIcon,
  LightBulbIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/vue/24/outline';
import useResponsive from '@/composables/useResponsive';

const { isMobile, setSettingMobileView } = useResponsive();

// Greeting settings
const isGreetingEnabled = ref(true);
const greetingDelay = ref(5);
const greetingMessage = ref('Xin chào! Chúng tôi có thể giúp gì cho bạn hôm nay?');
const showOnMobile = ref(true);
const playSoundOnGreeting = ref(true);
const autoHideDelay = ref(0);

// Agent information
const selectedAgent = ref(0);
const agents = ref([
  {
    name: 'Nguyễn Văn A',
    title: 'Chuyên viên hỗ trợ',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Trần Thị B',
    title: 'Quản lý hỗ trợ',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Lê Văn C',
    title: 'Kỹ thuật viên',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
  {
    name: 'Phạm Thị D',
    title: 'Nhân viên tư vấn',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
]);

function handleBack() {
  setSettingMobileView('menu');
}
</script>

<style scoped></style>
