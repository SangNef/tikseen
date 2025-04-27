<template>
  <div class="max-w-90 mx-auto md:mt-[90px]">
    <h2 class="leading-[32px] text-2xl font-semibold text-center">Log in</h2>
    <form @submit.prevent="handleSubmit">
      <div class="w-full mt-7">
        <BaseInput
          v-model="email"
          label="Business email"
          id="email"
          type="email"
          placeholder="name@work-email.com"
          :isRequire="true"
          :validate="emailValidator"
          message="Email không hợp lệ."
          ref="emailInput" />
        <BaseInput
          v-model="password"
          label="Password"
          id="password"
          type="password"
          placeholder="12 characters or more"
          :isRequire="true"
          message="Mật khẩu không được bỏ trống."
          customClass=""
          ref="passwordInput" />
      </div>
      <BaseButton
        type="submit"
        color="primary"
        label="Log in"
        customClass="!mt-2 w-full py-[11px]"
        :disabled="isSubmitting" />
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
const isSubmitting = ref(false);
const loginError = ref('');

const router = useRouter();
const { signIn, loading, error } = useAuth();

const emailValidator = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

const emailInput = ref(null);
const passwordInput = ref(null);

const handleSubmit = async () => {
  let isValid = true;
  loginError.value = '';

  emailInput.value.handleValidate();
  if (emailInput.value.error) {
    isValid = false;
  }

  passwordInput.value.handleValidate();
  if (passwordInput.value.error) {
    isValid = false;
  }

  if (isValid) {
    isSubmitting.value = true;

    try {
      const { data, error: signInError } = await signIn(email.value, password.value);

      if (signInError) {
        loginError.value = signInError.message || 'Đăng nhập không thành công';
        console.error('Login failed:', signInError);
      } else {
        console.log('Login successful');
        // Chuyển hướng được xử lý trong listener auth state ở main.js
      }
    } catch (err) {
      loginError.value = err.message || 'Có lỗi xảy ra khi đăng nhập';
      console.error('Login error:', err);
    } finally {
      isSubmitting.value = false;
    }
  } else {
    console.log('Validation failed');
  }
};
</script>

<style scoped></style>
