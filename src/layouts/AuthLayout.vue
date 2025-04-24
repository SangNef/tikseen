<template>
  <div class="w-full h-screen overflow-hidden relative">
    <Header />
    <div class="mt-12 relative">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Auth/Header.vue';
import footer from '@/assets/images/footer.png'

</script>

<style>

</style>