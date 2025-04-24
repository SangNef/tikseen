<template>
    <div class="pt-8 md:pt-[50px] px-6 max-w-7xl mx-auto">
        <div class="">
            <h3 class="text-white text-[20px] md:text-[30px] mb-2! leading-[28px] text-center font-bold">
                Bắt đầu hành trình tiền điện tử của bạn ngay bây giờ
            </h3>
            <p class="my-2! text-[16px] md:text-[20px] text-white text-center" style="visibility: visible">
                HOSE Các công ty toàn cầu có nhiều tính năng giúp họ trở thành nơi lý tưởng để mua và bán tài sản kỹ
                thuật số
            </p>
        </div>
        <div class="flex gap-9 flex-col md:flex-row">
            <ul class="mt-9 flex flex-col gap-3">
                <li v-for="(item, index) in items" :key="index" class="flex items-start">
                    <div class="w-[38px] h-[38px] mt-[7px] mr-[5px] flex-shrink-0">
                        <img v-if="item.img" :src="item.img" alt="" class="w-full h-full object-contain" />
                        <div v-else class="w-full h-full"></div>
                    </div>
                    <div class="">
                        <p class="text-white mt-0.5 text-[16px]">{{ item.title }}</p>
                        <div class="text-white text-[16px] leading-6" v-html="item.content"></div>
                    </div>
                </li>
                <div class="mt-3 flex justify-center items-center gap-0.5">
                    <img :src="down.ios" alt="" class="h-11 mt-[7px] mr-[5px]" />
                    <img :src="down.android" alt="" class="h-11 mt-[7px] mr-[5px]" />
                </div>
            </ul>

            <div class="md:w-[60%]">
                <img :src="trade.step" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import * as trade from "@/assets/images/trade/trade.js";
import * as down from "@/assets/images/download/index.js";

const items = [
    {
        img: trade.trade1,
        title: "Quản lý tài sản",
        content: "<p>Giao dịch giao ngay có đòn bẩy lên tới 5x</p>",
    },
    {
        img: trade.trade2,
        title: "Thanh toán bằng thẻ tín dụng",
        content: "<p>Mua tiền điện tử bằng thẻ tín dụng thông qua đối tác</p>",
    },
    {
        img: trade.trade3,
        title: "Bảo quản an toàn",
        content:
            "<p>Tiền của khách hàng được lưu trữ trong ví lạnh đa chữ ký chuyên dụng</p><p>Giám sát an ninh 24/7</p><p>Dành riêng 20.000 BTC dự trữ bảo mật</p>",
    },
    {
        title: "Truy cập mọi nơi",
        content: "<p>Tôi sử dụng nó trên Android và iOS và sử dụng nó 24/7</p><p>Gửi tiền, rút tiền và giao dịch</p>",
    },
];
</script>

<style></style>
