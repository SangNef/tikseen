<template>
  <div class="max-w-90 mx-auto md:mt-[90px]">
    <h2 class="leading-[32px] text-2xl font-semibold text-center">Start for free</h2>
    <h3 class="leading-[28px] text-[20px] text-[#62626d] font-semibold text-center !mt-2">No credit card required</h3>
    <form @submit.prevent="handleSubmit">
      <div class="w-full mt-7">
        <BaseInput
          v-model="email"
          label="Business email"
          type="email"
          placeholder="name@work-email.com"
          :isRequire="true"
          message="Email không hợp lệ."
          ref="emailInput" />
        <BaseInput
          v-model="password"
          label="Password"
          type="password"
          placeholder="12 characters or more"
          :isRequire="true"
          message="Mật khẩu không được bỏ trống."
          customClass=""
          ref="passwordInput" />
        <BaseInput
          v-model="phone"
          label="Phone number"
          type="tel"
          placeholder="Enter your phone number"
          :isRequire="true"
          message="Số điện thoại không hợp lệ."
          ref="phoneInput" />
      </div>
      <BaseButton
        type="submit"
        label="Sign up"
        color="danger"
        :disabled="isSubmitting"
        customClass="!mt-2 w-full py-[11px]" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/Common/BaseInput.vue';
import BaseButton from '@/components/Common/BaseButton.vue';

const email = ref('');
const password = ref('');
const phone = ref('');
const isSubmitting = ref(false);

const emailInput = ref(null);
const passwordInput = ref(null);
const phoneInput = ref(null);

const handleSubmit = () => {
  let isValid = true;

  // validate từng input
  emailInput.value.handleValidate();
  phoneInput.value.handleValidate();
  passwordInput.value.handleValidate();

  // kiểm tra error
  if (emailInput.value.error || phoneInput.value.error || passwordInput.value.error) {
    isValid = false;
  }

  if (isValid) {
    isSubmitting.value = true;
    console.log('Form submitted with:', {
      email: email.value,
      password: password.value,
      phone: phone.value,
    });

    setTimeout(() => {
      isSubmitting.value = false;
    }, 2000);
  } else {
    console.log('Validation failed');
  }
};
</script>

<style scoped></style>
