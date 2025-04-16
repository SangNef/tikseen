<template>
    <div class="border-t border-gray-300 p-3">
        <div class="flex justify-between items-center mb-2 cursor-pointer" @click="togglePrechat">
            <span class="font-semibold">Pre-chat form</span>
            <component :is="showPrechat ? ChevronDownIcon : ChevronRightIcon" class="w-4 h-4 stroke-[2.5]" />
        </div>

        <div v-if="showPrechat" class="mt-4">
            <p class="text-gray-500">Name: <span class="text-gray-900">{{ name }}</span></p>
            <p class="text-gray-500">E-mail: <span class="text-gray-900">{{ email }}</span></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
    name: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
});

const showPrechat = ref(true);

function togglePrechat() {
    showPrechat.value = !showPrechat.value;
}
</script>

<style scoped>
</style>
