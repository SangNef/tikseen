<script setup>
import { ref, watch } from 'vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  modelValue: [String, Number],
  label: String,
  id: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  isRequire: { type: Boolean, default: false },
  message: { type: String, default: 'Trường này không hợp lệ.' },
  customClass: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);
const localValue = ref(props.modelValue);
const error = ref(null);
const isPasswordVisible = ref(false);

watch(localValue, (val) => {
  emit('update:modelValue', val);
  if (error.value) handleValidate();
});

function handleInput(event) {
  localValue.value = event.target.value;
}

function handleValidate() {
  // reset lỗi
  error.value = null;

  if (props.isRequire && !localValue.value) {
    error.value = props.message || 'Trường này không được bỏ trống.';
    return false;
  }

  if (props.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(localValue.value)) {
      error.value = props.message || 'Email không hợp lệ.';
      return false;
    }
  }

  if (props.type === 'tel') {
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(localValue.value)) {
      error.value = props.message || 'Số điện thoại không hợp lệ.';
      return false;
    }
  }

  return true;
}

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
}

defineExpose({
  handleValidate,
  error,
});
</script>

<template>
  <div class="flex flex-col gap-1" :class="customClass">
    <div v-if="label" :for="id" class="text-sm text-dark">
      <slot name="label">{{ label }}</slot>
    </div>
    <div class="relative">
      <input
        :type="isPasswordVisible ? 'text' : type"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="handleInput"
        @blur="handleValidate"
        class="w-full h-11 px-3 py-2 border rounded-custom outline-none transition-colors duration-200"
        :class="error ? 'border-error focus:border-error' : 'border-medium focus:border-primary'" />
      <div
        v-if="type === 'password'"
        @click="togglePasswordVisibility"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
        <EyeSlashIcon v-if="!isPasswordVisible" class="w-5 h-5 text-gray" />
        <EyeIcon v-if="isPasswordVisible" class="w-5 h-5 text-gray" />
      </div>
    </div>
    <div class="h-5">
      <p v-if="error" class="text-error text-xs mt-1">{{ error }}</p>
    </div>
  </div>
</template>
