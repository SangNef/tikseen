<template>
    <div>
        <Header title="ĐIỆN TOÁN VIỆT NAM" />
        <div
            :style="{
                backgroundImage: `url(${MainBg})`,
                backgroundPosition: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }"
            class="overflow-y-auto h-[844px]">
            <div class="min-h-[100vh]">
                <div class="w-[80%] mx-auto pt-[10px] flex items-center justify-center">
                    <img :src="ViLogo" alt="" class="w-[80%]" />
                </div>
                <div class="w-[80%] mx-auto py-[10px] text-justify [font-size:14px]">
                    Công ty TNHH MTV Xổ số điện toán Việt Nam thành lập năm 2011 theo Quyết định số 1109/QĐ-TTg của Thủ
                    tướng Chính phủ và được quản lý trực tiếp bởi Bộ Tài chính theo Quyết định số 2933/QĐ-BTC. Vietlott
                    là doanh nghiệp xổ số Việt Nam tiên phong tham gia Dự án An Sinh - Xã Hội. thông qua các chương
                    trình hỗ trợ cộng đồng trong lĩnh vực y tế, giáo dục.
                </div>
                <router-link class="w-[60%] mx-auto pt-50 text-center block" to="/games">
                    <img :src="Asxh" alt="" />
                </router-link> 
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import ViLogo from "@/assets/images/home/vilogo.png";
import MainBg from "@/assets/images/home/mainbg.png";
import Asxh from "@/assets/images/home/asxh.png";
</script>

<style></style>
