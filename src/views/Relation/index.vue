<template>
    <div class="container">
        <div class="pt-5 md:pt-[75px] flex items-center">
            <router-link to="/">
                <HomeIcon class="w-4.5 h-4.5 text-gray-400" />
            </router-link>
            <ChevronRightIcon class="w-4 h-4 text-gray-500" />
            <p class="text-lg text-[#d13138] font-bold">{{ t("relation.heading") }}</p>
        </div>
        <div class="py-[30px]"></div>
        <h2 class="text-[#424d54] text-[40px] md:text-[54px] uppercase pb-[30px] leading-[1.15385]">
            {{ t("relation.heading") }}
        </h2>
        <div class="flex flex-nowrap gap-5 pb-5">
            <div class="w-full md:w-1/3 p-5 border border-[#eee]">
                <h3
                    class="text-[#111] text-sm font-bold pb-2.5 mb-[15px] border-b-2 border-[#d32d37] font-arial uppercase">
                    {{ t("relation.row.1.title") }}
                </h3>
                <img :src="relation1" alt="" />
                <div class="flex items-center gap-2 mt-4">
                    <img :src="pdf" alt="pdf" class="w-4 h-4" />
                    <a href="#" target="blank" class="font-sf font-bold text-[13px] text-[#333]">
                        {{ t("relation.row.1.pdf") }}
                    </a>
                </div>
            </div>
            <div class="max-md:!w-[0%]" style="width: calc(200% / 3 + 20px)"></div>
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-5 pb-5">
            <div class="w-full md:w-1/3 p-5 border border-[#eee]">
                <h3
                    class="text-[#111] text-sm font-bold pb-2.5 mb-[15px] border-b-2 border-[#d32d37] font-arial uppercase">
                    {{ t("relation.row.2.title") }}
                </h3>
            </div>
            <div class="p-5 border border-[#eee] max-md:!w-full" style="width: calc(200% / 3 + 20px)">
                <h3
                    class="text-[#111] text-sm font-bold pb-2.5 mb-[15px] border-b-2 border-[#d32d37] font-arial uppercase">
                    {{ t("relation.row.3.title") }}
                </h3>
                <div class="flex items-start flex-nowrap gap-[8%]">
                    <div class="w-full aspect-square">
                        <img :src="relation2" alt="" class="w-full h-auto" />
                    </div>
                    <div class="w-full">
                        <ul class="border-t border-[#eee]">
                            <li class="flex items-center gap-2 py-2 border-b border-[#eee]">
                                <img :src="pdf" alt="pdf" class="w-4 h-4" />
                                <a
                                    href="#"
                                    target="blank"
                                    class="font-sf font-bold text-[13px] text-[#333] hover:text-[#d42d37]">
                                    {{ t("relation.row.3.pdf.1") }}
                                </a>
                            </li>
                            <li class="flex items-center gap-2 py-2 border-b border-[#eee]">
                                <img :src="pdf" alt="pdf" class="w-4 h-4" />
                                <a
                                    href="#"
                                    target="blank"
                                    class="font-sf font-bold text-[13px] text-[#333] hover:text-[#d42d37]">
                                    {{ t("relation.row.3.pdf.2") }}
                                </a>
                            </li>
                        </ul>
                        <a
                            class="font-sf text-[13px] font-bold flex gap-1 items-center text-[#d42d37] hover:text-[#333]"
                            href="/quan-he-co-dong/bao-cao-tai-chinh">
                            <span>{{ t("more") }}</span>
                            <ChevronRightIcon class="w-3 h-3 inline-block stroke-3" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-5">
            <div class="w-full md:w-1/3 p-5 border border-[#eee]">
                <h3
                    class="text-[#111] text-sm font-bold pb-2.5 mb-[15px] border-b-2 border-[#d32d37] font-arial uppercase">
                    {{ t("relation.row.4.title") }}
                </h3>
                <img :src="contact" alt="" class="w-full h-auto" />
                <div class="flex flex-col">
                    <div
                        v-for="(contact, index) in contacts"
                        :key="index"
                        class="flex items-center py-1.5 gap-2 text-[#333] text-[13px] font-sf border-b border-[#eee] last:border-b-0 font-sf">
                        <i :class="contact.icon" class="text-[#d42d37]"></i>
                        <a
                            v-if="contact.href"
                            :href="contact.href"
                            class="text-[#d42d37] border-l border-l-[#eee] pl-2 font-bold">
                            {{ contact.value }}
                        </a>
                        <span v-else class="border-l border-l-[#eee] pl-2">{{ contact.value }}</span>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-5 border border-[#eee]">
                <h3
                    class="text-[#111] text-sm font-bold pb-2.5 mb-[15px] border-b-2 border-[#d32d37] font-arial uppercase">
                    {{ t("relation.row.5.title") }}
                </h3>
                <img :src="relation3" alt="" class="w-full h-auto" />
                <ul class="border-t border-[#eee]">
                    <li class="flex items-center gap-2 py-2 border-b border-[#eee]">
                        <img :src="pdf" alt="pdf" class="w-4 h-4" />
                        <a
                            href="#"
                            target="blank"
                            class="font-sf font-bold text-[13px] text-[#333] hover:text-[#d42d37]">
                            {{ t("relation.row.5.pdf.1") }}
                        </a>
                    </li>
                    <a
                        class="font-sf text-[13px] font-bold flex gap-1 items-center text-[#d42d37] hover:text-[#333]"
                        href="/quan-he-co-dong/bao-cao-thuong-nien">
                        <span>{{ t("more") }}</span>
                        <ChevronRightIcon class="w-3 h-3 inline-block stroke-3" />
                    </a>
                </ul>
            </div>
            <div class="w-full md:w-1/3 flex flex-col gap-5">
                <div class="p-5 border border-[#eee] h-1/2">
                    <h3
                        class="text-[#111] text-sm font-bold pb-2.5 mb-[15px] border-b-2 border-[#d32d37] font-arial uppercase">
                        {{ t("relation.row.6.title") }}
                    </h3>
                    <ul>
                        <li
                            v-for="([, value], index) in labels"
                            :key="index"
                            class="flex items-center justify-between py-2 border-b border-[#eee]">
                            <a
                                href="#"
                                target="blank"
                                class="font-sf font-bold text-[13px] text-[#333] hover:text-[#d42d37]">
                                {{ value }}
                            </a>
                            <ChevronRightIcon class="w-3 h-3 inline-block stroke-3 text-[#d42d37]" />
                        </li>
                    </ul>
                </div>
                <div class="p-5 border border-[#eee] h-1/2">
                    <h3
                        class="text-[#111] text-sm font-bold pb-2.5 mb-[15px] border-b-2 border-[#d32d37] font-arial uppercase">
                        {{ t("relation.row.7.title") }}
                    </h3>
                    <div class="flex">
                        <div class="w-1/2">
                            <img :src="vinhomes" alt="" class="w-full h-auto" />
                        </div>
                        <div class="w-1/2">
                            <img :src="vinretail" alt="" class="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/24/solid";

import pdf from "@/assets/images/ico/pdf.png";
import contact from "@/assets/images/contact.jpg";
import relation1 from "@/assets/images/relation1.png";
import relation2 from "@/assets/images/relation2.png";
import relation3 from "@/assets/images/relation3.png";
import vinhomes from "@/assets/images/vinhomes.png";
import vinretail from "@/assets/images/vinretail.png";
import { computed } from "vue";

const { t, locale, messages } = useI18n();

const contacts = [
    {
        icon: "fa fa-phone",
        value: "+84 24 3974 9999 - Ext 9400",
    },
    {
        icon: "fas fa-envelope-open",
        value: "ir@vingroup.net",
        href: "mailto:ir@vingroup.net",
    },
    {
        icon: "fa fa-fax",
        value: "+84 24 3974 8888",
    },
];

const labels = computed(() => {
    const currentLang = locale.value;
    const labelObj = messages.value[currentLang]?.relation?.row?.["6"]?.label;
    return labelObj ? Object.entries(labelObj) : [];
});

console.log("relation.row.6.label", t("relation.row.6.label", {}, { returnObjects: true }));
</script>
