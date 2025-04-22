<template>
  <div class="w-80 h-[calc(100vh-var(--header-height))] bg-white border-r border-gray-200 overflow-y-auto">
    <div class="sticky top-0 bg-white z-10 p-4 border-b border-gray-200">
      <h2 class="text-xl font-semibold text-gray-800">Settings</h2>
    </div>

    <div class="p-4 space-y-1">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        :class="[
          'flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors text-sm',
          index === activeItem ? 'bg-gray-100 text-gray-800 font-medium' : 'text-gray-600 hover:bg-gray-50',
        ]"
        @click="activeItem = index">
        <div :class="['w-5 h-5 mr-3', index === activeItem ? 'text-blue-600' : 'text-gray-500']">
          <component :is="item.icon" class="w-full h-full" />
        </div>
        {{ item.label }}
        <div v-if="item.status" class="ml-auto px-2 py-0.5 text-xs rounded-full" :class="item.status.class">
          {{ item.status.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ChatBubbleLeftRightIcon,
  InboxIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  ClockIcon,
  UserIcon,
  DocumentTextIcon,
  DocumentCheckIcon,
} from '@heroicons/vue/24/outline';

const activeItem = ref(3); // Set Apple Messages as active by default

const menuItems = [
  {
    label: 'Install LiveChat',
    icon: ChatBubbleLeftRightIcon,
    status: { label: 'OFF', class: 'bg-gray-100 text-gray-500' },
  },
  {
    label: 'Email by HelpDesk',
    icon: InboxIcon,
    status: { label: 'OFF', class: 'bg-gray-100 text-gray-500' },
  },
  {
    label: 'Facebook Messenger',
    icon: ChatBubbleOvalLeftEllipsisIcon,
    status: { label: 'OFF', class: 'bg-gray-100 text-gray-500' },
  },
  {
    label: 'Apple Messages',
    icon: ChatBubbleLeftRightIcon,
    status: { label: 'OFF', class: 'bg-gray-100 text-gray-500' },
  },
  {
    label: 'Chat page',
    icon: DocumentIcon,
  },
  {
    label: 'Website widget',
    icon: GlobeAltIcon,
  },
  {
    label: 'Forms',
    icon: DocumentTextIcon,
  },
  {
    label: 'Engagement',
    icon: DocumentCheckIcon,
  },
  {
    label: 'Tags',
    icon: DocumentIcon,
  },
  {
    label: 'Sales tracker',
    icon: DocumentIcon,
  },
  {
    label: 'Chat settings',
    icon: PaintBrushIcon,
  },
  {
    label: 'Security',
    icon: ClockIcon,
  },
];
</script>

<style></style>
