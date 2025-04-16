<template>
    <div class="border-t border-gray-300 p-3">
        <div class="flex justify-between items-center cursor-pointer" @click="toggleInfo">
            <span class="font-semibold">Additional info</span>
            <component :is="showInfo ? ChevronDownIcon : ChevronRightIcon" class="w-4 h-4 stroke-[2.5]" />
        </div>

        <div v-if="showInfo" class="mt-4">
            <p class="text-gray-500">First-time visitor: <span class="text-gray-900">1 visit, 1 chat</span></p>
            <p class="text-gray-500">Chat duration: <span class="text-gray-900">3 min 22 s</span></p>
            <p class="text-gray-500">Group: <span class="text-gray-900">General</span></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const showInfo = ref(true)

function toggleInfo() {
    showInfo.value = !showInfo.value
}
</script>

<style scoped>
</style>
