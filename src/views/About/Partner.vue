<template>
    <section class="bg-[#f7f7f7]">
        <div class="container md:relative md:flex items-start">
            <div class="py-[30px] md:py-15 md:w-[30%]">
                <h2 class="text-[40px] pb-5 text-[#424d54] md:text-[54px] md:pb-[30px]">{{ t('about.brand.title') }}</h2>
                <p class="font-sf text-[13px] md:text-[17px] text-[#424d54] leading-[1.3]">
                    {{ t('about.brand.content') }}
                </p>
            </div>

            <div class="w-full flex justify-end items-center gap-6 mb-4 md:absolute top-15 right-30">
                <button @click="goPrev" class="w-8 h-8">
                    <img :src="prevBtn" alt="Prev" class="w-full h-full object-contain" />
                </button>
                <button @click="goNext" class="w-8 h-8">
                    <img :src="nextBtn" alt="Next" class="w-full h-full object-contain" />
                </button>
            </div>

            <div class="overflow-hidden w-full md:w-[70%] md:py-30">
                <div ref="trackRef" class="flex transition-transform ease-in-out" :style="trackStyle">
                    <div
                        v-for="(group, i) in loopedGroups"
                        :key="i"
                        class="min-w-full grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <div v-for="(img, j) in group" :key="j" class="flex justify-center items-center">
                            <img :src="img" alt="" class="w-[125px] h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const windowWidth = ref(window.innerWidth);
const groupSize = computed(() => (windowWidth.value >= 768 ? 6 : 4)); // md:768px

function handleResize() {
    windowWidth.value = window.innerWidth;
}

onMounted(() => {
    window.addEventListener("resize", handleResize);
    startAutoSlide();
});

onBeforeUnmount(() => {
    clearInterval(interval);
    window.removeEventListener("resize", handleResize);
});

import {
    hms,
    vinbus,
    vinfast,
    tlx,
    vinhomes,
    vinpearl,
    vinschool,
    vinmec,
    vinu,
    vinfuture,
    qtt,
    vinretail,
    vinif,
    vinai,
    vinbigdata,
    css,
} from "@landing/assets/images/partner";
import prevBtn from "@landing/assets/images/btn/prev.png";
import nextBtn from "@landing/assets/images/btn/next.png";

// Gốc ảnh
const images = [
    hms,
    vinbus,
    vinfast,
    tlx,
    vinhomes,
    vinpearl,
    vinschool,
    vinmec,
    vinu,
    vinfuture,
    qtt,
    vinretail,
    vinif,
    vinai,
    vinbigdata,
    css,
];

const groups = computed(() => {
    const result = [];
    for (let i = 0; i < images.length; i += groupSize.value) {
        result.push(images.slice(i, i + groupSize.value));
    }
    return result;
});

const loopedGroups = computed(() => [...groups.value, ...groups.value]);

const currentSlide = ref(0);
const isAnimating = ref(true);

const trackStyle = computed(() => {
    return {
        transform: `translateX(-${currentSlide.value * 100}%)`,
        transition: isAnimating.value ? "transform 0.5s ease-in-out" : "none",
    };
});

let interval = null;

function goNext() {
    clearInterval(interval); // dừng autoplay khi người dùng click
    nextSlide();
    startAutoSlide(); // khởi động lại
}

function goPrev() {
    clearInterval(interval);

    if (currentSlide.value === 0) {
        // Nếu đang ở slide đầu → nhảy về cuối mảng
        isAnimating.value = false;
        currentSlide.value = groups.length;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                isAnimating.value = true;
                currentSlide.value = groups.length - 1;
            });
        });
    } else {
        currentSlide.value--;
        isAnimating.value = true;
    }

    startAutoSlide();
}

function startAutoSlide() {
    interval = setInterval(() => {
        nextSlide();
    }, 3000);
}

onBeforeUnmount(() => {
    clearInterval(interval);
});

function nextSlide() {
    if (currentSlide.value < groups.length) {
        currentSlide.value++;
        isAnimating.value = true;
    } else {
        // Kết thúc vòng lặp: reset lại về slide đầu nhưng không có hiệu ứng
        isAnimating.value = false;
        currentSlide.value = 0;

        // Buộc Vue render lại để thấy được "giật" về đầu mà không bị hiệu ứng
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                isAnimating.value = true;
                currentSlide.value = 1;
            });
        });
    }
}
</script>

<style scoped></style>
