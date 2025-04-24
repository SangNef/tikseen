<template>
  <div v-if="!isMobile" class="w-16 fixed top-0 left-0 h-screen bg-dark flex flex-col items-center py-4">
    <!-- Logo at top -->
    <div class="mb-6">
      <router-link to="/" class="block">
        <svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        </svg>
      </router-link>
    </div>

    <!-- Main navigation -->
    <div class="flex flex-col items-center gap-4">
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.route"
        class="w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-200 hover:bg-gray-700"
        :class="{ 'bg-gray-700': isActive(item.route) }"
        :title="item.label">
        <component
          :is="isActive(item.route) ? item.iconSolid : item.iconOutline"
          :class="isActive(item.route) ? 'text-white' : 'text-gray-400'"
          class="w-5 h-5" />
      </router-link>
    </div>

    <!-- Stats badge at bottom -->
    <!-- <div class="mt-auto mb-4 relative">
      <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <span class="text-xs font-bold text-white">4</span>
      </div>
      <span
        class="absolute -top-1 -right-1 text-[10px] text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center font-bold">
        DAYS
      </span>
    </div> -->

    <!-- User avatar at bottom -->
    <div
      class="mt-auto w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm overflow-hidden">
      <span>BK</span>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import useResponsive from '@/composables/useResponsive';
import {
  ChatBubbleLeftRightIcon as ChatOutline,
  Cog6ToothIcon as CogOutline,
  HomeIcon as HomeOutline,
  ChartBarIcon as StatsOutline,
  UserGroupIcon as TeamOutline,
  UsersIcon as UsersOutline,
} from '@heroicons/vue/24/outline';
import {
  ChatBubbleLeftRightIcon as ChatSolid,
  Cog6ToothIcon as CogSolid,
  HomeIcon as HomeSolid,
  ChartBarIcon as StatsSolid,
  UserGroupIcon as TeamSolid,
  UsersIcon as UsersSolid,
} from '@heroicons/vue/24/solid';

const route = useRoute();
const { isMobile } = useResponsive();

const isActive = (path) => route.path === path;

const menuItems = [
  {
    label: 'Tin nhắn',
    iconOutline: ChatOutline,
    iconSolid: ChatSolid,
    route: '/',
  },
  {
    label: 'Thống kê',
    iconOutline: StatsOutline,
    iconSolid: StatsSolid,
    route: '/stats',
  },
  {
    label: 'Người dùng',
    iconOutline: UsersOutline,
    iconSolid: UsersSolid,
    route: '/users',
  },
  {
    label: 'Cài đặt',
    iconOutline: CogOutline,
    iconSolid: CogSolid,
    route: '/settings',
  },
];
</script>

<style scoped>
/* Custom styles if needed */
</style>
