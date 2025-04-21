<template>
  <div class="sticky top-0 left-0 h-12 bg-cyan-950 flex justify-between items-center px-6">
    <div class=""></div>
    <div class="flex items-center gap-3">
      <!-- Notification dropdown -->
      <div ref="notificationDropdownRef" class="relative">
        <div class="cursor-pointer text-white" @click="toggleNotificationDropdown">
          <div class="relative">
            <BellIcon class="w-6 h-6 stroke-2" />
            <div
              v-if="notifications.length > 0"
              class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span class="text-white text-xs">{{ notifications.length }}</span>
            </div>
          </div>
        </div>

        <div
          v-if="showNotificationDropdown"
          class="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded shadow w-72 z-50">
          <div class="p-2 border-b border-gray-200">
            <h3 class="font-semibold">Thông báo</h3>
          </div>
          <div v-if="notifications.length > 0" class="max-h-96 overflow-y-auto">
            <div
              v-for="(notification, index) in notifications"
              :key="index"
              class="p-3 hover:bg-gray-100 border-b border-gray-200">
              <div class="flex items-start">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                <div>
                  <p class="text-sm">{{ notification.message }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ notification.time }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="p-4 text-center text-gray-500">Không có thông báo mới</div>
          <div class="p-2 border-t border-gray-200 text-center">
            <button class="text-sm text-blue-500 hover:underline">Xem tất cả</button>
          </div>
        </div>
      </div>

      <!-- User profile dropdown -->
      <div ref="userDropdownRef" class="relative">
        <div class="cursor-pointer flex items-center" @click="toggleUserDropdown">
          <img :src="avt" alt="" class="w-9 h-9 rounded-full" />
          <ChevronDownIcon class="w-4 h-4 text-white ml-1" />
        </div>

        <div
          v-if="showUserDropdown"
          class="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded shadow w-60 z-50">
          <div class="p-3 border-b border-gray-200">
            <div class="flex items-center gap-2">
              <img :src="avt" alt="" class="w-10 h-10 rounded-full" />
              <div>
                <p class="font-medium">Nguyễn Văn A</p>
                <p class="text-xs text-gray-500">admin@livechat.com</p>
              </div>
            </div>
          </div>
          <div class="py-1">
            <div
              v-for="(item, index) in userMenuItems"
              :key="index"
              class="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer flex items-center gap-2">
              <component :is="item.icon" class="w-5 h-5 text-gray-500" />
              <span>{{ item.label }}</span>
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
} from '@heroicons/vue/24/outline';

// State for notifications dropdown
const showNotificationDropdown = ref(false);
const notificationDropdownRef = ref(null);

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
