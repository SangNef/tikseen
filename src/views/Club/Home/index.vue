<template>
    <nav class="flex absolute w-full justify-between items-center p-4 z-50">
        <div class="flex items-center gap-2">
            <img :src="ame" alt="Logo" class="w-14 h-auto object-cover rounded shadow" />
        </div>
        <div class="flex items-center gap-4 z-20">
            <BellIcon
                class="w-6 h-6 text-white hover:text-gray-700 cursor-pointer z-20"
                @click="router.push('/notification')" />
            <PowerIcon class="w-6 h-6 text-white hover:text-gray-700 cursor-pointer" @click="handleLogout" />
        </div>
    </nav>
    <div
        class="h-55 relative w-full flex items-center justify-center overflow-hidden z-"
        style="
            background: linear-gradient(
                0deg,
                rgba(24, 19, 13, 1) 0%,
                rgba(56, 48, 29, 1) 50%,
                rgba(24, 19, 13, 1) 100%
            );
        ">
        <div
            class="absolute inset-0 rotated-image"
            :style="`background-image: url(${rong}); background-size: cover; background-position: center; mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.57) 0%, rgba(0, 0, 0, 0) 100%);`"></div>
        <div
            class="absolute inset-0 pointer-events-none z-1"
            style="background: radial-gradient(circle at top right, #483b2b 0%, rgba(255, 255, 255, 0) 40%)"></div>
    </div>
    <img :src="whiteGlow" alt="White Glow" class="absolute top-60 left-1/2 -translate-x-1/2 w-66 h-10" />
    <div class="absolute top-28 left-[5%] w-[90%] rounded-xl shadow-xl rounded-corners-effect p-0.25 z-10">
        <div
            class="relative w-full h-full bg-gradient-to-bl from-[#483b2b] via-[#211c19] to-[#131313] rounded-xl min-h-20 overflow-hidden">
            <div class="w-full px-4 pt-2 flex flex-col">
                <div class="flex items-center gap-2">
                    <img :src="avt" alt="Avatar" class="w-8 h-8 rounded-full object-cover border-2 border-[#383129]" />
                    <div class="flex flex-col">
                        <span class="block text-sm font-semibold uppercase text-[#d4cbaf]">JACK SPARROW</span>
                        <span class="text-xs text-gray-400">Hạng Titan</span>
                    </div>
                </div>
                <p class="text-[#d4cbaf] font-semibold text-sm my-2">Số dư: 0 VND</p>
            </div>
            <div
                class="w-full flex items-center justify-between bg-linear-to-l from-[#27221f] to-[#1a1819] py-1 text-[#d4cbaf] text-sm">
                <router-link to="/transactions" class="w-full flex items-center justify-center gap-2">
                    <!-- SVG Gửi tiền (Ví tiền) -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        class="text-[#d4cbaf] w-5 h-5"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="currentColor"
                            stroke="none">
                            <path
                                d="M2405 4794 c-100 -11 -263 -48 -357 -80 -552 -192 -945 -644 -1060 -1217 -29 -147 -32 -433 -5 -572 93 -476 360 -860 771 -1105 150 -90 331 -157 531 -197 138 -27 424 -25 571 5 506 101 911 410 1139 870 56 112 116 292 141 422 25 131 25 428 1 555 -66 338 -217 626 -453 860 -228 226 -502 372 -819 435 -98 20 -368 34 -460 24z m251 -669 c51 -39 64 -78 64 -189 l0 -94 104 -4 c113 -3 136 -13 180 -72 29 -39 29 -133 0 -172 -51 -68 -51 -69 -321 -74 -242 -5 -245 -5 -264 -29 -24 -30 -24 -72 0 -102 18 -23 27 -24 163 -29 134 -6 148 -8 210 -37 136 -64 223 -186 235 -331 15 -178 -92 -350 -255 -412 l-47 -18 -5 -110 c-4 -91 -9 -115 -26 -138 -32 -44 -68 -66 -116 -71 -58 -7 -108 15 -144 63 -27 35 -29 45 -32 140 l-4 102 -101 4 c-119 4 -159 21 -195 84 -41 70 -20 155 52 208 25 19 45 21 268 26 l240 5 24 28 c29 34 31 76 5 108 -18 23 -27 24 -163 29 -134 6 -148 8 -210 37 -92 43 -151 100 -196 191 -35 72 -37 81 -37 171 0 87 3 102 32 163 42 90 100 150 186 193 38 19 76 35 83 35 11 0 14 22 14 99 0 107 9 142 43 180 54 58 148 65 213 16z" />
                            <path
                                d="M683 1905 c-170 -46 -304 -181 -348 -350 -22 -85 -22 -783 0 -868 47 -179 198 -323 374 -357 73 -14 3627 -14 3702 0 182 34 344 196 379 379 13 70 13 752 0 822 -25 129 -125 267 -238 327 -98 53 -154 62 -367 62 l-191 0 -91 -89 c-577 -564 -1437 -710 -2158 -367 -203 97 -423 252 -558 395 l-58 61 -197 -1 c-136 0 -213 -5 -249 -14z m3251 -819 c90 -68 86 -190 -8 -260 -27 -21 -32 -21 -1344 -24 -914 -2 -1328 0 -1354 8 -44 13 -95 70 -104 117 -14 73 25 150 91 179 25 11 269 13 1356 11 l1326 -2 37 -29z" />
                        </g>
                    </svg>
                    <span>Lịch sử giao dịch</span>
                </router-link>
                <div class="h-8 border-l-2 border-gray-500"></div>
                <div class="w-full flex items-center justify-center gap-2">
                    <!-- SVG Rút tiền (Túi tiền) -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        class="text-[#d4cbaf] w-5 h-5"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="currentColor"
                            stroke="none">
                            <path
                                d="M1070 4239 c-244 -39 -453 -227 -499 -447 -8 -37 -11 -414 -11 -1250 0 -1324 -2 -1273 65 -1408 58 -119 148 -195 280 -237 l70 -22 1535 0 c1439 0 1539 1 1599 18 151 41 275 128 356 247 96 142 90 74 93 985 2 540 -1 816 -8 851 -37 176 -195 351 -377 416 l-63 23 0 181 c0 149 -4 195 -20 260 -44 171 -168 305 -340 366 l-65 23 -1280 1 c-706 1 -1305 -2 -1335 -7z m2622 -341 c34 -21 53 -41 72 -80 25 -50 26 -59 26 -220 l0 -168 -1302 0 c-849 0 -1325 4 -1367 10 -75 13 -123 36 -169 81 -51 50 -66 86 -67 160 0 56 4 73 30 115 34 55 111 107 179 123 24 5 555 8 1296 8 l1255 -2 47 -27z m-899 -912 c148 -44 255 -105 366 -210 329 -313 357 -823 65 -1181 -62 -76 -178 -167 -277 -217 -236 -118 -524 -119 -763 -3 -304 147 -487 438 -487 775 0 428 290 774 716 856 107 20 271 12 380 -20z" />
                            <path
                                d="M2490 2652 c-23 -11 -43 -33 -57 -62 -22 -42 -23 -57 -23 -249 l0 -205 -72 71 c-82 81 -114 97 -176 88 -80 -12 -134 -94 -117 -177 9 -44 422 -462 473 -479 75 -25 90 -14 320 214 118 117 220 224 228 239 40 76 -11 181 -99 203 -58 15 -97 -3 -178 -82 l-78 -75 -3 213 c-2 180 -6 219 -20 246 -37 67 -126 92 -198 55z" />
                        </g>
                    </svg>
                    <span>Tài khoản & Thẻ</span>
                </div>
            </div>
            <div
                class="w-full flex items-center justify-between bg-linear-to-l from-[#27221f] to-[#1a1819] py-2 px-4 text-[#d4cbaf] text-sm rounded-b-xl">
                <span class="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 text-[#d4cbaf]"
                        viewBox="0 0 16 16"
                        fill="currentColor">
                        <path
                            d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z" />
                        <path
                            d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z" />
                    </svg>
                    Chuyên viên chăm sóc khách hàng
                </span>

                <ChevronRightIcon class="w-4 h-4 text-[#d4cbaf]" />
            </div>
            <img :src="logo2" width="80" height="80" class="absolute top-1 right-2 w-20 h-auto" alt="logo2" />
            <img
                :src="sun"
                alt=""
                class="absolute top-0 right-0 w-30 rotate-90 translate-x-[45%] -translate-y-[50%] opacity-60" />
        </div>
    </div>
    <div class="min-h-20 w-full bg-[#211c16]">
        <div
            class="grid grid-cols-3 gap-1 p-4 pt-16 bg-linear-to-b"
            style="background: linear-gradient(to bottom, #0a0a0a 0%, #211c16 40%, #1a1611 70%, #000 100%)">
            <div v-for="item in items" :key="item.label" class="flex flex-col items-center p-4 cursor-pointer">
                <router-link :to="item.href" class="p-1" style="color: #d4cbaf">
                    <img
                        :src="item.img"
                        alt=""
                        class="w-8 h-8 object-cover"
                        style="
                            filter: brightness(0) saturate(100%) invert(84%) sepia(24%) saturate(243%) hue-rotate(14deg)
                                brightness(93%) contrast(91%);
                        " />
                </router-link>
                <span class="text-[#d4cbaf] text-sm mt-2 text-center">{{ item.label }}</span>
            </div>
        </div>

        <div class="w-full relative">
            <img :src="vin" alt="Vin" class="w-full h-auto object-cover" />
            <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        <router-link
            to="/account/news"
            class="w-full h-12 bg-linear-to-l from-[#241e1e] via-[#353228] to-[#241e1e] flex items-center justify-center text-white font-semibold">
            TIN TỨC
        </router-link>
        <div
            class="w-full h-12 bg-linear-to-l from-[#241e1e] via-[#353228] to-[#241e1e] flex items-center justify-center text-white font-semibold mt-2">
            DANH SÁCH PHÚC LỢI
        </div>
    </div>
    <div class="w-full h-90 overflow-hidden relative bg-linear-to-b from-[#211e19] to-[#0a0a0a] pb-20">
        <ul class="p-5 h-full overflow-hidden" ref="winnerList">
            <li v-for="(winner, index) in winners" :key="index" class="py-3 text-white flex justify-between">
                <div class="flex flex-col">
                    <span class="text-white font-bold">{{ winner.fullname }}</span>
                    <span class="text-gray-400 text-sm font-semibold">Tên người dùng: {{ winner.username.length > 12 ? winner.username.slice(0, 12) + '...' : winner.username }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <span
                        v-for="star in 5"
                        :key="star"
                        class="text-xl"
                        :class="star <= winner.rate ? 'text-yellow-400' : 'text-gray-500'">
                        <StarIcon class="w-5 h-5" />
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { faker } from "@faker-js/faker";

import ame from "@landing/assets/images/logo/ame.jpg";
import logo2 from "@landing/assets/images/logo/logo2.png";
import rong from "@landing/assets/images/rong.png";
import avt from "@landing/assets/images/avt.webp";
import vin from "@landing/assets/images/home/vin.png";
import sun from "@landing/assets/images/sun.png";
import whiteGlow from "@landing/assets/images/whiteGlow.png";

import gift from "@landing/assets/images/ico/gift.svg";
import bag from "@landing/assets/images/ico/bag.svg";
import cup from "@landing/assets/images/ico/cup.svg";
import cart from "@landing/assets/images/ico/cart.svg";
import project from "@landing/assets/images/ico/project.svg";
import invest from "@landing/assets/images/ico/invest.svg";
import spin from "@landing/assets/images/ico/spin.svg";
import { BellIcon, ChevronRightIcon, PowerIcon } from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/24/solid";

const items = [
    {
        label: "Tham vấn phúc lợi",
        href: "/account/welfare",
        img: gift,
    },
    {
        label: "Ưu đãi phúc lợi",
        href: "/account/award",
        img: bag,
    },
    {
        label: "Mục tiêu",
        href: "/account/targets",
        img: cup,
    },
    {
        label: "Sản phẩm",
        href: "/account/product",
        img: cart,
    },
    {
        label: "Dự án",
        href: "/account/project",
        img: project,
    },
    {
        label: "Lý do nên đầu tư",
        href: "/account/invest-reason",
        img: invest,
    },
    {
        label: "Vòng quay may mắn",
        href: "/account/spin",
        img: spin,
    },
];

function getWeightedRate() {
    const weights = [
        { rate: 1, weight: 1 }, // xuất hiện ít
        { rate: 2, weight: 2 },
        { rate: 3, weight: 4 },
        { rate: 4, weight: 6 },
        { rate: 5, weight: 10 }, // xuất hiện nhiều
    ];

    const totalWeight = weights.reduce((acc, item) => acc + item.weight, 0);
    const random = Math.random() * totalWeight;

    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i].weight;
        if (random <= sum) return weights[i].rate;
    }

    return 5; // fallback
}

const winners = ref(
    Array.from({ length: 100 }, (_, i) => ({
        fullname: faker.person.fullName(), // tên ngẫu nhiên
        username: faker.internet.userName(),
        rate: getWeightedRate(),
    }))
);

const winnerList = ref(null);

onMounted(() => {
    let scrollInterval = setInterval(() => {
        if (winnerList.value) {
            winnerList.value.scrollTop += 1;
            if (winnerList.value.scrollTop >= winnerList.value.scrollHeight - winnerList.value.clientHeight) {
                winnerList.value.scrollTop = 0;
            }
        }
    }, 20);

    return () => clearInterval(scrollInterval);
});

const router = useRouter();

const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
};
</script>

<style>
.rotated-image {
    height: 100%;
    left: 60%;
    scale: 2.5;
}
.rounded-corners-effect {
    background: linear-gradient(172deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%);
    background-size: cover;
    background-position: top right;
}
</style>
