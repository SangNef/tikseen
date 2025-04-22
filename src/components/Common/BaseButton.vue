<template>
  <button
    :type="type"
    :class="[
      'px-4 py-2 rounded-custom transition duration-300 cursor-pointer text-sm font-medium',
      colorClass,
      customClass,
    ]"
    :disabled="disabled">
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Submit',
  },
  type: {
    type: String,
    default: 'button',
  },
  customClass: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger', 'outline', 'link'].includes(value),
  },
});

const colorClass = computed(() => {
  if (props.disabled) {
    return 'bg-gray-100 text-muted cursor-not-allowed';
  }

  switch (props.color) {
    case 'danger':
      return 'bg-error hover:bg-error/90 text-light';
    case 'secondary':
      return 'bg-secondary hover:bg-secondary-light text-light';
    case 'outline':
      return 'bg-transparent border border-primary text-primary hover:bg-primary-bg';
    case 'link':
      return 'bg-transparent text-primary hover:text-primary-dark underline px-0 py-0';
    case 'primary':
    default:
      return 'bg-primary hover:bg-primary-dark text-light';
  }
});
</script>

<style scoped></style>
