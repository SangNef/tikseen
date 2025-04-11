<template>
    <section class="w-screen h-[calc(100vh-50px)] relative bannerHome">
        <img :src="homeBg" alt="" class="w-full h-full object-cover absolute top-0 md:left-0 z-0 hidden md:block" />
        <div class="container w-full h-screen relative">
            <div class="w-full md:w-[45%] absolute top-[90px] md:top-1/2 left-[5%] translate-y-[-50%] pl-[2%]">
                <h3 class="text-white text-[40px] md:text-[64px] pb-[25px] leading-[1.16667] font-bold">
                    {{ $t("home.title") }}
                </h3>
            </div>
        </div>
        <div
            class="absolute bottom-20 left-1/2 -translate-x-1/2 text-[11px] md:text-[13px] text-white uppercase text-center" @click="scrollToNextSection">
            <span
                >Cuộn <br />
                xuống</span
            >
            <img :src="scrollDown" alt="" class="w-3 absolute left-1/2 -translate-x-1/2 top-[45px] scrolldown" />
        </div>
    </section>
</template>

<script setup>
import homeBg from "@landing/assets/images/bg/home-bg.jpg";
import scrollDown from "@landing/assets/images/btn/scrolldown.png";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const scrollToNextSection = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
    });
};
</script>

<style scoped>
@media (max-width: 768px) {
    .bannerHome {
        background: url("@landing/assets/images/bg/home-bg.jpg") no-repeat center center;
        height: calc(100vh-50px);
        position: relative;
        background-position: center right 32% !important;
        background-size: cover;
    }
}

.scrolldown {
    animation: 1.5s infinite sdb05;
}

@keyframes sdb05 {
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(0, 40px);
        opacity: 0;
    }
}
</style>
