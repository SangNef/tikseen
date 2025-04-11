<template>
      <section class="py-[65px]">
        <div class="w-full max-w-[1200px] px-2.5 mx-auto relative">
            <router-link to="/tin-tuc-su-kien">
                <h2 class="text-[40px] md:text-[54px] pb-5 text-[#424d54] uppercase font-normal">{{ t('home.news') }}</h2>
            </router-link>
            <ul class="w-full min-h-full flex flex-col md:flex-row flex-nowrap gap-[3%]">
                <li v-for="item in newItems" :key="item.id" class="w-full">
                    <div class="w-full aspect-[50/33]" :style="{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }"></div>
                    <router-link :to="item.href" class="block">
                        <h3
                            class="text-base md:text-[21px] font-bold text-[#424d54] py-2.5 hover:text-[#d13138] leading-[5/3]">
                            {{ t(`home.newsItems.${item.id}`) }}
                        </h3>
                        <p class="font-sf text-[11px] md:text-sm text-[#a7a7a7]">{{ item.time }}</p>
                    </router-link>
                </li>
            </ul>
            <div class="mt-4">
                <router-link
                    to="/tin-tuc-su-kien"
                    class="flex items-center text-[#a7a7a7] text-lg group arg-group hover:text-[#d13138]">
                    <p class="font-bold">{{ t('all') }}</p>
                    <img
                        :src="btnArG"
                        alt=""
                        class="pl-4 group-hover:pl-8 duration-300 h-[16px] group-hover:src('btnArR')" />
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import btnArG from "@/assets/images/btn/ar-g.png";
import btnArR from "@/assets/images/btn/ar-r.png";
import news1 from "@/assets/images/news-1.jpg";
import news2 from "@/assets/images/news-2.jpg";
import news3 from "@/assets/images/news-3.jpg";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const newItems = [
    {
        id: 1,
        img: news1,
        time: "04-04-2025",
        href: "/tin-tuc-su-kien/bai-viet/3399/vinfast-energy-va-dien-nghi-son-2-van-hanh-he-thong-dien-mat-troi-tich-hop-pin-luu-tru-nang-luong",
    },
    {
        id: 2,
        img: news2,
        time: "03-04-2025",
        href: "/tin-tuc-su-kien/bai-viet/3398/trung-tam-nghe-thuat-duong-dai-vincom-vcca-vinh-du-don-tiep-phai-doan-ngoai-giao-cao-cap-trong-khuon-kho-chuyen-tham-vie",
    },
    {
        id: 3,
        img: news3,
        time: "02-04-2025",
        href: "/tin-tuc-su-kien/bai-viet/3394/vingroup-to-chuc-ngay-hoi-xanh-2025-tai-ocean-city",
    },
];
</script>

<style>

</style>