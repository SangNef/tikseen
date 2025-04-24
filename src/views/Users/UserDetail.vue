<template>
  <div class="p-3 md:p-5">
    <div class="mb-4 flex items-center">
      <button @click="router.go(-1)" class="mr-2 text-gray-600 hover:text-gray-800">
        <ArrowLeftIcon class="w-4 h-4" />
      </button>
      <h1 class="text-xl font-bold text-gray-800">Thông Tin Người Dùng</h1>
    </div>

    <div v-if="loading" class="flex justify-center items-center h-48">
      <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-800">
      {{ error }}
    </div>

    <div v-else-if="user" class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Thông tin cơ bản -->
      <div class="bg-white rounded-xl shadow-sm p-4 md:col-span-1">
        <div class="flex flex-col items-center mb-4">
          <div class="w-20 h-20 rounded-full overflow-hidden mb-3">
            <img :src="user.avatar || defaultAvatar" alt="Avatar" class="w-full h-full object-cover" />
          </div>
          <h2 class="text-lg font-semibold text-gray-800">{{ user.name }}</h2>
          <p class="text-sm text-gray-500">{{ roleText(user.role) }}</p>
          <div class="mt-1">
            <span
              :class="[
                'px-2 py-0.5 text-xs font-medium rounded-full',
                user.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : user.status === 'inactive'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800',
              ]">
              {{ statusText(user.status) }}
            </span>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-3">
          <div class="flex items-center mb-3">
            <EnvelopeIcon class="w-4 h-4 text-gray-400 mr-2" />
            <div>
              <div class="text-xs text-gray-500">Email</div>
              <div class="text-sm">{{ user.email }}</div>
            </div>
          </div>
          <div class="flex items-center mb-3">
            <PhoneIcon class="w-4 h-4 text-gray-400 mr-2" />
            <div>
              <div class="text-xs text-gray-500">Điện thoại</div>
              <div class="text-sm">{{ user.phone || 'Chưa cập nhật' }}</div>
            </div>
          </div>
          <div class="flex items-center mb-3">
            <ClockIcon class="w-4 h-4 text-gray-400 mr-2" />
            <div>
              <div class="text-xs text-gray-500">Đăng nhập cuối</div>
              <div class="text-sm">{{ formatDate(user.lastLogin) }}</div>
            </div>
          </div>
          <div class="flex items-center">
            <CalendarIcon class="w-4 h-4 text-gray-400 mr-2" />
            <div>
              <div class="text-xs text-gray-500">Ngày tạo tài khoản</div>
              <div class="text-sm">{{ formatDate(user.createdAt) }}</div>
            </div>
          </div>
        </div>

        <div class="mt-4 flex gap-2">
          <BaseButton variant="secondary" size="sm" class="flex-1" @click="editUser">
            <PencilIcon class="w-3.5 h-3.5 mr-1" />
            Chỉnh sửa
          </BaseButton>
          <BaseButton
            :variant="user.status === 'blocked' ? 'success' : 'danger'"
            size="sm"
            class="flex-1"
            @click="toggleUserStatus">
            <component :is="user.status === 'blocked' ? LockOpenIcon : LockClosedIcon" class="w-3.5 h-3.5 mr-1" />
            {{ user.status === 'blocked' ? 'Mở khóa' : 'Khóa' }}
          </BaseButton>
        </div>
      </div>

      <!-- Thông tin chi tiết -->
      <div class="md:col-span-2 space-y-4">
        <div class="bg-white rounded-xl shadow-sm p-4">
          <h3 class="text-base font-semibold mb-3 flex items-center">
            <InformationCircleIcon class="w-4 h-4 text-blue-500 mr-1.5" />
            Thông tin chi tiết
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="text-xs text-gray-500 mb-0.5">Họ và tên</div>
              <div class="text-sm font-medium">{{ user.name }}</div>
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-0.5">Ngày sinh</div>
              <div class="text-sm font-medium">{{ formatDate(user.birthDate) || 'Chưa cập nhật' }}</div>
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-0.5">Giới tính</div>
              <div class="text-sm font-medium">{{ genderText(user.gender) }}</div>
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-0.5">Địa chỉ</div>
              <div class="text-sm font-medium">{{ user.address || 'Chưa cập nhật' }}</div>
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-0.5">Công ty</div>
              <div class="text-sm font-medium">{{ user.company || 'Chưa cập nhật' }}</div>
            </div>
            <div>
              <div class="text-xs text-gray-500 mb-0.5">Chức vụ</div>
              <div class="text-sm font-medium">{{ user.jobTitle || 'Chưa cập nhật' }}</div>
            </div>
          </div>
        </div>

        <!-- Hoạt động gần đây -->
        <div class="bg-white rounded-xl shadow-sm p-4">
          <h3 class="text-base font-semibold mb-3 flex items-center">
            <ClockIcon class="w-4 h-4 text-blue-500 mr-1.5" />
            Hoạt động gần đây
          </h3>

          <div class="space-y-3">
            <div v-for="(activity, index) in userActivities" :key="index" class="border-l-2 border-gray-200 pl-3 pb-2">
              <div class="flex items-start">
                <div
                  class="w-1.5 h-1.5 rounded-full mt-1.5 -ml-[9px]"
                  :class="{
                    'bg-blue-500': activity.type === 'login',
                    'bg-green-500': activity.type === 'message',
                    'bg-yellow-500': activity.type === 'profile',
                    'bg-red-500': activity.type === 'logout',
                  }"></div>
                <div class="ml-3">
                  <div class="text-sm font-medium">{{ activity.description }}</div>
                  <div class="text-xs text-gray-500">{{ formatDate(activity.timestamp) }}</div>
                </div>
              </div>
            </div>

            <div v-if="userActivities.length === 0" class="text-center text-sm text-gray-500 py-4">
              Không có hoạt động nào gần đây
            </div>
          </div>
        </div>

        <!-- Thống kê chat -->
        <div class="bg-white rounded-xl shadow-sm p-4">
          <h3 class="text-base font-semibold mb-3 flex items-center">
            <ChartBarIcon class="w-4 h-4 text-blue-500 mr-1.5" />
            Thống kê tương tác
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-blue-50 rounded-lg p-3">
              <div class="text-xs text-gray-500">Tổng số chat</div>
              <div class="text-xl font-semibold text-blue-600">{{ user.stats?.totalChats || 0 }}</div>
            </div>
            <div class="bg-green-50 rounded-lg p-3">
              <div class="text-xs text-gray-500">Tin nhắn đã gửi</div>
              <div class="text-xl font-semibold text-green-600">{{ user.stats?.sentMessages || 0 }}</div>
            </div>
            <div class="bg-purple-50 rounded-lg p-3">
              <div class="text-xs text-gray-500">Thời gian trung bình</div>
              <div class="text-xl font-semibold text-purple-600">{{ user.stats?.avgResponseTime || '0 phút' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseButton from '@/components/Common/BaseButton.vue';
import { getUserById, getUserActivities } from '@/data/users';
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  CalendarIcon,
  PencilIcon,
  LockOpenIcon,
  LockClosedIcon,
  InformationCircleIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline';

const route = useRoute();
const router = useRouter();
const user = ref(null);
const loading = ref(true);
const error = ref(null);
const defaultAvatar = 'https://ui-avatars.com/api/?name=User&background=random';

// Lấy hoạt động của người dùng từ data
const userActivities = ref([]);

// Mô phỏng việc lấy dữ liệu người dùng từ API
const fetchUserData = async (userId) => {
  loading.value = true;
  error.value = null;

  try {
    // Giả định gọi API, ở đây sử dụng dữ liệu từ getUserById
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập độ trễ API

    // Dữ liệu người dùng
    const userData = getUserById(userId);
    if (!userData) {
      error.value = 'Không tìm thấy người dùng';
      return;
    }

    user.value = userData;

    // Lấy hoạt động người dùng
    userActivities.value = getUserActivities(userId);
  } catch (err) {
    console.error('Error fetching user data:', err);
    error.value = 'Có lỗi xảy ra khi tải dữ liệu người dùng. Vui lòng thử lại sau.';
  } finally {
    loading.value = false;
  }
};

// Format ngày tháng
const formatDate = (dateString) => {
  if (!dateString) return 'Chưa cập nhật';

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

// Hiển thị text giới tính
const genderText = (gender) => {
  switch (gender) {
    case 'male':
      return 'Nam';
    case 'female':
      return 'Nữ';
    case 'other':
      return 'Khác';
    default:
      return 'Chưa cập nhật';
  }
};

// Chỉnh sửa người dùng
const editUser = () => {
  router.push(`/users/${user.value.id}/edit`);
};

// Khóa/mở khóa người dùng
const toggleUserStatus = () => {
  if (user.value) {
    user.value.status = user.value.status === 'blocked' ? 'active' : 'blocked';
    // Tại đây sẽ gọi API để cập nhật trạng thái
  }
};

onMounted(async () => {
  const userId = route.params.id;
  if (userId) {
    await fetchUserData(userId);
  } else {
    error.value = 'Không tìm thấy ID người dùng';
    loading.value = false;
  }
});
</script>
