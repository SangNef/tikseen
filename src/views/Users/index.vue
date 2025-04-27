<template>
  <div class="p-3 md:p-5">
    <div class="mb-4">
      <h1 class="text-xl font-bold text-gray-800">Danh Sách Người Dùng</h1>
      <p class="text-sm text-gray-500 mt-1">Quản lý tài khoản người dùng trong hệ thống</p>
    </div>

    <!-- Thanh tìm kiếm và bộ lọc -->
    <div class="bg-white rounded-xl shadow-sm p-3 mb-2">
      <div class="flex flex-col md:flex-row gap-3">
        <div class="flex-1">
          <BaseInput
            v-model="searchTerm"
            placeholder="Tìm kiếm theo tên, email..."
            type="text"
            :showError="false"
            :prepend-icon="MagnifyingGlassIcon" />
        </div>
        <div class="flex-1">
          <BaseInput
            v-model="searchTerm"
            :showError="false"
            placeholder="Tìm kiếm theo ID"
            type="text"
            :prepend-icon="MagnifyingGlassIcon" />
        </div>
        <div class="flex flex-col md:flex-row gap-2">
          <select
            v-model="statusFilter"
            class="px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm h-11">
            <option value="">Trạng thái</option>
            <option value="active">Đang hoạt động</option>
            <option value="inactive">Không hoạt động</option>
            <option value="blocked">Đã khóa</option>
          </select>
          <select
            v-model="roleFilter"
            class="px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm h-11">
            <option value="">Vai trò</option>
            <option value="admin">Quản trị viên</option>
            <option value="agent">Nhân viên CSKH</option>
            <option value="user">Người dùng</option>
          </select>
          <BaseButton class="h-11" variant="primary" size="sm" @click="refreshUsers">
            <ArrowPathIcon class="w-4 h-4" />
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Bảng người dùng -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Người dùng
              </th>
              <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vai trò
              </th>
              <th scope="col" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Đăng nhập cuối
              </th>
              <th scope="col" class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50">
              <td class="px-4 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-8 w-8">
                    <img class="h-8 w-8 rounded-full object-cover" :src="user.avatar || defaultAvatar" alt="" />
                  </div>
                  <div class="ml-3">
                    <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                    <div class="text-xs text-gray-500">ID: {{ user.id }}</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-2 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ user.email }}</div>
              </td>
              <td class="px-4 py-2 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 py-0.5 inline-flex text-xs leading-5 font-medium rounded-full',
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : user.status === 'inactive'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800',
                  ]">
                  {{ statusText(user.status) }}
                </span>
              </td>
              <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {{ roleText(user.role) }}
              </td>
              <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {{ formatDate(user.lastLogin) }}
              </td>
              <td class="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                <div class="flex justify-end space-x-2">
                  <button class="text-blue-600 hover:text-blue-800" @click="viewUser(user.id)" title="Xem chi tiết">
                    <EyeIcon class="w-4 h-4" />
                  </button>
                  <button class="text-gray-600 hover:text-gray-800" @click="editUser(user.id)" title="Chỉnh sửa">
                    <PencilIcon class="w-4 h-4" />
                  </button>
                  <button
                    :class="[
                      user.status === 'blocked'
                        ? 'text-green-600 hover:text-green-800'
                        : 'text-red-600 hover:text-red-800',
                    ]"
                    @click="toggleUserStatus(user.id)"
                    :title="user.status === 'blocked' ? 'Mở khóa' : 'Khóa'">
                    <component :is="user.status === 'blocked' ? LockOpenIcon : LockClosedIcon" class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="filteredUsers.length === 0">
              <td colspan="6" class="px-4 py-3 text-center text-gray-500">
                Không tìm thấy người dùng nào phù hợp với tiêu chí tìm kiếm
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Phân trang -->
      <div class="bg-white px-4 py-2 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-xs text-gray-700">
              Hiển thị <span class="font-medium">{{ Math.min(1, filteredUsers.length) }}</span> đến
              <span class="font-medium">{{ Math.min(itemsPerPage, filteredUsers.length) }}</span> trong số
              <span class="font-medium">{{ filteredUsers.length }}</span> kết quả
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                class="relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                @click.prevent="currentPage > 1 && currentPage--">
                <span class="sr-only">Trang trước</span>
                <ChevronLeftIcon class="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                v-for="page in totalPages"
                :key="page"
                href="#"
                :class="[
                  'relative inline-flex items-center px-3 py-1 border text-sm font-medium',
                  currentPage === page
                    ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                ]"
                @click.prevent="currentPage = page">
                {{ page }}
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                @click.prevent="currentPage < totalPages && currentPage++">
                <span class="sr-only">Trang tiếp</span>
                <ChevronRightIcon class="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/Common/BaseInput.vue';
