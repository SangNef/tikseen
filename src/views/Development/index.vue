<template>
    <div class="container">
        <div class="pt-5 md:pt-[75px] flex items-center">
            <router-link to="/">
                <HomeIcon class="w-4.5 h-4.5 text-gray-400" />
            </router-link>
            <ChevronRightIcon class="w-4 h-4 text-gray-500" />
            <p class="text-lg text-[#d13138] font-bold">{{ t('breadcrumb.development') }}</p>
        </div>
        <div class="pt-[35px] pb-[30px]">
            <img :src="development" alt="" class="w-full" />
        </div>
        <h2 class="text-[#424d54] text-[40px] md:text-[54px] uppercase pb-[30px] leading-[1.15385]">
            {{ t('development.heading.1') }} <br />
            <span class="text-[#d13138]">{{ t('development.heading.2') }}</span>
        </h2>
        <div class="">
            <p class="text-[13px] md:text-[17px] text-[#424d54] font-sf leading-[1.3] mb-4">
                {{ t('development.content.1') }}
            </p>
            <p class="text-[13px] md:text-[17px] text-[#424d54] font-sf leading-[1.3] mb-4">
                <a
                    href="https://ircdn.vingroup.net/storage/Uploads/PTBV/24016_ESG_Bao%20cao%20phat%20trien%20ben%20vung%20VGR%202022_VN.pdf"
                    >{{ t('development.content.2') }}</a
                >
            </p>
            <p class="text-[13px] md:text-[17px] text-[#424d54] font-sf leading-[1.3] mb-4">
                <a
                    href="https://ircdn.vingroup.net/storage/Uploads/Phat%20trien%20ben%20vung/2023%20VGR%20Sustainability%20Report_Vn.pdf"
                    >{{ t('development.content.3') }}</a
                >
            </p>
        </div>
    </div>
    <div class="item-wrap relative py-15">
        <div class="container">
            <ul class="flex flex-wrap items-stretch">
                <li
                    v-for="(item, index) in developmentList"
                    :key="index"
                    class="flex w-full mb-5 md:mb-[3%] md:mr-[3%] md:w-[30.333333%] relative group">
                    <div
                        class="bg-white min-h-[381px] pt-[30px] pb-[50px] px-5 md:py-[70px] md:px-[30px] border border-[#dedede] duration-300 group-hover:bg-[#d13138]">
                        <h3
                            class="text-[23px] md:text-[38px] text-[#d13138] group-hover:text-white pb-[25px] leading-[1.16667] font-bold relative"
                            v-html="item.title"></h3>
                        <p class="font-sf text-[#424d54] text-[14px] md:text-[16px] group-hover:text-white">
                            {{ item.content }}
                        </p>
                        <a
                            :href="item.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-[#a7a7a7] text-[15px] md:text-lg flex items-center gap-6 absolute bottom-[30px] left-[45px] hover:gap-10 duration-300"
                            >{{ t('detail') }} <img :src="btnArG" alt="" class="h-[13px] md:h-[16px] object-cover"
                        /></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/24/solid";

import development from "@landing/assets/images/bg/development.jpg";
import developments from "@landing/data/development.js";
import btnArG from "@landing/assets/images/btn/ar-g.png";

import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";

const { t, locale } = useI18n();

// Dùng ref để reactive
const developmentList = ref(developments(t));

// Watch thay đổi locale để cập nhật lại dữ liệu
watch(locale, () => {
    developmentList.value = developments(t);
});
</script>

<style scoped>
.item-wrap::before {
    content: "";
    background: #f7f7f7;
    width: 100vw;
    height: 70%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
