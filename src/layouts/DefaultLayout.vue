<template>
  <AuthGuard>
    <div class="livechat-app w-full">
      <div class="flex flex-col min-h-[calc(var(--vh,1vh)*100)]">
        <div class="flex flex-1 overflow-hidden">
          <SideBar />
          <div
            class="flex-1 overflow-auto"
            :class="{
              '!bg-[#f7f7fa]': !isMobile,
            }">
            <div class="flex flex-1 flex-col w-full">
              <Header />
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthGuard>
</template>

<script setup>
import Header from '@/components/Main/Header.vue';
import SideBar from '@/components/Main/SideBar.vue';
import { useResponsive } from '@/composables';
import AuthGuard from '@/components/Auth/AuthGuard.vue';

const { isMobile } = useResponsive();
</script>

<style>
:root {
  --header-height: 50px;
  --mobile-menu-height: 50px;
}
</style>
