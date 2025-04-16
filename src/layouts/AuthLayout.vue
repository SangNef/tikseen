<template>
  <div>
    <Header />
    <div class="mt-7 px-5">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Auth/Header.vue';

</script>

<style>

</style>