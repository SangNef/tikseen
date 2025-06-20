<template>
    <div ref="wrapper" class="relative inline-block" @mouseenter="showTooltip" @mouseleave="scheduleHideTooltip">
        <!-- Trigger slot -->
        <slot />

        <!-- Tooltip nội dung -->
        <div
            v-show="visible"
            class="absolute z-50 top-[35px] bg-[#171b25] text-white shadow-xl border border-[#1d2433] rounded w-max"
            :class="placementClass"
            @mouseenter="cancelHideTooltip"
            @mouseleave="scheduleHideTooltip">
            <div class="flex px-4 pt-2 pb-1">
                <!-- Language -->
                <div class="pr-8 pl-3">
                    <h3 class="font-medium text-[#848e9c] mb-3.5">Ngôn ngữ</h3>
                    <div
                        v-for="(item, i) in languages"
                        :key="i"
                        class="w-full flex items-center justify-between text-[#6a778f] hover:text-[#01bc8d] py-2.5 transition-all cursor-pointer">
                        <div class="flex items-center gap-3">
                            <img class="opacity-95" width="20" :src="flag[item.key]" alt="" />
                            <span class="select-none text-sm font-semibold" :class="{ 'text-[#01bc8d]': item.active }">
                                {{ item.label }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Currency -->
                <div class="pl-8 pr-3 border-l border-[#1d2433] font-medium text-[#6a778f]">
                    <h3 class="text-[#848e9c] mb-3.5">Đồng tiền</h3>
                    <p
                        v-for="(c, i) in currencies"
                        :key="i"
                        class="py-2.5 text-sm select-none cursor-pointer hover:text-[#01bc8d] font-semibold"
                        :class="{ 'text-[#01bc8d]': c.active }">
                        {{ c.label }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from "vue";
import { flag } from "@/assets/desktop/flag";

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

// Mock dữ liệu
const languages = [
    { key: "eng", label: "English" },
    { key: "vie", label: "Việt Nam", active: true },
    { key: "chn", label: "中国" },
    { key: "thl", label: "ไทย" },
    { key: "esp", label: "España" },
    { key: "ptg", label: "Portugal" },
    { key: "ind", label: "Indonesia" },
    { key: "tur", label: "Türkiye" },
    { key: "jap", label: "日本語" },
];

const currencies = [
    { label: "USD - $" },
    { label: "VND - đ", active: true },
    { label: "ARS - ARS$" },
    { label: "AUD - A$" },
    { label: "BDT - ৳" },
];
</script>
