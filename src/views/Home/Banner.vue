<template>
    <div class="max-w-7xl mx-auto py-12 px-6 relative text-white flex items-center md:items-end">
        <transition name="slide-left">
            <div class="flex flex-col items-center w-1/2" v-if="show">
                <h2
                    class="text-2xl md:text-[48px] leading-[32px] md:leading-[72px] md:pb-10! pb-3! text-center md:mb-4! font-bold">
                    Find Your Next Moonshot
                </h2>
                <router-link
                    to="trading"
                    class="mb-6 md:mb-[71px] ml-2 rounded-[10px] bg-[#07c160] p-2.5 md:text-lg md:leading-[36px] uppercase font-semibold">
                    Giao dịch ngay
                </router-link>
            </div>
        </transition>

        <transition name="slide-right">
            <div class="w-1/2 md:w-[450px] h-auto" v-if="show">
                <img :src="btc2" alt="" class="w-full h-full object-cover" />
            </div>
        </transition>
    </div>

    <div class="max-w-7xl mx-auto mt-5 px-6 overflow-x-hidden">
        <div v-if="windowWidth < 768" class="grid grid-cols-2 gap-4">
            <img v-for="(img, index) in slide.slice(0,2)" :key="index" :src="img" alt="" class="w-full rounded-xl object-cover" />
        </div>
        <div v-else class="grid grid-cols-4 gap-4">
            <img v-for="(img, index) in slide" :key="index" :src="img" alt="" class="w-full rounded-xl object-cover" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import btc2 from "@/assets/images/ico/btc2.png";
import { trade1, trade2, trade3, trade4 } from "@/assets/images/trade";

const show = ref(false);

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

// Cập nhật chiều rộng cửa sổ khi màn hình thay đổi kích thước
onMounted(() => {
    setTimeout(() => {
        show.value = true;
    }, 100);
    window.addEventListener("resize", updateWindowWidth);
});

// Hủy bỏ sự kiện resize khi component bị hủy
onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWindowWidth);
});

onMounted(() => {
    setTimeout(() => {
        show.value = true;
    }, 100); // Delay nhẹ cho cảm giác mượt
});

const slide = [trade1, trade2, trade3, trade4];
</script>

<style></style>
<style scoped>
.slide-left-enter-active,
.slide-right-enter-active {
    transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.slide-left-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.slide-left-enter-to {
    opacity: 1;
    transform: translateX(0);
}
.slide-right-enter-from {
    opacity: 0;
    transform: translateX(30px);
}
.slide-right-enter-to {
    opacity: 1;
    transform: translateX(0);
}
</style>