import BaseButton from '@/components/Common/BaseButton.vue';
import { users } from '@/data/users';
import {
  MagnifyingGlassIcon,
  PencilIcon,
  EyeIcon,
  ArrowPathIcon,
  LockClosedIcon,
  LockOpenIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

const router = useRouter();
const searchTerm = ref('');
const statusFilter = ref('');
const roleFilter = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(10);
const defaultAvatar = 'https://ui-avatars.com/api/?name=User&background=random';

// Sử dụng dữ liệu từ users.js
const usersList = ref(users);

// Lọc người dùng theo tiêu chí tìm kiếm
const filteredUsers = computed(() => {
  let result = usersList.value;

  if (searchTerm.value) {
    const searchLower = searchTerm.value.toLowerCase();
    result = result.filter(
      (user) => user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower)
    );
  }

  if (statusFilter.value) {
    result = result.filter((user) => user.status === statusFilter.value);
  }

  if (roleFilter.value) {
    result = result.filter((user) => user.role === roleFilter.value);
  }

  return result;
});

// Tổng số trang phân trang
const totalPages = computed(() => {
  return Math.ceil(filteredUsers.value.length / itemsPerPage.value);
});

// Format ngày tháng
const formatDate = (dateString) => {
  if (!dateString) return 'Chưa đăng nhập';

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

// Hiển thị text trạng thái
const statusText = (status) => {
  switch (status) {
    case 'active':
      return 'Đang hoạt động';
    case 'inactive':
      return 'Không hoạt động';
    case 'blocked':
      return 'Đã khóa';
    default:
      return 'Không xác định';
  }
};

// Hiển thị text vai trò
const roleText = (role) => {
  switch (role) {
    case 'admin':
      return 'Quản trị viên';
    case 'agent':
      return 'Nhân viên CSKH';
    case 'user':
      return 'Người dùng';
    default:
      return 'Không xác định';
  }
};

// Xem chi tiết người dùng
const viewUser = (userId) => {
  // Theo dõi lịch sử xem user
  trackUserView(userId);
  router.push(`/users/${userId}`);
};

// Chỉnh sửa người dùng
const editUser = (userId) => {
  router.push(`/users/${userId}/edit`);
};

// Khóa/mở khóa người dùng
const toggleUserStatus = (userId) => {
  const user = usersList.value.find((u) => u.id === userId);
  if (user) {
    if (user.status === 'blocked') {
      user.status = 'active';
    } else {
      user.status = 'blocked';
    }
  }
};

// Làm mới danh sách người dùng
const refreshUsers = () => {
  // Simulate API call
  console.log('Refreshing users list...');
  // Here you would typically make an API call to fetch updated user data
};

// Kiểm tra thông tin hoạt động người dùng từ localStorage
const checkUserActivity = () => {
  try {
    const usersData = localStorage.getItem('users_activity_data');
    if (usersData) {
      const usersActivity = JSON.parse(usersData);

      // Cập nhật thông tin hoạt động cho danh sách người dùng
      usersList.value.forEach((user) => {
        const userActivity = usersActivity[user.id];
        if (userActivity && userActivity.lastActive) {
          // Cập nhật thời gian đăng nhập cuối
          user.lastLogin = userActivity.lastActive;

          // Cập nhật trạng thái dựa trên thời gian hoạt động
          const lastActive = new Date(userActivity.lastActive);
          const now = new Date();
          const diffMinutes = Math.floor((now - lastActive) / (1000 * 60));

          // Nếu hoạt động trong vòng 5 phút, đánh dấu là đang hoạt động
          if (diffMinutes < 5) {
            user.status = 'active';
          } else if (diffMinutes < 60) {
            user.status = 'inactive';
          }
        }
      });

      console.log('Đã cập nhật thông tin hoạt động người dùng từ localStorage');
    }
  } catch (error) {
    console.error('Lỗi khi kiểm tra thông tin hoạt động người dùng:', error);
  }
};

// Lưu thông tin người dùng đang xem vào localStorage
const trackUserView = (userId) => {
  if (!userId) return;

  try {
    const usersData = localStorage.getItem('users_view_history');
    let viewHistory = usersData ? JSON.parse(usersData) : [];

    // Thêm vào lịch sử xem, loại bỏ trùng lặp
    const existingIndex = viewHistory.findIndex((id) => id === userId);
    if (existingIndex !== -1) {
      viewHistory.splice(existingIndex, 1);
    }
    viewHistory.unshift(userId);

    // Giới hạn lịch sử xem
    if (viewHistory.length > 10) {
      viewHistory = viewHistory.slice(0, 10);
    }

    localStorage.setItem('users_view_history', JSON.stringify(viewHistory));
  } catch (error) {
    console.error('Lỗi khi lưu lịch sử xem người dùng:', error);
  }
};

onMounted(() => {
  // Kiểm tra thông tin hoạt động người dùng khi component được tạo
  checkUserActivity();

  // Cập nhật thông tin định kỳ
  const activityInterval = setInterval(checkUserActivity, 30000); // Cập nhật mỗi 30 giây

  // Clear interval khi component unmount
  onBeforeUnmount(() => {
    clearInterval(activityInterval);
  });
});
</script>
