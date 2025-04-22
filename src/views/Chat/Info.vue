<template>
  <div class="w-96 h-[calc(100vh-var(--header-height))] bg-white border-l border-gray-300 flex flex-col">
    <!-- Header icons -->
    <div class="h-[45px] border-b border-gray-300 flex gap-4 px-4">
      <div class="h-full px-1 flex items-center border-b-2 border-blue-500">
        <UserCircleIcon class="w-6 h-6" />
      </div>
      <div class="h-full flex items-center">
        <PlusIcon class="w-6 h-6" />
      </div>
    </div>

    <!-- Thông tin khách hàng -->
    <LocationInfo :chat="chat" />
    <AdditionalInfo />
    <VisitedPage />
    <PrechatForm :name="chat?.name" :email="chat?.email" />
    <Technology :device="chat?.device" />
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

const props = defineProps({
  chat: {
    type: Object,
    default: null,
  },
});
</script>
