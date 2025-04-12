<template>
    <div class="pt-[75px]">
        <div class="container">
            <h2 class="text-[#424d54] text-[40px] md:text-[54px] pb-5 md:pb-[30px]">{{ t('news.heading')}}</h2>

            <ul class="flex justify-between flex-col md:flex-row md:flex-nowrap mb-[30px] md:border-b border-[#e9e9e9]">
                <li
                    v-for="(cate, index) in cates"
                    :key="index"
                    class="text-[#a7a7a7] md:text-[17px] font-bold md:pb-2.5 cursor-pointer hover:text-[#d13138] hover:border-b-2 hover:border-[#d13138] duration-300 max-md:flex items-center min-h-13 px-2.5 text-[18px]"
                    :class="{
                        'md:text-[#d13138] md:border-b-2  md:border-[#d13138] max-md:bg-[#d13138] text-white': route.params.cate
                            ? slugToCate[route.params.cate] === cate
                            : cate === 'tất cả',
                    }">
                    <router-link :to="cate === 'tất cả' ? '/tin-tuc-su-kien' : `/tin-tuc-su-kien/${cateToSlug(cate)}`">
                        {{ t(`news.cates.${cate}`) }}
                    </router-link>
                </li>
            </ul>

            <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
                <template v-for="(item, index) in filteredNews.slice(0, 5)" :key="index">
                    <!-- Item đầu tiên chiếm 2 cột -->
                    <div v-if="index === 0" class="col-span-1 md:col-span-2 bg-white p-4 group relative h-max">
                        <img :src="item.img" alt="" class="w-full md:aspect-video object-cover mb-4" />
                        <div class="w-1/2 md:absolute md:bg-white/50 md:bottom-8 md:left-4  md:p-4">
                            <h4>{{ t('news.h4')}} {{ t(`news.cates.${item.cate}`) }}</h4>
                            <h3 class="text-xl font-bold group-hover:text-[#d13138] duration-300 pb-[25px]">
                                {{ t(item.title) }}
                            </h3>
                            <p class="text-sm text-gray-500 font-sf">{{ item.date }}</p>
                        </div>
                    </div>

                    <!-- Item thứ 2 nằm cạnh -->
                    <div v-else-if="index === 1" class="col-span-1 bg-white p-4 group">
                        <img :src="item.img" alt="" class="w-full h-auto mb-4" />
                        <h4>{{ t('news.h4')}} {{ t(`news.cates.${item.cate}`) }}</h4>
                        <h3 class="text-lg font-semibold group-hover:text-[#d13138] duration-300 pb-[25px]">
                            {{ t(item.title) }}
                        </h3>
                        <p class="text-sm text-gray-500 font-sf">{{ item.date }}</p>
                    </div>

                    <!-- 3 item còn lại ở hàng dưới -->
                    <div v-else class="col-span-1 bg-white p-4 group">
                        <img :src="item.img" alt="" class="w-full h-auto mb-4" />
                        <h4>{{ t('news.h4')}} {{ t(`news.cates.${item.cate}`) }}</h4>
                        <h3 class="text-lg font-semibold group-hover:text-[#d13138] duration-300 pb-[25px]">
                            {{ t(item.title) }}
                        </h3>
                        <p class="text-sm text-gray-500 font-sf">{{ item.date }}</p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import news from "@landing/data/news.js";

import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();

const cates = [
    "tất cả",
    "vingroup",
    "công nghệ",
    "công nghiệp",
    "bất động sản",
    "du lịch - vui chơi - giải trí",
    "y tế",
    "giáo dục",
    "bán lẻ",
];

const slugToCate = {
    "cong-nghe": "công nghệ",
    vingroup: "vingroup",
    "cong-nghiep": "công nghiệp",
    "bat-dong-san": "bất động sản",
    "du-lich-vui-choi-giai-tri": "du lịch - vui chơi - giải trí",
    "y-te": "y tế",
    "giao-duc": "giáo dục",
    "ban-le": "bán lẻ",
};

const cateToSlug = (cate) => {
    for (const [slug, name] of Object.entries(slugToCate)) {
        if (name === cate) return slug;
    }
    return ""; // cho "tất cả"
};

// Xử lý lọc theo category từ route
const filteredNews = computed(() => {
    const cateParam = route.params.cate;
    const cate = slugToCate[cateParam] || cateParam || null;

    const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!cate) return sortedNews;
    return sortedNews.filter((item) => item.cate === cate);
});
</script>

<style scoped>
h4 {
    font-size: 17px;
    color: rgb(209, 49, 56);
    padding-bottom: 15px;
    line-height: 1.2;
}
</style>
