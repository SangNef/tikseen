<template>
    <div class="relative w-full max-w-3xl mx-auto overflow-hidden">
        <div
            ref="sliderRef"
            class="flex"
            :class="{ 'transition-transform duration-700 ease-in-out': isTransitioning }"
            :style="{ transform: `translateX(-${index * 100}%)` }"
            @transitionend="handleTransitionEnd">
            <div v-for="(img, i) in duplicatedImages" :key="i" class="w-full h-full flex-shrink-0 px-[2.56%]">
                <img
                    :src="img"
                    :alt="'Banner ' + (i + 1)"
                    class="w-full h-auto object-cover flex-shrink-0 basis-11/12 rounded-xl" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import banner1 from "@client/assets/banners/001.png";
import banner2 from "@client/assets/banners/002.png";
import banner3 from "@client/assets/banners/003.png";

const images = [banner1, banner2, banner3];
const index = ref(0);
const isTransitioning = ref(true);
const sliderRef = ref(null);

const duplicatedImages = computed(() => [...images, ...images]);

onMounted(() => {
    setInterval(() => {
        index.value += 1;
    }, 3000);
});

const handleTransitionEnd = () => {
    if (index.value === images.length) {
        isTransitioning.value = false;
        index.value = 0;
        setTimeout(() => (isTransitioning.value = true), 50);
    }
};
</script>
