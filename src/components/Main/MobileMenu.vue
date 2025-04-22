<template>
  <div
    v-if="isMobile"
    class="fixed bottom-0 left-0 w-full h-[var(--mobile-menu-height)] bg-white border-t border-gray-200 flex justify-around items-center px-2 z-20">
    <router-link
      v-for="(item, index) in menuItems"
      :key="index"
      :to="item.route"
      class="flex flex-col items-center justify-center w-16 h-full"
      :class="{ 'text-blue-600': isActive(item.route), 'text-gray-500': !isActive(item.route) }"
      @click="item.action ? item.action() : null">
      <component :is="isActive(item.route) ? item.iconSolid : item.iconOutline" class="w-6 h-6" />
      <span class="text-xs mt-0.5">{{ item.label }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import useResponsive from '@/composables/useResponsive';

import {
  ChatBubbleLeftRightIcon as ChatOutline,
  Cog6ToothIcon as CogOutline,
  UserGroupIcon as TeamOutline,
  ChartBarIcon as ChartBarOutline,
  RocketLaunchIcon as EngageOutline,
} from '@heroicons/vue/24/outline';
import {
  ChatBubbleLeftRightIcon as ChatSolid,
  Cog6ToothIcon as CogSolid,
  ChartBarIcon as ChartBarSolid,
  UserGroupIcon as TeamSolid,
  RocketLaunchIcon as EngageSolid,
} from '@heroicons/vue/24/solid';

const route = useRoute();

const { mobileView, setMobileView, isMobile } = useResponsive();

const isActive = (path) => route.path === path;

const menuItems = [
  {
    label: 'Chats',
    iconOutline: ChatOutline,
    iconSolid: ChatSolid,
    route: '/',
    badge: '1',
  },
  {
    label: 'Stats',
    iconOutline: ChartBarOutline,
    iconSolid: ChartBarSolid,
    route: '/stats',
  },
  {
    label: 'Settings',
    iconOutline: CogOutline,
    iconSolid: CogSolid,
    route: '/settings',
  },
];
</script>
