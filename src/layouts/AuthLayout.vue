<template>
  <div class="w-full h-screen overflow-hidden relative">
    <Header />
    <div class="mt-7 px-5">
      <slot />
    </div>
    <div class="absolute bottom-0 left-0 p-4 w-full">
      <img :src="footer" alt="" class="max-h-13 max-w-[90%] mx-auto" />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Auth/Header.vue';
import footer from '@/assets/images/footer.png';
</script>

<style></style>
