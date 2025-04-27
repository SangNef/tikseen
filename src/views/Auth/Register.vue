<template>
  <div class="max-w-90 mx-auto md:mt-[90px]">
    <h2 class="leading-[32px] text-2xl font-semibold text-center">Đăng ký miễn phí</h2>
    <!-- <h3 class="leading-[28px] text-[20px] text-[#62626d] font-semibold text-center !mt-2">Không cần thẻ tín dụng</h3> -->
    <form @submit.prevent="handleSubmit">
      <div class="w-full mt-7">
        <BaseInput
          v-model="email"
          label="Email doanh nghiệp"
          type="email"
          placeholder="Gmail để xác thực"
          autocomplete="new-email"
          :isRequire="true"
          message="Email không hợp lệ."
          ref="emailInput" />
        <BaseInput
          v-model="password"
          label="Mật khẩu"
          type="password"
          placeholder="12 ký tự trở lên"
          autocomplete="new-password"
          :isRequire="true"
          message="Mật khẩu không được bỏ trống."
          customClass=""
          ref="passwordInput" />
        <!-- <BaseInput
          v-model="phone"
          label="Số điện thoại"
          type="tel"
          placeholder="Nhập số điện thoại của bạn"
          :isRequire="true"
          message="Số điện thoại không hợp lệ."
          ref="phoneInput" /> -->
      </div>
      <BaseButton
        type="submit"
        label="Đăng ký"
        color="danger"
        :disabled="isSubmitting"
        customClass="!mt-2 w-full py-[11px]" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/Common/BaseInput.vue';
import BaseButton from '@/components/Common/BaseButton.vue';
import { useAuth } from '@/composables';

const email = ref('');
const password = ref('');
const phone = ref('');
const isSubmitting = ref(false);
const registerError = ref('');

const router = useRouter();
const { signUp, loading, error } = useAuth();

const emailInput = ref(null);
const passwordInput = ref(null);
const phoneInput = ref(null);

const handleSubmit = async () => {
  let isValid = true;
  registerError.value = '';

  // validate từng input
  emailInput.value.handleValidate();
  // phoneInput.value.handleValidate();
  passwordInput.value.handleValidate();

  // kiểm tra error
  if (emailInput.value.error || passwordInput.value.error) {
    isValid = false;
  }

  if (isValid) {
    isSubmitting.value = true;

    try {
      // Thêm dữ liệu người dùng với phone
      const userData = {
        // phone: phone.value,
        role: 'agent', // Mặc định là agent
      };

      const { data, error: signUpError } = await signUp(email.value, password.value, userData);

      if (signUpError) {
        registerError.value = signUpError.message || 'Đăng ký không thành công';
        console.error('Registration failed:', signUpError);
      } else {
        console.log('Registration successful');
        // Chuyển hướng đến trang tạo tổ chức nếu cần
        router.push('/create-organization');
      }
    } catch (err) {
      registerError.value = err.message || 'Có lỗi xảy ra khi đăng ký';
      console.error('Registration error:', err);
    } finally {
      isSubmitting.value = false;
    }
  } else {
    console.log('Validation failed');
  }
};
</script>

<style scoped></style>
