<template>
  <div class="flex flex-row h-screen max-h-screen overflow-hidden bg-[#f3f4f6]">
    <SideBar />
    <div :class="[isMobile ? 'ml-0' : 'ml-16', 'w-full h-screen flex flex-col']">
      <Header v-if="!isMobile || (isMobile && mobileView !== 'chat-list')" />
      <!-- not use .p-4 for main -->
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
      <MobileMenu v-if="isMobile" />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/Main/SideBar.vue';
import Header from '@/components/Main/Header.vue';
import MobileMenu from '@/components/Main/MobileMenu.vue';
import useResponsive from '@/composables/useResponsive';

const { isMobile, mobileView } = useResponsive();
</script>

<style>
:root {
  --header-height: 50px;
  --mobile-menu-height: 50px;
}
</style>
