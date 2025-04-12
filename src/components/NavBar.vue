<template>
    <div
        class="fixed top-0 left-0 w-screen h-[50px] lg:h-screen lg:w-[95px] navbar px-4 flex flex-row lg:flex-col items-center justify-between z-999 gap-4 py-2 lg:py-5 duration-300"
        :class="isMenuOpen ? 'bg-[#d13138]' : 'bg-white'">
        <img :src="Logo" alt="" class="w-11 lg:w-15 h-auto object-cover order-2 lg:order-1" />

        <!-- Icon mở menu -->
        <Bars3Icon
            class="h-11 w-11 text-gray-500 order-1 lg:order-2 cursor-pointer"
            @click="isMenuOpen = !isMenuOpen" />

        <div class="flex gap-3 flex-row lg:flex-col items-center order-3">
            <a href="https://vingroup.net/vi/search" target="_blank">
                <MagnifyingGlassIcon class="h-8 w-8 text-gray-500 cursor-pointer" />
            </a>
            <div class="flex gap-2">
                <span
                    class="cursor-pointer font-semibold"
                    :class="locale === 'en' ? 'text-[#d13138]' : 'text-gray-400'"
                    @click="setLanguage('en')"
                    >EN</span
                >
                <span>|</span>
                <span
                    class="cursor-pointer font-semibold"
                    :class="locale === 'vi' ? 'text-[#d13138]' : 'text-gray-400'"
                    @click="setLanguage('vi')"
                    >VI</span
                >
            </div>
        </div>
    </div>

    <!-- Menu overlay full màn hình -->
    <div
        v-show="isMenuOpen"
        class="inset-0 bg-white z-20 flex flex-col items-center opacity-0 transition-opacity duration-300"
        :class="isMenuOpen ? 'opacity-100' : ''"
        :style="{ background: `url(${bgMenu}) right 10% bottom 10% / 30% no-repeat white`, position: 'fixed' }">
        <nav class="mt-20 md:mt-[50vh] w-full pl-5 md:pl-55 md:-translate-y-1/2">
            <ul class="w-full">
                <li v-for="item in menu" :key="item.name" class="relative group">
                    <!-- Menu chính -->
                    <router-link
                        :to="item.href"
                        @click="isMenuOpen = false"
                        class="text-[#a7a7a7] hover:text-[#d13138] hover:pl-5 duration-300 font-bold text-2xl md:text-[32px] leading-[1.3]"
                        :class="route.path === item.href ? 'text-[#d13138]' : ''">
                        {{ item.name }}
                    </router-link>

                    <!-- Submenu mobile (ẩn ở md trở lên) -->
                    <ul v-if="item.submenu" class="font-sf md:hidden">
                        <li v-for="subItem in item.submenu" :key="subItem.name" class="py-[5px]">
                            <router-link
                                :to="subItem.href"
                                @click="isMenuOpen = false"
                                class="text-[17px] text-[#424d54] hover:text-[#d13138] leading-[1.3]"
                                :class="route.path === subItem.href ? 'text-[#d13138]' : ''">
                                {{ subItem.name }}
                            </router-link>
                        </li>
                    </ul>

                    <!-- Submenu hiển thị khi hover (chỉ ở md trở lên) -->
                    <ul
                        v-if="item.submenu"
                        class="hidden md:block absolute top-0 left-100 pl-0 min-w-[240px] z-50 opacity-0 group-hover:opacity-100 group-hover:pl-10 pointer-events-none group-hover:pointer-events-auto transition-all duration-500">
                        <li v-for="subItem in item.submenu" :key="subItem.name" class="py-[5px]">
                            <router-link
                                :to="subItem.href"
                                @click="isMenuOpen = false"
                                class="text-[17px] md:text-[22px] text-[#424d54] hover:text-[#d13138] leading-[1.3] font-sf"
                                :class="route.path === subItem.href ? 'text-[#d13138]' : ''">
                                {{ subItem.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- map sub link -->
            <ul class="w-full mt-5">
                <ul class="w-full mt-5">
                    <!-- Tuyển dụng (external link) -->
                    <li>
                        <a
                            href="https://tuyendung.vingroup.net/home"
                            @click="isMenuOpen = false"
                            class="text-[#a7a7a7] hover:text-[#d13138] font-bold text-2xl leading-[1.3]"
                            target="_blank"
                            rel="noopener">
                            {{ t("menu.hiring") }}
                        </a>
                    </li>

                    <!-- Liên hệ (internal link) -->
                    <li>
                        <router-link
                            to="/lien-he"
                            @click="isMenuOpen = false"
                            class="text-[#a7a7a7] hover:text-[#d13138] font-bold text-2xl leading-[1.3]"
                            :class="route.path === '/lien-he' ? 'text-[#d13138]' : ''">
                            {{ t("menu.contact") }}
                        </router-link>
                    </li>
                </ul>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import Logo from "@landing/assets/images/logo.png";
import bgMenu from "@landing/assets/images/bg-menu.png";

const route = useRoute();

const isMenuOpen = ref(false);

import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const setLanguage = (lang) => {
    locale.value = lang;
};

const menu = computed(() => [
    {
        name: t("menu.home"),
        href: "/",
    },
    {
        name: t("menu.about"),
        href: "/gioi-thieu",
    },
    {
        name: t("menu.activity"),
        href: "/linh-vuc-hoat-dong",
        submenu: [
            {
                name: t("menu.activity1"),
                href: "/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep",
            },
            {
                name: t("menu.activity2"),
                href: "/linh-vuc-hoat-dong/thuong-mai-br-dich-vu",
            },
            {
                name: t("menu.activity3"),
                href: "/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi",
            },
        ],
    },
    {
        name: t("menu.development"),
        href: "/phat-trien-ben-vung",
    },
    {
        name: t("menu.relation"),
        href: "/quan-he-co-dong",
    },
    {
        name: t("menu.news"),
        href: "/tin-tuc-su-kien",
    },
]);
</script>

<style scoped>
.navbar {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
