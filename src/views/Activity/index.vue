<template>
    <div :key="route.path">
        <div v-if="currentActivity">
            <div class="w-full h-max animate-slide-up">
                <img :src="currentActivity.bg" :alt="currentActivity.title" class="w-full object-cover" />
                <div class="w-full flex flex-col md:flex-row justify-center items-center">
                    <router-link
                        v-for="link in links"
                        :key="link.id"
                        :to="link.href"
                        class="w-full min-h-13 px-2.5 md:py-5 text-[18px] md:text-[24px] md:text-center duration-300 transition-all ease-in-out font-bold hover:bg-[#d13138] hover:text-white flex items-center md:justify-center"
                        :class="{
                            'bg-[#d13138] text-white': pathToActivityId[route.path.toLowerCase()] === link.id,
                            'bg-[#f7f7f7] text-[#424d54]': pathToActivityId[route.path.toLowerCase()] !== link.id,
                        }">
                        {{ link.name }}
                    </router-link>
                </div>
            </div>
            <div class="py-[50px]">
                <div class="container">
                    <h2 class="text-[#424d54] text-[40px] md:text-[54px] pb-5 md:pb-[30px]">
                        {{ t("activity.heading") }}
                    </h2>
                    <p>{{ currentActivity.description }}</p>
                </div>
            </div>
            <div class="relative pt-[30px] md:pt-20 info">
                <div class="container">
                    <img :src="currentActivity.infoImg" alt="" class="w-full md:w-[85%] h-auto object-cover" />
                    <div
                        class="md:absolute md:w-[35%] md:right-[0%] md:top-1/2 md:-translate-y-[50%] bg-white p-[15px] pr-0 md:pt-[30px] md:pb-10 md:pl-10 z-10 info-text">
                        <h2 class="text-[80px] md:text-[120px] text-[#dedede] font-bold leading-[1.15385]">2024</h2>
                        <h3
                            class="text-[45px] md:text-[54px] mt-[-50px] pb-5 leading-[1.16667]"
                            v-html="currentActivity.title"></h3>
                        <p class="text-[13px] md:text-[17px] font-sf text-[#424f54] leading-[1.3]">
                            {{ currentActivity.info }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="pt-[50px]">
                <div class="container">
                    <h2 class="text-[#424d54] text-[40px] md:text-[54px] pb-5 md:pb-[30px]">
                        {{ t("activity.brand") }}
                    </h2>
                    <ul class="flex flex-col md:flex-row md:flex-wrap m-0 md:mt-[30px] md:-mx-[35px]">
                        <li
                            v-for="(brand, index) in currentActivity.brands"
                            :key="brand?.id"
                            class="md:px-[35px] md:mb-[50px] w-full md:w-1/3 border-[#dedede] max-md:pb-5 max-md:mb-[30px]"
                            :class="{
                                'border-b': index !== currentActivity.brands.length - 1,
                                'md:border-b-0': true,
                                'md:border-r': (index + 1) % 3 !== 0,
                            }">
                            <img
                                :src="brand?.logo"
                                :alt="brand?.name"
                                class="w-full aspect-square max-w-[130px] object-" />
                            <div class="mt-5 pb-[15px]">
                                <h2 class="md:text-2xl text-[20px] text-[#d13138] font-bold">{{ brand?.name }}</h2>
                                <router-link
                                    :to="brand?.href"
                                    class="italic text-sm text-[#a7a7a7] underline font-sf"
                                    >{{ brand?.href }}</router-link
                                >
                            </div>
                            <p class="text-[13px] md:text-[16px] pb-5 font-sf text-[#424f54] leading-[1.3]">
                                {{ brand?.content }}
                            </p>
                            <router-link
                                :to="brand?.href"
                                class="text-[#a7a7a7] text-[15px] md:text-lg flex items-center gap-6"
                                >{{ t("detail") }}<img :src="btnArG" alt="" class="h-[13px] md:h-[16px] object-cover"
                            /></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else>
            <p>{{ t("activity.notFound") }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { activityMeta, useAllBrands } from "@landing/data/activity.js";
import { ref, watch, computed } from "vue";

import btnArG from "@landing/assets/images/btn/ar-g.png";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const route = useRoute();

// computed activity với ngôn ngữ hiện tại
const activity = computed(() => {
    const brands = useAllBrands(t);
    return activityMeta.map((item, index) => ({
        ...item,
        title: t(`activity.items[${index}].title`),
        description: t(`activity.items[${index}].description`),
        info: t(`activity.items[${index}].info`),
        brands: item.brandIndexes.map((i) => brands[i]),
    }));
});

const links = computed(() => [
    { id: 1, name: t("menu.activity1"), href: "/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep" },
    { id: 2, name: t("menu.activity2"), href: "/linh-vuc-hoat-dong/thuong-mai-br-dich-vu" },
    { id: 3, name: t("menu.activity3"), href: "/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi" },
]);

const pathToActivityId = {
    "/linh-vuc-hoat-dong": 1,
    "/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep": 1,
    "/linh-vuc-hoat-dong/thuong-mai-br-dich-vu": 2,
    "/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi": 3,
};

const currentActivity = ref(null);

const updateActivity = () => {
    const path = route.path.toLowerCase();
    const id = pathToActivityId[path];
    currentActivity.value = activity.value.find((item) => item.id === id);
};

// Gọi khi load lần đầu
updateActivity();

// Gọi lại khi route thay đổi
watch(
    () => route.path,
    () => {
        updateActivity();
    }
);

// Gọi lại khi locale thay đổi (ngôn ngữ thay đổi)
watch(locale, () => {
    updateActivity();
});

</script>

<style scoped>
@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
}

.info::before {
    content: "";
    background: #f7f7f7;
    width: 100%;
    height: 70%;
    position: absolute;
    top: 0;
    left: 0;
}

.info-text::after {
    content: "";
    display: inline-block;
    width: 3000px;
    height: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>
