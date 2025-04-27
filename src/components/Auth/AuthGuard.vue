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
import { supabase } from '@/helpers';

const { user, checkSession, loading, getSavedUserFromLocalStorage } = useAuth();
const authenticated = ref(false);
const router = useRouter();
const checkingAuth = ref(true);

// Kiểm tra phiên ngay khi component được tạo
onMounted(async () => {
  try {
    // Kiểm tra nhanh từ localStorage trước
    const savedUser = getSavedUserFromLocalStorage();
    if (savedUser) {
      console.log('Sử dụng thông tin user từ localStorage trong AuthGuard');
      authenticated.value = true;
      user.value = savedUser;
    }

    // Kiểm tra trực tiếp từ Supabase API
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Lỗi khi kiểm tra phiên từ Supabase trong AuthGuard:', error.message);
    } else if (data && data.session) {
      console.log('Phiên Supabase hợp lệ trong AuthGuard');
      authenticated.value = true;
      user.value = data.session.user;
    } else {
      console.log('Không có phiên Supabase hợp lệ trong AuthGuard');
      authenticated.value = false;
    }
  } catch (error) {
    console.error('Lỗi khi kiểm tra xác thực:', error);
    authenticated.value = false;
  } finally {
    // Luôn gọi checkAuthStatus để cập nhật trạng thái và lưu thông tin
    await checkAuthStatus();
    checkingAuth.value = false;
  }
});

// Theo dõi thay đổi trong user để cập nhật trạng thái xác thực
watch(user, () => {
  authenticated.value = !!user.value;
});

const checkAuthStatus = async () => {
  try {
    await checkSession();
    authenticated.value = !!user.value;

    // Nếu không có user và đã hoàn tất quá trình kiểm tra
    if (!authenticated.value && !loading.value) {
      console.log('Không xác thực được người dùng, chuyển hướng đến trang đăng nhập');
      router.push('/auth/login');
    }
  } catch (error) {
    console.error('Lỗi khi kiểm tra trạng thái xác thực:', error);
    authenticated.value = false;
    router.push('/auth/login');
  }
};
</script>
