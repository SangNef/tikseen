<template>
    <section class="overflow-x-hidden relative">
        <div class="max-w-[1200px] mx-auto px-2.5 w-full py-7.5 md:flex relative">
            <div
                class="pr-5 md:w-[25%] md:py-[50px] h-fit md:translate-y-1/4 main-cate relative"
                ref="mainCateRef"
                style="transition: transform 0.1s ease-out">
                <h2 class="text-[40px] pb-5 leading-[1.15385] md:text-[54px]">
                    {{ t('home.pioneering') }} <br /><span class="text-[#d13138]">{{ t('home.spirit') }}</span>
                </h2>
                <p class="text-[13px] m-0 md:text-[17px] text-[#424d54] font-normal leading-[1.3] font-sf">
                    {{ t('home.cateContent') }}
                </p>
                <div class="w-full mt-5 mx-auto text-center flex flex-col items-center justify-center">
                    <img :src="mouse" alt="" class="w-[21px] h-auto mouse" />
                    <div class="flex text-[13px] text-[#a7a7a7]">
                        <img :src="ArDragL" class="w-[21px] h-auto object-contain" /><span class="mx-1.25"
                            >{{ t('home.slide') }}</span
                        ><img :src="ArDragR" class="w-[21px] h-auto object-contain" />
                    </div>
                </div>
            </div>

            <div
                ref="cateContentRef"
                class="w-full md:w-[75%] pl-5 cate-content max-md:overflow-x-scroll"
                style="transition: transform 0.1s ease-out"
                @mousedown="handleMouseDown"
                @mouseleave="handleMouseLeave"
                @mouseup="handleMouseUp"
                @mousemove="handleMouseMove">
                <div class="py-5 min-w-[1260px]">
                    <ul class="flex">
                        <li v-for="item in cateItems" :key="item.id" class="px-2.5 w-1/4 md:w-[30%]">
                            <div
                                class="pt-[70px] px-[25px] pb-[25px] md:pt-[105px] md:px-12 md:pb-12 bg-white shadow-lg relative duration-300 group cate-group overflow-hidden">
                                <div class="w-[30%] mb-[25px] z-20">
                                    <img :src="item.img" alt="" class="w-full h-auto object-cover z-999" />
                                    <div class="absolute w-full bg-[#a7a7a7] left-[40%] h-0.5"></div>
                                </div>
                                <h2
                                    v-html="t(`home.cate[${item.id}].title`)"
                                    class="text-[#d13138] text-[33px] pb-5 md:text-[58px] font-bold leading-[1.15385] h-24 md:h-[241px]"></h2>
                                <div class="h-[130px]" :style="{ backgroundImage: `url(${item.imgBg})`, backgroundSize: 'cover' }"></div>
                                <div
                                    class="absolute bg-[#d13138] w-full top-0 left-0 h-[5px] group-hover:h-full duration-500 z-10">
                                    <div
                                        class="pt-[70px] px-[25px] pb-[25px] md:pt-[105px] md:px-12 md:pb-12 shadow-lg relative hidden group-hover:block duration-500">
                                        <div class="w-[30%] mb-[25px] z-20">
                                            <img :src="item.imgHv" alt="" class="w-full h-auto object-cover z-999" />
                                            <div
                                                class="absolute w-full bg-white left-[40%] h-0 group-hover:h-0.5"></div>
                                        </div>
                                        <h2
                                            v-html="t(`home.cate[${item.id}].title`)"
                                            class="text-white text-[33px] pb-5 md:text-[58px] font-bold leading-[1.15385] hidden group-hover:block h-24 md:h-[241px]"></h2>
                                        <div class="h-[130px] relative">
                                            <p class="text-[12px] md:text-[13px] leading-[17px] text-white font-sf">
                                                {{ t(`home.cate[${item.id}].subTitle`) }}
                                            </p>
                                            <router-link
                                                :to="item.href"
                                                class="absolute bottom-0 left-0 flex items-center uppercase text-white">
                                                Xem thêm
                                                <img :src="btnArW" alt="" class="pl-4 h-[16px]" />
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import btnArW from "@landing/assets/images/btn/ar-w.png";
import ArDragL from "@landing/assets/images/btn/ar-drag-l.png";
import ArDragR from "@landing/assets/images/btn/ar-drag-r.png";
import mouse from "@landing/assets/images/mouse.png";

import iconCate1 from "@landing/assets/images/ico/ico-cate-1.png";
import iconCate2 from "@landing/assets/images/ico/ico-cate-2.png";
import iconCate3 from "@landing/assets/images/ico/ico-cate-3.png";
import iconCateHv1 from "@landing/assets/images/ico/ico-cate-1-hv.png";
import iconCateHv2 from "@landing/assets/images/ico/ico-cate-2-hv.png";
import iconCateHv3 from "@landing/assets/images/ico/ico-cate-3-hv.png";
import cate2Bg from "@landing/assets/images/cate-2.jpg";

import { useI18n } from "vue-i18n";
const { t } = useI18n();


const cateContentRef = ref(null);
const mainCateRef = ref(null);

const cateItems = [
    {
        id: 0,
        img: iconCate1,
        imgHv: iconCateHv1,
        imgBg: "",
        title: "Công nghệ <br /> - Công nghiệp",
        subTitle: "",
        href: "/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep",
    },
    {
        id: 1,
        img: iconCate2,
        imgHv: iconCateHv2,
        imgBg: cate2Bg,
        title: "Thương mại <br /> Dịch vụ",
        subTitle:
            "Với mảng Thương mại Dịch vụ - Vingroup tiếp tục đẩy mạnh, hoàn thiện và nâng cấp chất lượng cũng như hiệu quả hoạt động. Thương mại dịch vụ là hệ sinh thái quan trọng để hỗ trợ công tác nghiên cứu và thương mại hóa các sản ...",
        href: "/linh-vuc-hoat-dong/thuong-mai-br-dich-vu",
    },
    {
        id: 2,
        img: iconCate3,
        imgHv: iconCateHv3,
        imgBg: "",
        title: "Thiện nguyện <br /> Xã hội",
        subTitle: "",
        href: "/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi",
    },
];

let isMouseDown = false;
let startX;

const handleMouseDown = (e) => {
    isMouseDown = true;
    startX = e.pageX;
};

const handleMouseLeave = () => {
    isMouseDown = false;
};

const handleMouseUp = () => {
    isMouseDown = false;
};

const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const moveX = e.pageX - startX;
    const transformValue = `translateX(${moveX}px)`; // Di chuyển theo trục X

    // Áp dụng transform cho cate-content
    cateContentRef.value.style.transform = transformValue;

    // Áp dụng transform cho main-cate (có thể cần hiệu chỉnh tốc độ)
    mainCateRef.value.style.transform = `translateX(${moveX * 0.1}px)`; // Kéo nhẹ cho main-cate

    // Cập nhật vị trí ban đầu để tính toán tiếp
    startX = e.pageX;
};
</script>

<style scoped>
.mouse {
    animation: 2s cubic-bezier(0.215, 0.61, 0.355, 1) 1s infinite both rotateMouse;
}
</style>
