<template>
  <slot v-if="authenticated"></slot>
  <div v-else>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p class="text-gray-600">Đang kiểm tra xác thực...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables';

const { user, checkSession, loading } = useAuth();
const authenticated = ref(false);
const router = useRouter();

// Kiểm tra phiên ngay khi component được tạo
onMounted(async () => {
  await checkAuthStatus();
});

// Theo dõi thay đổi trong user để cập nhật trạng thái xác thực
watch(user, () => {
  authenticated.value = !!user.value;
});

const checkAuthStatus = async () => {
  await checkSession();
  authenticated.value = !!user.value;

  // Nếu không có user, chuyển hướng đến trang đăng nhập
  if (!authenticated.value && !loading.value) {
    router.push('/auth/login');
  }
};
</script>
