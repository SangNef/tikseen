<template>
    <button
        :type="type"
        :class="[
            'px-6 py-2 rounded-lg !text-sm duration-300 cursor-pointer',
            colorClass,
            customClass
        ]"
        :disabled="disabled">
        {{ label }}
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: "Submit",
    },
    type: {
        type: String,
        default: "button",
    },
    customClass: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        default: "primary",
        validator: (value) => ["primary", "danger"].includes(value),
    },
});

const colorClass = computed(() => {
    if (props.disabled) {
        return 'bg-gray-300 text-gray-500 cursor-not-allowed';
    }

    switch (props.color) {
        case "danger":
            return 'bg-[#ca0005] hover:bg-[#8d0004] text-white';
        case "primary":
        default:
            return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
});
</script>

<style scoped></style>
