<template>
    <div class="max-w-100 mx-auto background min-md:h-screen">
        <div class="h-[50px] px-2 fixed top-0 w-full left-[50%] transform translate-x-[-50%] max-w-100 bg-white z-50">
            <div class="w-full h-full text-black font-bold flex justify-center items-center font-helvetica">Cửa hàng</div>
        </div>
        <div class="pt-[60px]">
            <div class="relative w-full overflow-hidden">
                <img :src="homePng2" alt="carousel" class="w-full h-[180px]" />
            </div>
            <div class="px-5 py-2.5">
                <div class="flex">
                    <img :src="loa" alt="loa" class="h-[26px]" />
                    <marquee
                        style="
                            color: white;
                            width: 100%;
                            height: 26px;
                            line-height: 26px !important;
                            vertical-align: top;
                            display: inline-block;
                            box-sizing: border-box;
                            font-weight: 300 !important;
                        "
                        class="font-helvetica"
                        >MỞ RA LỄ HỘI MUA SẮM SÔI ĐỘNG</marquee
                    >
                </div>
                <div class="flex flex-wrap justify-between">
                    <div
                        v-for="item in items"
                        :key="item.id"
                        class="w-[50%] mb-2 flex"
                        :class="item.id % 2 === 0 ? 'justify-end' : 'justify-start'"
                        @click="router.push(`/shopdt/?type=${item.id}`)">
                        <img :src="item.img" alt="item" class="w-[163px] h-[140px]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import homePng2 from "~/assets/imgs/shoppng.png";
import loa from "~/assets/imgs/loa.png";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const items = ref([
    {
        id: 1,
        name: "rabity",
        img: "src/assets/imgs/shops/shop1.png",
    },
    {
        id: 2,
        name: "npp",
        img: "src/assets/imgs/shops/shop2.png",
    },
    {
        id: 3,
        name: "vedette",
        img: "src/assets/imgs/shops/shop3.png",
    },
    {
        id: 4,
        name: "kangaroo",
        img: "src/assets/imgs/shops/shop4.png",
    },
]);
</script>

<style>
.background {
    background-position-x: center, 0px;
    background-position-y: 20%, 0px;
    background-size: contain, contain;
    background-repeat: no-repeat, initial;
    background-attachment: initial, initial;
    background-origin: initial, initial;
    background-clip: initial, initial;
    background-color: initial;
    background-image: linear-gradient(rgba(12, 25, 44, 0) 0px, rgb(12, 25, 44) 25%, rgb(12, 25, 44) 75%, rgba(12, 25, 44, 0) 100%);
}
</style>
