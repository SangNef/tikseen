<template>
    <Banner />
    <div class="container">
        <div class="mt-[30px] md:mt-[50px]">
            <button class="font-sf px-6 py-2 bg-[#d13138] text-white rounded-lg shadow-lg">Tài khoản nội bộ</button>
        </div>
    </div>
    <NewsWrap />
    <CateWrap />
    <section class="py-[50px]">
        <div class="w-full max-w-[1200px] px-2.5 mx-auto relative">
            <router-link to="/quan-he-co-dong"
                ><h2 class="text-[#424d54] text-[40px] pb-5 md:text-[54px] uppercase md:pb-[30px]">
                    {{ t("home.relation.title") }}
                </h2></router-link
            >
            <div class="w-full px-5 md:flex">
                <div class="md:pt-[18px] md:w-1/2 md:float-left md:pr-10">
                    <h3
                        class="uppercase text-[#111] text-sm font-arial font-bold border-b-2 border-[#ededed] relative pb-2.5 h3-title">
                        {{ t("home.relation.subtitle") }}
                    </h3>
                    <img :src="home2" alt="" class="w-full my-5 align-middle object-cover" />
                    <p class="font-sf text-[13px] md:text-[17px] leading-[1.3] text-[#424d54] mt-2.5">
                        {{ t("home.relation.content") }}
                    </p>
                </div>
                <div class="h-[493px]"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Banner from "./Banner.vue";
import CateWrap from "./CateWrap.vue";
import NewsWrap from "./NewsWrap.vue";
import home2 from "@/assets/images/home2.jpg";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.arg-group:hover img {
    content: url("@/assets/images/btn/ar-r.png");
}

.cate-group:hover img {
    transition: opacity 0.3s ease;
}

.main-cate::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 4000px;
    height: 100%;
    transform: translate(-50%, 0);
    background: #f7f7f7;
    z-index: -1;
}

.cate-content {
    cursor: grab; /* Đổi con trỏ khi hover vào */
}

.cate-content:active {
    cursor: grabbing; /* Thay đổi con trỏ khi kéo */
}

.main-cate {
    transition: transform 0.1s ease-out; /* Thêm transition để mượt mà khi kéo */
}

.h3-title::after {
    content: "";
    display: inline-block;
    background-color: #d32d37;
    width: 100px;
    height: 2px;
    position: absolute;
    bottom: -1px;
    left: 0;
}
</style>
