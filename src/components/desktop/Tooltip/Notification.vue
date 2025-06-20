<template>
    <div class="relative inline-block" @mouseenter="showTooltip" @mouseleave="scheduleHideTooltip">
        <slot />

        <div
            ref="tooltipRef"
            v-show="visible"
            class="absolute z-50 w-[420px] top-[35px] -left-[60px] rounded border border-[#1d2433] bg-[#171b25] text-white shadow-xl transition-opacity duration-200"
            :class="placementClass"
            @mouseenter="cancelHideTooltip"
            @mouseleave="scheduleHideTooltip">
            <div class="w-full h-[550px] max-h-[550px]">
                <div class="flex items-center justify-between px-5 py-3 select-none">
                    <div class="flex items-center gap-3 font-semibold">
                        <span class="text-lg">{{ text }}</span>
                        <img class="cursor-pointer" :src="checklist" alt="" />
                    </div>
                    <router-link
                        class="text-[#8b8d96] hover:underline cursor-pointer"
                        to="/account/settings?page=notification">
                        Xem tất cả
                    </router-link>
                </div>
                <div class="h-[calc(100%-52px)] overflow-y-auto divide-y divide-[#1d2433]">
                    <div class="relative p-5 hover:bg-[#222838] duration-200">
                        <div
                            class="absolute flex items-center justify-center rounded-full w-9 h-9 bg-gray-800 text-white/90">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                                <path
                                    d="M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416h384c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32z" />
                            </svg>
                        </div>
                        <div class="absolute right-5 top-5">
                            <div class="w-2 h-2 bg-[#0fe28a] rounded-full relative">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fe28a] opacity-75"></span>
                            </div>
                        </div>
                        <div class="pl-14">
                            <h3 class="font-semibold text-sm">Xác thực Google</h3>
                            <p class="text-[#525864] text-sm font-medium my-1.5">
                                Tiến hành xác thực bảo mật khi dùng để đăng nhập, rút tiền, lấy lại mật khẩu, sửa thông
                                tin bảo mật.
                            </p>
                            <div>
                                <span class="text-[#fff] text-xs bg-[rgba(153,153,153,0.6)] px-2 py-0.5 rounded">
                                    10/08/24 08:00:00
                                </span>
                            </div>
                            <div
                                class="mt-2 flex items-center gap-1 text-xs text-blue-600/80 hover:underline font-semibold select-none cursor-pointer">
                                <span>Xem thêm</span>
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onBeforeUnmount } from "vue";
import { checklist } from "@/assets/desktop/icon";

const props = defineProps({
    text: String,
    placement: {
        type: String,
        default: "bottom",
    },
});

const visible = ref(false);
let timeout = null;

function showTooltip() {
    visible.value = true;
}
function scheduleHideTooltip() {
    timeout = setTimeout(() => {
        visible.value = false;
    }, 150);
}
function cancelHideTooltip() {
    clearTimeout(timeout);
}

onBeforeUnmount(() => clearTimeout(timeout));

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
