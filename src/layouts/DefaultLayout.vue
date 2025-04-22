<template>
  <div class="flex flex-row h-screen max-h-screen overflow-hidden bg-[#f3f4f6]">
    <SideBar />
    <div class="ml-16 w-full h-screen flex flex-col">
      <Header />
      <!-- not use .p-4 for main -->
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/Main/SideBar.vue';
import Header from '@/components/Main/Header.vue';
</script>

<style>
:root {
  --header-height: 64px;
}
</style>
