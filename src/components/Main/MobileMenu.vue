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
      <div
        v-if="item.badge"
        class="absolute top-1 right-6 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
        <span class="text-xs text-white font-bold">{{ item.badge }}</span>
      </div>
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
  RocketLaunchIcon as EngageOutline,
} from '@heroicons/vue/24/outline';
import {
  ChatBubbleLeftRightIcon as ChatSolid,
  Cog6ToothIcon as CogSolid,
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
    label: 'Engage',
    iconOutline: EngageOutline,
    iconSolid: EngageSolid,
    route: '/engage',
  },
  {
    label: 'Team',
    iconOutline: TeamOutline,
    iconSolid: TeamSolid,
    route: '/team',
  },
  {
    label: 'Settings',
    iconOutline: CogOutline,
    iconSolid: CogSolid,
    route: '/settings',
  },
];
</script>
