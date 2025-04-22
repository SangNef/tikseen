<template>
  <div
    v-if="!isMobile"
    class="sticky top-0 left-0 h-[var(--header-height)] bg-white border-b border-gray-200 flex justify-between items-center px-4 z-10">
    <!-- Left side - Search -->
    <div class="relative w-64">
      <div class="relative">
        <input
          type="text"
          placeholder="Search or ask"
          class="w-full px-4 py-2 pl-10 pr-8 bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
        <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <MagnifyingGlassIcon class="w-4 h-4" />
        </div>
        <div
          class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-xs text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded">
          <span>Ctrl</span>
          <span class="ml-1">K</span>
        </div>
      </div>
    </div>

    <!-- Right side - Actions -->
    <div class="flex items-center gap-2">
      <!-- Button with invite -->
      <button
        class="inline-flex items-center gap-1 py-1.5 px-3 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
        <PlusIcon class="w-4 h-4" />
        <span>Invite</span>
      </button>

      <!-- Notification button -->
      <div ref="notificationDropdownRef" class="relative">
        <button
          class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          @click="toggleNotificationDropdown">
          <div class="relative">
            <BellIcon class="w-5 h-5 text-gray-600" />
            <div
              v-if="notifications.length > 0"
              class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span class="text-white text-xs">{{ notifications.length }}</span>
            </div>
          </div>
        </button>

        <div
          v-if="showNotificationDropdown"
          class="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg w-72 z-50">
          <div class="p-3 border-b border-gray-100">
            <h3 class="font-medium text-gray-800">Thông báo</h3>
          </div>
          <div v-if="notifications.length > 0" class="max-h-96 overflow-y-auto">
            <div
              v-for="(notification, index) in notifications"
              :key="index"
              class="p-3 hover:bg-gray-50 border-b border-gray-100">
              <div class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <div>
                  <p class="text-sm text-gray-800">{{ notification.message }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ notification.time }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="p-4 text-center text-gray-500 text-sm">Không có thông báo mới</div>
          <div class="p-2 border-t border-gray-100 text-center">
            <button class="text-sm text-blue-500 hover:text-blue-700 hover:underline font-medium">Xem tất cả</button>
          </div>
        </div>
      </div>

      <!-- User profile button -->
      <div ref="userDropdownRef" class="relative">
        <button
          class="flex items-center gap-1 hover:bg-gray-100 rounded-full p-0.5 transition-colors"
          @click="toggleUserDropdown">
          <img :src="avt" alt="Avatar" class="w-8 h-8 rounded-full object-cover border border-gray-200" />
          <ChevronDownIcon class="w-4 h-4 text-gray-500" />
        </button>

        <div
          v-if="showUserDropdown"
          class="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg w-60 z-50 overflow-hidden">
          <div class="p-3 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <img :src="avt" alt="Avatar" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <p class="font-medium text-gray-800">Nguyễn Văn A</p>
                <p class="text-xs text-gray-500">admin@livechat.com</p>
              </div>
            </div>
          </div>
          <div class="py-1">
            <div
              v-for="(item, index) in userMenuItems"
              :key="index"
              class="px-4 py-2 hover:bg-gray-50 text-sm cursor-pointer flex items-center gap-2">
              <component :is="item.icon" class="w-5 h-5 text-gray-500" />
              <span class="text-gray-800">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import avt from '@/assets/images/ico/avt.webp';
import {
  BellIcon,
  ChevronDownIcon,
  UserIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline';

// State for notifications dropdown
const showNotificationDropdown = ref(false);
const notificationDropdownRef = ref(null);

import useResponsive from '@/composables/useResponsive';

const { isMobile } = useResponsive();

// State for user dropdown
const showUserDropdown = ref(false);
const userDropdownRef = ref(null);

// Mock notifications data
const notifications = ref([
  {
    message: 'Khách hàng mới đã đăng ký',
    time: '5 phút trước',
  },
  {
    message: 'Bạn có 3 tin nhắn chưa đọc',
    time: '1 giờ trước',
  },
  {
    message: 'Khách hàng đã gửi phản hồi về dịch vụ',
    time: '2 giờ trước',
  },
]);

// User menu items
const userMenuItems = [
  {
    label: 'Thông tin tài khoản',
    icon: UserIcon,
  },
  {
    label: 'Cài đặt',
    icon: Cog6ToothIcon,
  },
  {
    label: 'Trợ giúp',
    icon: QuestionMarkCircleIcon,
  },
  {
    label: 'Đăng xuất',
    icon: ArrowRightOnRectangleIcon,
  },
];

// Toggle notification dropdown
function toggleNotificationDropdown() {
  showNotificationDropdown.value = !showNotificationDropdown.value;
  if (showNotificationDropdown.value) {
    showUserDropdown.value = false;
  }
}

// Toggle user dropdown
function toggleUserDropdown() {
  showUserDropdown.value = !showUserDropdown.value;
  if (showUserDropdown.value) {
    showNotificationDropdown.value = false;
  }
}

// Close dropdowns when clicking outside
function handleClickOutside(event) {
  if (notificationDropdownRef.value && !notificationDropdownRef.value.contains(event.target)) {
    showNotificationDropdown.value = false;
  }

  if (userDropdownRef.value && !userDropdownRef.value.contains(event.target)) {
    showUserDropdown.value = false;
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style></style>
