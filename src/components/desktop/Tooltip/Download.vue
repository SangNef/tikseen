<template>
    <div ref="wrapper" class="relative inline-block" @mouseenter="showTooltip" @mouseleave="scheduleHideTooltip">
        <!-- Trigger slot -->
        <slot />

        <!-- Tooltip -->
        <div
            ref="tooltip"
            v-show="visible"
            class="absolute top-[40px] z-50 w-max rounded border border-[#1d2433] bg-[#171b25] text-white shadow-xl transition-opacity duration-200"
            :class="placementClass"
            @mouseenter="cancelHideTooltip"
            @mouseleave="scheduleHideTooltip">
            <div class="px-5 py-3">
                <div class="bg-white p-3 rounded">
                    <img :src="qr" alt="QR" width="160" height="160" />
                </div>
                <span class="font-semibold text-center text-xs mt-2 inline-block w-full"
                    >Quét để Tải xuống Ứng dụng <br />cho iOS và Android</span
                >
                <div class="bg-[#01bc8d] px-3 py-1 rounded-sm mt-2 cursor-pointer hover:opacity-80 duration-150">
                    <span class="select-none font-medium text-xs inline-block w-full text-center"
                        >Tải xuống cho Desktop</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { qr } from "@/assets/desktop/home";
import { ref, computed, onBeforeUnmount } from "vue";

const props = defineProps({
    placement: {
        type: String,
        default: "bottom",
    },
});

const visible = ref(false);
let hideTimeout = null;

function showTooltip() {
    visible.value = true;
}

function scheduleHideTooltip() {
    hideTimeout = setTimeout(() => {
        visible.value = false;
    }, 150);
}

function cancelHideTooltip() {
    clearTimeout(hideTimeout);
}

onBeforeUnmount(() => {
    clearTimeout(hideTimeout);
});

const placementClass = computed(() => {
    switch (props.placement) {
        case "top":
            return "bottom-full left-1/2 -translate-x-1/2 mb-2";
        case "bottom":
            return "top-full left-1/2 -translate-x-1/2 mt-2";
        case "left":
            return "right-full top-1/2 -translate-y-1/2 mr-2";
        case "right":
            return "left-full top-1/2 -translate-y-1/2 ml-2";
        default:
            return "top-full left-1/2 -translate-x-1/2 mt-2";
    }
});
</script>
