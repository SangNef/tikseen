<template>
  <div
    class="w-80 bg-white h-[calc(100vh-var(--header-height))] overflow-y-auto border-l border-gray-200"
    :class="{ 'w-full': isMobile }">
    <!-- Header -->
    <div class="p-3 border-b border-gray-200 flex items-center justify-between">
      <div class="flex items-center">
        <button v-if="isMobile" @click="handleBack" class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h2 class="text-sm font-bold">Thông tin khách hàng</h2>
      </div>
      <button class="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Content sections -->
    <div class="px-4 py-4 flex flex-col gap-4">
      <div v-if="chat">
        <!-- Custom components for each info section -->
        <AdditionalInfo :chat="chat" />
        <PrechatForm :chat="chat" />
        <LocationInfo :chat="chat" />
        <Technology :chat="chat" />
        <VisitedPage :chat="chat" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { PlusIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import LocationInfo from './LocationInfo.vue';
import AdditionalInfo from './AdditionalInfo.vue';
import VisitedPage from './VisitedPage.vue';
import PrechatForm from './PrechatForm.vue';
import Technology from './Technology.vue';
import useResponsive from '@/composables/useResponsive';

const { isMobile, setMobileView } = useResponsive();

const props = defineProps({
  chat: {
    type: Object,
    default: null,
  },
});

function handleBack() {
  setMobileView('chat-detail');
}
</script>
