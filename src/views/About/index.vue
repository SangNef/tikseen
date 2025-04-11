<template>
    <div class="container">
        <div class="pt-5 md:pt-[75px] flex items-center">
            <router-link to="/">
                <HomeIcon class="w-4.5 h-4.5 text-gray-400" />
            </router-link>
            <ChevronRightIcon class="w-4 h-4 text-gray-500" />
            <p class="text-lg text-[#d13138] font-bold">{{ t("breadcrumb.about") }}</p>
        </div>
        <div class="pt-[35px] pb-[30px]">
            <img :src="about1" alt="" class="w-full" />
        </div>
        <h2 class="text-[#424d54] text-[40px] md:text-[54px] uppercase pb-[30px] leading-[1.15385]">
            {{ t("about.title") }}
        </h2>
        <p style="text-align: justify" class="pb-[25px]">
            <em class="font-sf text-[13px] md:text-[17px] text-[#424d54]">{{ t("about.content.1") }}</em>
        </p>
        <p style="text-align: justify" class="pb-[25px]">
            <em class="font-sf text-[13px] md:text-[17px] text-[#424d54]">{{ t("about.content.2") }}</em>
        </p>
        <p style="text-align: justify" class="pb-[25px]">
            <em class="font-sf text-[13px] md:text-[17px] text-[#424d54]">
                {{ t("about.content.3") }} </em
            ><br /><em class="font-sf text-[13px] md:text-[17px] text-[#424d54]">
                {{ t("about.content.4") }} </em
            ><br /><em class="font-sf text-[13px] md:text-[17px] text-[#424d54]">
                {{ t("about.content.5") }}
            </em>
        </p>
        <p style="text-align: justify" class="pb-[25px]">
            <em class="font-sf text-[13px] md:text-[17px] text-[#424d54]">
                {{ t("about.content.6") }}
            </em>
        </p>
        <PageWrap />
    </div>
    <Partner />
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/24/solid";
import PageWrap from "./PageWrap.vue";

import about1 from "@landing/assets/images/about1.jpg";
import Partner from "./Partner.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style></style>
