<template>
  <div class="flex justify-between items-center py-4 px-4">
    <img :src="logo" alt="LiveChat Logo" class="h-8 w-auto" />
    <button
      class="px-4 py-2 border border-medium rounded-custom text-dark text-sm font-medium transition-colors duration-200 hover:bg-gray"
      @click="handleClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import logo from '@/assets/images/logo/logo.png';

const route = useRoute();
const router = useRouter();

const buttonText = computed(() => {
  if (route.path === '/auth/login') {
    return 'Sign up free';
  } else if (route.path === '/auth/register') {
    return 'Log in';
  } else {
    return 'Sign up free';
  }
});

function handleClick() {
  if (route.path === '/auth/login') {
    router.push('/auth/register');
  } else if (route.path === '/auth/register') {
    router.push('/auth/login');
  } else {
    router.push('/auth/register');
  }
}
</script>

<style></style>
