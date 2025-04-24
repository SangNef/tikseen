<template>
    <div class="py-10 md:py-20 max-w-7xl mx-auto">
        <div class="px-6">
            <div class="">
                <h3 class="text-white text-[20px] md:text-[30px] mb-2! leading-[28px] font-bold px-5!">
                    The most complete trading cryptocurrency platform
                </h3>
                <p class="my-2! text-[16px] md:text-[20px] text-[#ffffff99] px-5!" style="visibility: visible">
                    Here are a few reasons why you should choose HOSE
                </p>
            </div>
            <ul class="flex flex-col md:flex-row md:mt-10 gap-3 text-white">
                <li v-for="(item, index) in items" :key="index" class="flex items-center md:flex-col md:w-1/3">
                    <img :src="item.img" alt="" class="w-15 h-15 md:w-20 md:h-20 mr-3" />
                    <span>{{ item.content }}</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="pt-10 text-white max-w-7xl mx-auto">
        <div class="px-6 flex flex-col-reverse md:flex-row md:items-center gap-6">
            <div class="md:w-[60%]">
                <h3 class="text-[20px] md:text-[30px] leading-[28px] md:leading-[38px] mb-2! font-bold">Join the HOSE Community Today</h3>
                <p class="text-[16px] md:text-[20px] leading-[1.5] my-2!">Always there for you</p>
                <div class="mt-6 flex gap-2">
                    <input
                        type="text"
                        placeholder="Vui lòng nhập email hoặc số điện thoại di động của bạn"
                        class="w-auto md:w-[380px]! max-md:flex-1 p-2 md:py-4 md:px-6 leading-[24px] rounded-sm text-[#7b8ab8] bg-white outline-none" />
                    <button class="rounded-sm text-lg px-1.5 basis-25 bg-[#07c160] font-bold">Đăng ký</button>
                </div>
                <ul class="mt-5 pb-12 flex gap-[14px] justify-center md:justify-start">
                    <li v-for="(link, index) in links" :key="index">
                        <img :src="link.img" alt="" class="w-9 h-9 object-contain" />
                    </li>
                </ul>
            </div>
            <img :src="award.pc" alt="" class="w-full h-70 md:w-[30%] md:h-auto object-contain float-left" />
        </div>
    </div>
</template>

<script setup>
import * as award from "@/assets/images/award/index.js";
import * as link from "@/assets/images/link/index.js";

const items = [
    {
        img: award.icon1,
        content: "Maximize profit with leverage",
    },
    {
        img: award.icon2,
        content: "Up to 125x leverage with superior spreads",
    },
    {
        img: award.icon3,
        content: "Increased leverage, no liquidation risk",
    },
];

const links = [
    {
        img: link.ytb,
    },
    {
        img: link.fb,
    },
    {
        img: link.li,
    },
    {
        img: link.apple,
    },
    {
        img: link.tele,
    },
    {
        img: link.skype,
    },
];
</script>

<style></style>
