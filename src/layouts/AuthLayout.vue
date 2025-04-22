<template>
  <div class="w-full h-screen overflow-hidden relative bg-light">
    <Header />
    <main class="mt-6 px-4 max-w-md mx-auto">
      <slot />
    </main>
    <div class="absolute bottom-0 left-0 p-4 w-full">
      <img :src="footer" alt="LiveChat Footer" class="max-h-12 max-w-[90%] mx-auto" />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Auth/Header.vue';
import footer from '@/assets/images/footer.png';
</script>

<style></style>
