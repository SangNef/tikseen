<template>
    <div class="bg-[#f7f7f7] pt-12.5 mt-10">
        <div class="container">
            <div class="w-full flex flex-col md:flex-row justify-between items-start md:flex-nowrap border-b border-[#eee] mb-5">
                <div class="w-full">
                    <div class="pb-[35px]">
                        <h4 class="text-[16px] text-[#2d3236] pb-[5px] font-sf-bold">{{ t('footer.left.1') }}</h4>
                        <p class="font-sf text-[13px] md:text-[17px] text-[#424d54] leading-[1.3]">{{ t('footer.left.2') }}</p>
                    </div>
                    <div class="pb-[35px]">
                        <p class="font-sf text-[13px] md:text-[17px] text-[#424d54] leading-[1.3]">{{ t('footer.left.3') }}</p>
                    </div>
                </div>
                <div class="w-full md:pl-10 flex justify-between items-start flex-nowrap">
                    <ul class="w-full">
                        <li v-for="(link, index) in footerLinks" :key="index">
                            <router-link :to="link.href" class="hover:text-[#d13138] text-[#424d54] text-[13px] md:text-[15px] leading-[1.3] font-sf-bold"><strong>{{ t(link.titleKey) }}</strong></router-link>
                        </li>
                    </ul>
                    <ul class="w-full">
                        <li v-for="(link, index) in footerLinks2" :key="index">
                            <router-link :to="link.href" class="hover:text-[#d13138] text-[#424d54] text-[13px] md:text-[15px] leading-[1.3] font-sf">{{ t(link.titleKey) }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mb-5">
                <p class="font-sf max-md:text-center text-[13px] md:text-[15px] text-[#424d54]">{{ t('footer.bottom') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const footerLinks = [
    {
        titleKey: "footer.right.links.1",
        href: "/",
    },
    {
        titleKey: "footer.right.links.2",
        href: "/gioi-thieu",
    },
    {
        titleKey: "footer.right.links.3",
        href: "/linh-vuc-hoat-dong/cong-nghe",
    },
    {
        titleKey: "footer.right.links.4",
        href: "/quan-he-co-dong",
    },
    {
        titleKey: "footer.right.links.5",
        href: "/phat-trien-ben-vung",
    },
];

const footerLinks2 = [
    {
        titleKey: "footer.right.subLinks.1",
        href: "/tin-tuc-su-kien",
    },
    {
        titleKey: "footer.right.subLinks.2",
        href: "/tuyen-dung",
    },
    {
        titleKey: "footer.right.subLinks.3",
        href: "/lien-he",
    },
];

</script>

<style></style>
