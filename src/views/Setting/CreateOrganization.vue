<template>
  <div class="max-w-90 mx-auto md:mt-[90px]">
    <h2 class="leading-[32px] text-2xl font-semibold text-center">Tạo tổ chức của bạn</h2>
    <p class="text-center text-gray-500 mt-2">Tạo tổ chức để bắt đầu sử dụng LiveChat</p>

    <form @submit.prevent="handleSubmit" class="mt-7">
      <BaseInput
        v-model="organizationName"
        label="Tên tổ chức"
        placeholder="Nhập tên tổ chức của bạn"
        :isRequire="true"
        message="Tên tổ chức không được bỏ trống."
        ref="orgNameInput" />

      <BaseInput
        v-model="organizationUrl"
        label="Website URL"
        placeholder="https://example.com"
        :validate="urlValidator"
        message="URL không hợp lệ."
        ref="orgUrlInput" />

      <div v-if="error" class="text-red-500 text-sm mt-2">
        {{ error }}
      </div>

      <BaseButton
        type="submit"
        color="primary"
        label="Tạo tổ chức"
        :disabled="isSubmitting || loading"
        customClass="!mt-4 w-full py-[11px]" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/Common/BaseInput.vue';
import BaseButton from '@/components/Common/BaseButton.vue';
import { useAuth, useOrganization } from '@/composables';

const organizationName = ref('');
const organizationUrl = ref('');
const isSubmitting = ref(false);
const error = ref('');

const router = useRouter();
const { user } = useAuth();
const { createOrganization, loading } = useOrganization();

const orgNameInput = ref(null);
const orgUrlInput = ref(null);

const urlValidator = (value) => {
  if (!value) return true; // URL không bắt buộc
  const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return regex.test(value);
};

const handleSubmit = async () => {
  let isValid = true;
  error.value = '';

  orgNameInput.value.handleValidate();
  if (orgNameInput.value.error) {
    isValid = false;
  }

  if (organizationUrl.value) {
    orgUrlInput.value.handleValidate();
    if (orgUrlInput.value.error) {
      isValid = false;
    }
  }

  if (isValid && user.value) {
    isSubmitting.value = true;

    try {
      const organizationData = {
        name: organizationName.value,
        url: organizationUrl.value || null,
        owner_id: user.value.id,
        status: 'active',
        data: {},
      };

      const { data, error: createError } = await createOrganization(organizationData);

      if (createError) {
        error.value = createError.message || 'Không thể tạo tổ chức';
        console.error('Failed to create organization:', createError);
      } else {
        console.log('Organization created successfully:', data);
        router.push('/');
      }
    } catch (err) {
      error.value = err.message || 'Có lỗi xảy ra khi tạo tổ chức';
      console.error('Organization creation error:', err);
    } finally {
      isSubmitting.value = false;
    }
  } else if (!user.value) {
    error.value = 'Bạn cần đăng nhập để tạo tổ chức';
  }
};
</script>
