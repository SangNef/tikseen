<template>
  <div class="flex-1 overflow-y-auto p-6">
    <!-- Header document info -->
    <div class="flex items-center gap-2 mb-6">
      <GlobeAltIcon class="w-5 h-5 text-gray-600" />
      <h1 class="text-xl font-medium text-gray-800">Website Widget</h1>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
      <!-- Left content - Widget settings -->
      <div class="space-y-6">
        <div>
          <h2 class="text-lg font-medium text-gray-800 mb-4">Cài đặt Widget</h2>
          <div class="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <!-- Widget appearance -->
            <div class="space-y-3">
              <h3 class="text-sm font-medium text-gray-700">Màu sắc chính</h3>
              <div class="flex items-center gap-3">
                <div
                  v-for="(color, index) in themeColors"
                  :key="index"
                  @click="selectedThemeColor = color.value"
                  class="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center"
                  :style="{ backgroundColor: color.value }"
                  :class="[selectedThemeColor === color.value ? 'ring-2 ring-offset-2 ring-gray-400' : '']"></div>
                <div
                  class="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center bg-white border border-gray-300">
                  <PlusIcon class="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>

            <!-- Widget position -->
            <div class="space-y-3 pt-2">
              <h3 class="text-sm font-medium text-gray-700">Vị trí hiển thị</h3>
              <div class="grid grid-cols-2 gap-3">
                <div
                  @click="position = 'right'"
                  class="border rounded-lg p-3 cursor-pointer flex flex-col items-center"
                  :class="position === 'right' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
                  <div class="w-full h-16 bg-gray-100 rounded-md relative mb-2">
                    <div class="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-blue-500"></div>
                  </div>
                  <span class="text-sm font-medium">Phải</span>
                </div>
                <div
                  @click="position = 'left'"
                  class="border rounded-lg p-3 cursor-pointer flex flex-col items-center"
                  :class="position === 'left' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
                  <div class="w-full h-16 bg-gray-100 rounded-md relative mb-2">
                    <div class="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-blue-500"></div>
                  </div>
                  <span class="text-sm font-medium">Trái</span>
                </div>
              </div>
            </div>

            <!-- Widget icon -->
            <div class="space-y-3 pt-2">
              <h3 class="text-sm font-medium text-gray-700">Biểu tượng Widget</h3>
              <div class="grid grid-cols-4 gap-3">
                <div
                  v-for="(icon, i) in widgetIcons"
                  :key="i"
                  @click="selectedIcon = i"
                  class="border rounded-lg p-2 cursor-pointer flex items-center justify-center"
                  :class="selectedIcon === i ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
                  <component
                    :is="icon"
                    class="w-6 h-6"
                    :class="selectedIcon === i ? 'text-blue-500' : 'text-gray-500'" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Widget status toggle -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-base font-medium text-gray-800">Trạng thái Widget</h3>
              <p class="text-sm text-gray-500">Bật/tắt hiển thị widget trên website</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="isWidgetActive" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <!-- Right content - Preview -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-medium text-gray-800">Xem trước Widget</h2>
          <div class="flex items-center space-x-2">
            <button
              @click="previewDevice = 'desktop'"
              :class="[
                'p-2 rounded-lg',
                previewDevice === 'desktop' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100',
              ]">
              <ComputerDesktopIcon class="w-5 h-5" />
            </button>
            <button
              @click="previewDevice = 'mobile'"
              :class="[
                'p-2 rounded-lg',
                previewDevice === 'mobile' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100',
              ]">
              <DevicePhoneMobileIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="border-b border-gray-200 p-3 flex items-center">
            <div class="flex items-center gap-2">
              <div v-if="previewDevice === 'desktop'" class="flex space-x-1">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div v-else class="w-10 h-1 rounded-full bg-gray-300"></div>
            </div>
            <div class="flex-grow text-center">
              <span class="text-xs text-gray-500">example.com</span>
            </div>
          </div>

          <div class="w-full bg-gray-100 relative" :class="previewDevice === 'desktop' ? 'h-96' : 'h-[500px]'">
            <!-- Website content preview -->
            <div class="w-full h-full flex flex-col justify-between p-4">
              <div class="space-y-2">
                <div class="h-6 bg-gray-200 rounded w-3/4"></div>
                <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                <div class="h-4 bg-gray-200 rounded w-full"></div>
                <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>

              <!-- Widget button preview -->
              <div
                class="absolute rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
                :class="position === 'right' ? 'bottom-4 right-4' : 'bottom-4 left-4'"
                :style="{ backgroundColor: selectedThemeColor }">
                <component :is="widgetIcons[selectedIcon]" class="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 text-right">
          <button
            @click="saveChanges"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  GlobeAltIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  PhoneIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PlusIcon,
  ChevronLeftIcon,
} from '@heroicons/vue/24/outline';
import useResponsive from '@/composables/useResponsive';
import { getWidgetSettings, saveWidgetSettings } from '@/helpers/widgetSettingsHelper';

const { isMobile, setSettingMobileView } = useResponsive();

// Lấy cấu hình widget hiện tại
const currentSettings = getWidgetSettings();

// Widget settings
const selectedThemeColor = ref(currentSettings.themeColor || '#3b82f6');
const position = ref(currentSettings.position || 'right');
const selectedIcon = ref(currentSettings.selectedIcon || 0);
const isWidgetActive = ref(currentSettings.isWidgetActive !== false);

// Preview settings
const previewDevice = ref('desktop');

// Theme colors
const themeColors = [
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Green', value: '#10b981' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Orange', value: '#f97316' },
];

// Widget icons
const widgetIcons = [ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon, PhoneIcon];

function handleBack() {
  setSettingMobileView('menu');
}

// Lưu thay đổi cấu hình widget
function saveChanges() {
  const settings = {
    themeColor: selectedThemeColor.value,
    position: position.value,
    selectedIcon: selectedIcon.value,
    isWidgetActive: isWidgetActive.value,
  };

  if (saveWidgetSettings(settings)) {
    alert('Cấu hình widget đã được lưu thành công!');
  } else {
    alert('Có lỗi xảy ra khi lưu cấu hình widget!');
  }
}
</script>

<style scoped>
.preview-container {
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06);
}
</style>
