<template>
  <div class="border-t border-gray-300 p-3">
    <div class="flex justify-between items-center mb-2 cursor-pointer" @click="toggleTechnology">
      <span class="font-semibold">Technology</span>
      <component :is="showTechnology ? ChevronDownIcon : ChevronRightIcon" class="w-4 h-4 stroke-[2.5]" />
    </div>

    <div v-if="showTechnology">
      <div v-if="device" class="mt-4">
        <p class="text-gray-500">
          IP: <span class="font-medium">{{ device.ip }}</span>
        </p>
        <p class="text-gray-500">
          OS/Device: <span class="font-medium">{{ device.os }} ({{ device.version }})</span>
        </p>
        <p class="text-gray-500">
          Browser: <span class="font-medium">{{ device.browser }}</span>
        </p>
      </div>
      <div v-else class="text-gray-400 text-sm mt-2">No device info available.</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  device: {
    type: Object,
    default: null,
  },
});

const showTechnology = ref(true);

function toggleTechnology() {
  showTechnology.value = !showTechnology.value;
}
</script>

<style scoped></style>
