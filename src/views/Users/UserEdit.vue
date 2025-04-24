<template>
  <div class="p-3 md:p-5">
    <div class="mb-4 flex items-center">
      <button @click="router.go(-1)" class="mr-2 text-gray-600 hover:text-gray-800">
        <ArrowLeftIcon class="w-4 h-4" />
      </button>
      <h1 class="text-xl font-bold text-gray-800">Chỉnh Sửa Người Dùng</h1>
    </div>

    <div v-if="loading" class="flex justify-center items-center h-48">
      <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-800">
      {{ error }}
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Ảnh đại diện và thông tin ngắn -->
      <div class="bg-white rounded-xl shadow-sm p-4 md:col-span-1">
        <div class="flex flex-col items-center mb-4">
          <div class="w-20 h-20 rounded-full overflow-hidden mb-3 relative bg-gray-100 group">
            <img :src="formData.avatar || defaultAvatar" alt="Avatar" class="w-full h-full object-cover" />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              @click="openFileInput">
              <CameraIcon class="w-5 h-5 text-white" />
            </div>
            <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleFileUpload" />
          </div>
          <div class="text-xs text-gray-500 text-center">Nhấp vào ảnh để thay đổi</div>
        </div>

        <!-- Thông tin trạng thái và vai trò -->
        <div class="border-t border-gray-100 pt-3 space-y-3">
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">Trạng thái</label>
            <select
              v-model="formData.status"
              class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="active">Đang hoạt động</option>
              <option value="inactive">Không hoạt động</option>
              <option value="blocked">Đã khóa</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">Vai trò</label>
            <select
              v-model="formData.role"
              class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="admin">Quản trị viên</option>
              <option value="agent">Nhân viên CSKH</option>
              <option value="user">Người dùng</option>
            </select>
          </div>
        </div>

        <!-- Cập nhật mật khẩu -->
        <div class="border-t border-gray-100 pt-3 mt-3">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-medium text-gray-700">Cập nhật mật khẩu</h3>
            <button
              type="button"
              class="text-xs text-blue-600 hover:text-blue-800"
              @click="showPasswordFields = !showPasswordFields">
              {{ showPasswordFields ? 'Ẩn' : 'Hiển thị' }}
            </button>
          </div>

          <div v-if="showPasswordFields" class="space-y-3">
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Mật khẩu mới</label>
              <input
                type="password"
                v-model="formData.newPassword"
                class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập mật khẩu mới" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
              <input
                type="password"
                v-model="formData.confirmPassword"
                class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Xác nhận mật khẩu" />
              <p v-if="passwordError" class="mt-1 text-xs text-red-600">{{ passwordError }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Form chính -->
      <div class="bg-white rounded-xl shadow-sm p-4 md:col-span-2">
        <form @submit.prevent="saveUser" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Thông tin cá nhân -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1"
                >Họ và tên <span class="text-red-500">*</span></label
              >
              <input
                type="text"
                v-model="formData.name"
                required
                class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập họ và tên" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1"
                >Email <span class="text-red-500">*</span></label
              >
              <input
                type="email"
                v-model="formData.email"
                required
                class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập email" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Số điện thoại</label>
              <input
                type="tel"
                v-model="formData.phone"
                class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập số điện thoại" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Ngày sinh</label>
              <input
                type="date"
                v-model="formData.birthDate"
                class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Giới tính</label>
              <select
                v-model="formData.gender"
                class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <option value="">-- Chọn giới tính --</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-1">Địa chỉ</label>
              <input
                type="text"
                v-model="formData.address"
                class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nhập địa chỉ" />
            </div>
          </div>

          <!-- Thông tin công việc -->
          <div class="border-t border-gray-100 pt-3">
            <h3 class="text-sm font-medium text-gray-700 mb-3">Thông tin công việc</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Công ty</label>
                <input
                  type="text"
                  v-model="formData.company"
                  class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nhập tên công ty" />
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Chức vụ</label>
                <input
                  type="text"
                  v-model="formData.jobTitle"
                  class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nhập chức vụ" />
              </div>
              <div class="md:col-span-2">
                <label class="block text-xs font-medium text-gray-700 mb-1">Ghi chú</label>
                <textarea
                  v-model="formData.notes"
                  rows="3"
                  class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nhập ghi chú"></textarea>
              </div>
            </div>
          </div>

          <!-- Nút submit -->
          <div class="flex justify-end gap-2 border-t border-gray-100 pt-3">
            <BaseButton type="button" variant="secondary" size="sm" @click="router.go(-1)"> Hủy </BaseButton>
            <BaseButton type="submit" variant="primary" size="sm" :loading="saving"> Lưu thay đổi </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseButton from '@/components/Common/BaseButton.vue';
import { getUserById } from '@/data/users';
import { ArrowLeftIcon, CameraIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const router = useRouter();
const loading = ref(true);
const saving = ref(false);
const error = ref(null);
const fileInput = ref(null);
const showPasswordFields = ref(false);
const defaultAvatar = 'https://ui-avatars.com/api/?name=User&background=random';

// Form data
const formData = ref({
  id: null,
  name: '',
  email: '',
  phone: '',
  status: 'active',
  role: 'user',
  birthDate: '',
  gender: '',
  address: '',
  company: '',
  jobTitle: '',
  notes: '',
  avatar: '',
  newPassword: '',
  confirmPassword: '',
});

// Lỗi xác nhận mật khẩu
const passwordError = computed(() => {
  if (!formData.value.newPassword && !formData.value.confirmPassword) return '';
  if (formData.value.newPassword && !formData.value.confirmPassword) return 'Vui lòng xác nhận mật khẩu';
  if (formData.value.newPassword !== formData.value.confirmPassword) return 'Mật khẩu xác nhận không khớp';
  return '';
});

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

    // Cập nhật formData
    Object.keys(userData).forEach((key) => {
      if (key in formData.value) {
        // Chuyển đổi ngày tháng từ ISO string sang định dạng ngày cho input date
        if (key === 'birthDate') {
          formData.value[key] = userData[key].split('T')[0];
        } else {
          formData.value[key] = userData[key];
        }
      }
    });
  } catch (err) {
    console.error('Error fetching user data:', err);
    error.value = 'Có lỗi xảy ra khi tải dữ liệu người dùng. Vui lòng thử lại sau.';
  } finally {
    loading.value = false;
  }
};

// Mở hộp thoại chọn file
const openFileInput = () => {
  fileInput.value.click();
};

// Xử lý khi upload avatar
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.match('image.*')) {
    alert('Vui lòng chọn một tệp hình ảnh');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    formData.value.avatar = e.target.result;
  };
  reader.readAsDataURL(file);
};

// Lưu thông tin người dùng
const saveUser = async () => {
  // Kiểm tra lỗi mật khẩu trước khi gửi
  if (passwordError.value) {
    alert(passwordError.value);
    return;
  }

  saving.value = true;

  try {
    // Giả lập gọi API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Nếu thành công, quay lại trang chi tiết người dùng
    alert('Lưu thông tin thành công!');
    router.push(`/users/${formData.value.id}`);
  } catch (err) {
    console.error('Error saving user data:', err);
    alert('Có lỗi xảy ra khi lưu thông tin. Vui lòng thử lại sau.');
  } finally {
    saving.value = false;
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
