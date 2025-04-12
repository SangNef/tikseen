<template>
    <nav class="flex absolute w-full justify-between items-center p-4 z-999">
        <div class="flex items-center gap-2">
            <img :src="logo" alt="Logo" class="w-16 h-auto object-cover" />
        </div>
        <div class="flex items-center gap-4">
            <BellIcon class="w-6 h-6 text-white hover:text-gray-700 cursor-pointer" @click="$emit('notification')" />
            <PowerIcon class="w-6 h-6 text-white hover:text-gray-700 cursor-pointer" @click="handleLogout" />
        </div>
    </nav>
    <div
        class="h-55 relative w-full flex items-center justify-center overflow-hidden"
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
    </div>
    <div class="absolute top-30 left-[5%] w-[90%] rounded-xl shadow-xl rounded-corners-effect p-0.25">
        <div class="relative w-full h-full bg-linear-to-l from-[#353228] to-[#241e1e] rounded-xl min-h-20">
            <div class="w-full px-4 pt-2 flex flex-col">
                <div class="flex items-center gap-2">
                    <img :src="avt" alt="Avatar" class="w-8 h-8 rounded-full object-cover border-2 border-[#383129]" />
                    <div class="flex flex-col">
                        <span class="text-white block text-sm font-semibold uppercase">JACK SPARROW</span>
                        <span class="text-xs text-gray-400">Hạng Titan</span>
                    </div>
                </div>
                <p class="text-white font-semibold text-sm my-2">Số dư: 0 VND</p>
            </div>
            <div
                class="w-full flex items-center justify-between bg-linear-to-l from-[#27221f] to-[#1a1819] py-1 text-white text-sm rounded-b-xl">
                <router-link to="/$/transactions" class="w-full flex items-center justify-center gap-2">
                    <!-- SVG Gửi tiền (Ví tiền) -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        class="text-white w-5 h-5"
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
                        class="text-white w-5 h-5"
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
            <img :src="logo2" width="80" height="80" class="absolute top-0 right-2 w-20 h-auto" alt="logo2" />
        </div>
    </div>
    <div class="min-h-20 w-full bg-linear-to-b from-[#0a0a0a] via-[#211c16] to-[#0a0a0a]">
        <div class="grid grid-cols-2 gap-1 p-4 pt-16">
            <div v-for="item in items" :key="item.label" class="flex flex-col items-center p-4 cursor-pointer">
                <router-link :to="item.href" class="p-1">
                    <component
                        :is="item.icon"
                        class="w-8 h-8 text-[#d4cbaf] cursor-pointer"
                        @click="$emit('navigate', item.href)" />
                </router-link>
                <span class="text-[#d4cbaf] text-sm mt-2">{{ item.label }}</span>
            </div>
        </div>
        <router-link to="/$/account/news"
            class="w-full h-12 bg-linear-to-l from-[#241e1e] via-[#353228] to-[#241e1e] flex items-center justify-center text-white font-semibold">
            TIN TỨC
        </router-link>
        <div
            class="w-full h-12 bg-linear-to-l from-[#241e1e] via-[#353228] to-[#241e1e] flex items-center justify-center text-white font-semibold mt-2">
            DANH SÁCH PHÚC LỢI
        </div>
    </div>
    <div class="w-full h-70 overflow-hidden relative bg-linear-to-b from-[#211e19] to-[#0a0a0a]">
        <ul class="p-5 h-full overflow-hidden" ref="winnerList">
            <li v-for="(winner, index) in winners" :key="index" class="py-3 text-white flex justify-between">
                <div class="flex flex-col">
                    <span class="text-white font-bold">{{ winner.fullname }}</span>
                    <span class="text-gray-400 text-sm font-semibold">Tên người dùng: {{ winner.username }}</span>
                </div>
                <span class="text-white font-bold"><span class="text-red-500">+ {{ winner.reward }}</span> VND</span>
            </li>
        </ul>
    </div>
    <div class="w-full relative">
        <img :src="vin" alt="Vin" class="w-full h-auto object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
    PowerIcon,
    BellIcon,
    GiftIcon,
    BriefcaseIcon,
    TrophyIcon,
    ShoppingCartIcon,
    BuildingOfficeIcon,
    ChartBarIcon,
} from "@heroicons/vue/24/outline";
import logo from "@landing/assets/images/logoClub.png";
import logo2 from "@landing/assets/images/logo2.png";
import rong from "@landing/assets/images/rong.png";
import avt from "@landing/assets/images/avt.webp";
import vin from "@landing/assets/images/home/vin.png";

const items = [
    {
        label: "Tham vấn phúc lợi",
        href: "/$/account/welfare",
        icon: GiftIcon,
    },
    {
        label: "Ưu đãi phúc lợi",
        href: "/$/account/award",
        icon: BriefcaseIcon,
    },
    {
        label: "Mục tiêu",
        href: "/$/account/targets",
        icon: TrophyIcon,
    },
    {
        label: "Sản phẩm",
        href: "/$/account/product",
        icon: ShoppingCartIcon,
    },
    {
        label: "Dự án",
        href: "/$/account/project",
        icon: BuildingOfficeIcon,
    },
    {
        label: "Lý do nên đầu tư",
        href: "/$/account/invest-reason",
        icon: ChartBarIcon,
    },
];

function formatCurrency(amount) {
    return amount.toLocaleString("vi-VN"); // Thêm dấu chấm ngăn cách theo chuẩn VN
}

const winners = ref(
    Array.from({ length: 100 }, (_, i) => ({
        fullname: `Winner ${i + 1}`,
        username: `user${i + 1}`,
        reward: formatCurrency(Math.floor(Math.random() * 100000000)),
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
    router.push("/$/login");
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
