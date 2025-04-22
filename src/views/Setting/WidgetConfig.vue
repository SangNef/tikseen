<template>
  <div class="flex-1 overflow-y-auto p-6">
    <!-- Header -->
    <div class="flex items-center gap-2 mb-6">
      <!-- <button v-if="isMobile" @click="handleBack" class="mr-1 p-1 rounded-md hover:bg-gray-100" aria-label="Quay lại">
        <ChevronLeftIcon class="w-5 h-5 text-gray-600" />
      </button> -->

      <Cog6ToothIcon class="w-5 h-5 text-gray-600" />
      <h1 class="text-xl font-medium text-gray-800">Cấu hình widget</h1>
      <!-- <div class="ml-auto">
        <a href="#" class="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
          <QuestionMarkCircleIcon class="w-5 h-5" />
          <span>Trung tâm trợ giúp</span>
        </a>
      </div> -->
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
      <!-- Left column -->
      <div class="space-y-8">
        <!-- Basic information -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-800 mb-4">Thông tin cơ bản</h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Tên doanh nghiệp</label>
              <input
                type="text"
                v-model="businessInfo.name"
                class="w-full border border-gray-300 rounded-lg p-2.5 text-sm"
                placeholder="Nhập tên doanh nghiệp của bạn" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input
                type="url"
                v-model="businessInfo.website"
                class="w-full border border-gray-300 rounded-lg p-2.5 text-sm"
                placeholder="https://example.com" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Logo</label>
              <div class="flex items-center gap-4">
                <div
                  class="h-16 w-16 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
                  <img
                    v-if="businessInfo.logo"
                    :src="businessInfo.logo"
                    alt="Logo"
                    class="w-full h-full object-cover" />
                  <BuildingOfficeIcon v-else class="w-10 h-10 text-gray-400" />
                </div>
                <div class="flex flex-col">
                  <button
                    class="px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 mb-1">
                    Tải logo lên
                  </button>
                  <span class="text-xs text-gray-500">PNG, JPG hoặc SVG (tối đa 2MB)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Operation hours -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-800 mb-4">Giờ hoạt động</h2>

          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-gray-700">Hiển thị giờ hoạt động</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="showOperationHours" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div v-if="showOperationHours" class="space-y-3">
            <div
              v-for="(day, index) in operationHours"
              :key="index"
              class="flex items-center justify-between border-b border-gray-100 last:border-0 pb-2">
              <span class="text-sm text-gray-700">{{ day.name }}</span>

              <div class="flex items-center gap-2">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="day.enabled" class="sr-only peer" />
                  <div
                    class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>

                <div v-if="day.enabled" class="flex items-center gap-1.5">
                  <select v-model="day.startHour" class="border border-gray-300 rounded-lg text-sm p-1.5">
                    <option v-for="hour in hourOptions" :key="hour" :value="hour">{{ hour }}</option>
                  </select>
                  <span class="text-xs">đến</span>
                  <select v-model="day.endHour" class="border border-gray-300 rounded-lg text-sm p-1.5">
                    <option v-for="hour in hourOptions" :key="hour" :value="hour">{{ hour }}</option>
                  </select>
                </div>

                <div v-else class="text-sm text-gray-500">Nghỉ</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Language settings -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-800 mb-4">Ngôn ngữ</h2>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Ngôn ngữ mặc định</label>
            <select v-model="language" class="w-full border border-gray-300 rounded-lg p-2.5 text-sm">
              <option value="vi">Tiếng Việt</option>
              <option value="en">Tiếng Anh</option>
              <option value="ja">Tiếng Nhật</option>
              <option value="ko">Tiếng Hàn</option>
              <option value="zh">Tiếng Trung</option>
            </select>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-700">Chuyển ngữ tự động</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="autoTranslate" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div class="text-right">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Lưu thay đổi
          </button>
        </div>
      </div>

      <!-- Right column -->
      <div class="space-y-8">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Xem trước</h2>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- Widget header -->
          <div class="bg-blue-600 p-4 text-white">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full overflow-hidden bg-white mr-3 flex items-center justify-center">
                <img v-if="businessInfo.logo" :src="businessInfo.logo" alt="Logo" class="w-full h-full object-cover" />
                <BuildingOfficeIcon v-else class="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <h3 class="font-medium text-sm">{{ businessInfo.name || 'Tên doanh nghiệp' }}</h3>
                <p class="text-xs opacity-80">{{ businessInfo.website || 'Website' }}</p>
              </div>
              <div class="ml-auto">
                <EllipsisVerticalIcon class="w-5 h-5 cursor-pointer" />
              </div>
            </div>
          </div>

          <!-- Widget body -->
          <div class="h-72 p-4 overflow-auto">
            <!-- Chat message example -->
            <div class="flex flex-col gap-4">
              <div class="flex justify-start">
                <div class="max-w-[80%] bg-gray-100 rounded-lg p-3 text-sm">
                  <p>Xin chào! Chúng tôi có thể giúp gì cho bạn?</p>
                </div>
              </div>

              <div class="flex justify-end">
                <div class="max-w-[80%] bg-blue-600 text-white rounded-lg p-3 text-sm">
                  <p>Tôi cần hỗ trợ về dịch vụ của bạn</p>
                </div>
              </div>

              <div class="flex justify-start">
                <div class="max-w-[80%] bg-gray-100 rounded-lg p-3 text-sm">
                  <p>Vâng, chúng tôi rất sẵn lòng hỗ trợ bạn! Xin vui lòng cho biết thêm thông tin.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Widget footer -->
          <div class="p-3 border-t border-gray-200">
            <div class="flex items-center gap-2">
              <div class="flex-grow">
                <input
                  type="text"
                  placeholder="Nhập tin nhắn..."
                  class="w-full border border-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <button class="p-2 bg-blue-600 text-white rounded-full">
                <PaperAirplaneIcon class="w-5 h-5" />
              </button>
            </div>

            <!-- Operation hours (if enabled) -->
            <div v-if="showOperationHours" class="mt-2 text-xs text-gray-500 text-center">
              <ClockIcon class="w-3.5 h-3.5 inline-block mr-1" />
              <span>Giờ làm việc: Thứ 2 - Thứ 6, 9:00 - 17:00</span>
            </div>

            <!-- Language selector (if auto translate enabled) -->
            <div v-if="autoTranslate" class="mt-2 text-xs text-gray-500 flex justify-center">
              <LanguageIcon class="w-3.5 h-3.5 inline-block mr-1" />
              <select class="text-xs border-none bg-transparent focus:outline-none">
                <option value="vi">Tiếng Việt</option>
                <option value="en">Tiếng Anh</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div class="flex items-center gap-2 text-gray-600 mb-2">
            <LightBulbIcon class="w-5 h-5" />
            <h4 class="font-medium">Mẹo</h4>
          </div>
          <p class="text-sm text-gray-600">
            Thông tin doanh nghiệp và giờ hoạt động sẽ giúp khách hàng nhận diện và biết khi nào họ có thể nhận được
            phản hồi từ bạn. Điều này tạo niềm tin và cải thiện trải nghiệm người dùng.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  BuildingOfficeIcon,
  ClockIcon,
  LanguageIcon,
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
  LightBulbIcon,
  ChevronLeftIcon,
} from '@heroicons/vue/24/outline';
import useResponsive from '@/composables/useResponsive';

const { isMobile, setSettingMobileView } = useResponsive();

// Business information
const businessInfo = ref({
  name: 'Công ty ABC',
  website: 'www.example.com',
  logo: null,
});

// Operation hours
const showOperationHours = ref(true);
const operationHours = ref([
  { name: 'Thứ 2', enabled: true, startHour: '09:00', endHour: '17:00' },
  { name: 'Thứ 3', enabled: true, startHour: '09:00', endHour: '17:00' },
  { name: 'Thứ 4', enabled: true, startHour: '09:00', endHour: '17:00' },
  { name: 'Thứ 5', enabled: true, startHour: '09:00', endHour: '17:00' },
  { name: 'Thứ 6', enabled: true, startHour: '09:00', endHour: '17:00' },
  { name: 'Thứ 7', enabled: false, startHour: '09:00', endHour: '12:00' },
  { name: 'Chủ nhật', enabled: false, startHour: '09:00', endHour: '12:00' },
]);

// Language settings
const language = ref('vi');
const autoTranslate = ref(true);

// Hour options for dropdowns
const hourOptions = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

function handleBack() {
  setSettingMobileView('menu');
}
</script>

<style scoped>
/* Custom scrollbar for the chat preview */
.overflow-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 3px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
