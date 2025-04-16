<template>
    <div class="border-t border-gray-300 p-3">
        <div class="flex justify-between items-center cursor-pointer" @click="toggleVisited">
            <span class="font-semibold">Visited pages</span>
            <component :is="showVisited ? ChevronDownIcon : ChevronRightIcon" class="w-4 h-4 stroke-[2.5]" />
        </div>

        <div v-if="showVisited" class="mt-4">
            <div class="flex gap-2 items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-900">Chat now | Live Chat Customer Support...</span>
            </div>
            <span class="text-gray-500 ml-4">3m 44s</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const showVisited = ref(true)

function toggleVisited() {
    showVisited.value = !showVisited.value
}
</script>

<style scoped>
</style>
