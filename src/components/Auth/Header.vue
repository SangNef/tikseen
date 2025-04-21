<template>
  <div class="flex justify-between py-6 px-5">
    <img :src="logo" alt="" class="h-8 w-auto" />
    <button
      class="px-4 py-2 border border-[#c9c9cd] rounded-lg text-[#131317] text-sm font-semibold leading-[20px] cursor-pointer"
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
  if (route.path === '/login') {
    return 'Sign up free';
  } else if (route.path === '/register') {
    return 'Log in';
  } else {
    return 'Sign up free';
  }
});

function handleClick() {
  if (route.path === '/login') {
    router.push('/register');
  } else if (route.path === '/register') {
    router.push('/login');
  } else {
    router.push('/register');
  }
}
</script>

<style></style>
