<template>
    <div class="fixed left-0 top-0 z-50 w-full">
        <div class="h-11 flex items-center justify-between bg-[#e72732] text-white">
            <div class="flex items-center">
                <button class="cursor-pointer p-3">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        size="24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                    </svg>
                </button>
                <span class="pl-2 text-[14px] leading-[23px]">DỰ ÁN AN SINH - XÃ HỘI</span>
            </div>
            <div class="flex text-center text-[11px] justify-center h-11 items-center relative">
                <div style="font-size: 10px; margin-right: 5px; color: white">
                    <div style="line-height: 44px">{{ selectedDataType }}</div>
                </div>
                <button
                    class="bg-transparent border border-[#ffffff80] rounded-sm flex h-[25px] items-center px-2"
                    @click="toggleMenu">
                    <span class="pr-1">Dữ liệu</span>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        size="15"
                        height="15"
                        width="15"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                    </svg>
                </button>
                <div class="mx-[5px]" @click="toggleRightMenu">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        size="24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div
            v-if="showMenu"
            class="fixed top-[44px] left-0 w-full h-[calc(100vh-44px)] bg-[#0006] z-999"
            @click="toggleMenu">
            <div class="bg-white px-4" @click.stop>
                <div class="flex justify-center py-4">
                    <div
                        class="w-full h-8 flex items-center justify-center text-sm cursor-pointer rounded-s-4xl"
                        :class="
                            selectedDataType === 'Chính thức'
                                ? 'bg-[#e72732] text-white'
                                : 'border border-[#e72732] text-[#e72732]'
                        "
                        @click="selectDataType('Chính thức')">
                        Chính Thức
                    </div>
                    <div
                        class="w-full h-8 flex items-center justify-center text-sm cursor-pointer rounded-e-4xl"
                        :class="
                            selectedDataType === 'Cổ điển'
                                ? 'bg-[#e72732] text-white'
                                : 'border border-[#e72732] text-[#e72732]'
                        "
                        @click="selectDataType('Cổ điển')">
                        Cổ điển
                    </div>
                </div>
                <div v-if="selectedDataType === 'Chính thức'" class="max-h-[calc(100vh-108px)] overflow-y-auto">
                    <ul class="flex flex-wrap">
                        <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
                            <button
                                class="menu-button"
                                :class="{ 'border !border-red-500': selectedMenu === item }"
                                @click="selectMenu(item)">
                                {{ item.name }}
                            </button>
                        </li>
                    </ul>
                    <!-- label -->
                    <!-- Hiển thị label -->
                    <div v-if="selectedMenu">
                        <!-- <h3 class="submenu-title">{{ selectedMenu.label }}</h3> -->
                        <div
                            style="
                                border-top: 1px solid #e1e1e1;
                                text-align: center;
                                position: relative;
                                padding-bottom: 10px;
                                margin-top: 10px;
                            ">
                            <span
                                style="
                                    background: #fff;
                                    color: #333;
                                    padding: 0 10px;
                                    display: inline-block;
                                    line-height: 1;
                                    position: absolute;
                                    top: -8px;
                                    left: 50%;
                                    margin-left: -38px;
                                "
                                >{{ selectedMenu.label }}</span
                            >
                        </div>
                        <ul class="flex flex-wrap mt-2.5">
                            <li v-for="(subItem, subIndex) in selectedMenu.submenu" :key="subIndex" class="menu-item">
                                <button
                                    class="menu-button"
                                    :class="{ 'border !border-red-500': selectedSubmenu === subItem }"
                                    @click="selectSubmenu(subItem)">
                                    {{ subItem }}
                                </button>
                            </li>
                        </ul>

                        <div
                            style="
                                border-top: 1px solid #e1e1e1;
                                text-align: center;
                                position: relative;
                                padding-bottom: 10px;
                                margin-top: 10px;
                            ">
                            <span
                                style="
                                    background: #fff;
                                    color: #333;
                                    padding: 0 10px;
                                    display: inline-block;
                                    line-height: 1;
                                    position: absolute;
                                    top: -8px;
                                    left: 50%;
                                    margin-left: -38px;
                                "
                                >{{ selectedMenu.label2 }}</span
                            >
                        </div>
                        <ul v-if="selectedMenu.label2" class="flex flex-wrap mt-2.5">
                            <li
                                v-for="(subItem2, subIndex2) in selectedMenu.submenu2 || []"
                                :key="subIndex2"
                                class="menu-item">
                                <button
                                    class="menu-button"
                                    :class="{ 'border !border-red-500': selectedSubmenu === subItem2 }"
                                    @click="selectSubmenu(subItem2)">
                                    {{ subItem2 }}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="fixed top-0 left-0 w-full h-screen bg-[#0006] z-999" @click="toggleRightMenu" v-if="showRightMenu">
            <div
                class="bg-white fixed top-[22px] right-[15px] text-center text-black rounded-[5px] border border-[#c1c1c1] z-9999">
                <div
                    v-for="(item, index) in rightMenuItems"
                    :key="index"
                    class="px-[15px] leading-[35px] text-xs w-[40vw] text-left"
                    @click="toggleRightMenu">
                    {{ item.name }}
                </div>
            </div>
        </div>

        <div class="flex items-center justify-between h-[62px] px-4">
            <div class="flex items-center">
                <div
                    @click="setActiveTab('safe')"
                    class="mx-1.5 px-2 text-center flex flex-col justify-center items-center"
                    :class="activeTab === 'safe' ? 'text-[#e72732] border-b-2 border-[#e72732]' : 'text-[#919191]'">
                    <img :src="safe" alt="" class="pt-1 w-[25px]" />
                    <div class="text-xs leading-[28px]">Dự án</div>
                </div>
                <div
                    @click="setActiveTab('history')"
                    class="mx-1.5 px-2 text-center flex flex-col justify-center items-center"
                    :class="activeTab === 'history' ? 'text-[#e72732] border-b-2 border-[#e72732]' : 'text-[#919191]'">
                    <img :src="history" alt="" class="pt-1 w-[20px]" />
                    <div class="text-xs leading-[28px]">Lịch sử</div>
                </div>
            </div>

            <!-- Nút hiển thị quỹ -->
            <div
                class="inline-block text-[12px] text-[#919191] cursor-pointer hover:text-[#e72732] transition"
                @click="toggleFund">
                {{ showFund ? "₫0.00" : "Hiển thị quỹ" }}
            </div>
        </div>
        <div
            class="flex justify-between items-start bg-white w-full"
            style="border-bottom: 1.5px solid rgb(244, 244, 244)">
            <div class="w-1/2" style="padding: 0px">
                <div class="border-r border-[#dfdfdf] text-[#919191] h-[50px] text-center my-[5px]">
                    <div style="font-size: 13px; line-height: 1.5; font-weight: 300; margin-bottom: 2px">Mã số 161</div>
                    <div
                        style="font-size: 22px; line-height: 1.3; color: rgb(244, 67, 54)"
                        class="flex w-full justify-center items-center">
                        <span>{{ formatTime(timeLeft) }}</span
                        ><span style="font-size: 22px; position: relative; top: -2px; margin-left: 5px; color: grey"
                            ><img
                                :src="isMuted ? speakerMute : speakerOpen"
                                alt=""
                                @click="toggleSpeaker"
                                class="cursor-pointer"
                        /></span>
                    </div>
                </div>
            </div>
            <div class="w-1/2" style="padding: 0px">
                <div class="border-r border-[#dfdfdf] text-[#919191] h-[50px] text-center my-[5px]">
                    <div
                        @click="toggleResult"
                        style="
                            font-size: 13px;
                            color: rgb(145, 145, 145);
                            line-height: 1.5;
                            font-weight: 300;
                            margin-bottom: 2px;
                            padding-top: 5px;
                            white-space: nowrap;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: #919191;
                        ">
                        Kết quả mã số 161<svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="rotate0"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                        </svg>
                    </div>
                    <div class="flex justify-center items-center gap-1">
                        <b v-for="num in ['7', '0', '3', '8', '1']" :key="num" class="font-normal">
                            <div
                                class="w-[21px] h-[21px] rounded-full text-[14px] leading-[21px] bg-[#e72732] flex items-center justify-center text-white">
                                {{ num }}
                            </div>
                        </b>
                    </div>
                </div>
            </div>
        </div>

        <template v-if="!showResult">
            <Game1 v-if="activeTab === 'safe' && selectedDataType === 'Cổ điển'"></Game1>
            <Game2
                v-if="activeTab === 'safe' && selectedDataType === 'Chính thức'"
                :selectedMenu="selectedMenu"
                :selectedSubmenu="selectedSubmenu">
            </Game2>
            <History v-if="activeTab === 'history'"></History>
        </template>
        <Result v-if="showResult" />
        <div v-if="showModal" class="absolute top-0 left-0 w-[100vw] h-screen bg-[#0006] z-999 flex items-center justify-center">
            <NotifiModal @close="showModal = false" />
        </div>
    </div>
</template>

<script setup>
import Game1 from "./Game1.vue";
import Game2 from "./Game2.vue";
import History from "./History.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

import safe from "@/assets/images/game/safe.png";
import history from "@/assets/images/game/history.png";
import NotifiModal from "./NotifiModal.vue";

const activeTab = ref("safe");
const showFund = ref(false);
const showMenu = ref(false);
const showRightMenu = ref(false);
const selectedDataType = ref("Cổ điển");

import speakerOpen from "@/assets/images/game/speaker-open.png";
import speakerMute from "@/assets/images/game/speaker-mute.png";
import Result from "./Result.vue";

const selectedMenu = ref(null);
const selectedSubmenu = ref(null);
const timeLeft = ref(10);
let timer = null;

const showModal = ref(false);

const showResult = ref(false);

const menuItems = ref([
    {
        name: "Vị trí",
        label: "Vị trí",
        submenu: ["Vị trí"],
    },
    {
        name: "TXCL",
        label: "TXCL",
        submenu: ["TXCL 2 cuối", "TXCL 2 đầu"],
    },
    {
        name: "Vui",
        label: "Đặc biệt",
        submenu: ["1 số cụ thể", "2 số cụ thể", "3 số cụ thể", "4 số cụ thể"],
    },
    {
        name: "2 Số",
        label: "Combo 2 sao",
        submenu: ["Combo 2 cuối", "Combo 2 đầu", "Combo 2 cuối_tổng", "Combo 2 đầu_tổng"],
        label2: "Nhóm 2 sao",
        submenu2: ["Nhóm 2 cuối", "Nhóm 2 đầu", "Nhóm 2 cuối_tổng", "Nhóm 2 đầu_tổng"],
    },
    {
        name: "3 Đầu",
        label: "Combo 3 đầu",
        submenu: ["Combo 3 đầu", "Combo 3 đầu_tổng của 3"],
        label2: "Nhóm 3 đầu",
        submenu2: ["Nhóm 3 đầu_Nhóm 3", "Nhóm 3 đầu_Nhóm 6", "Nhóm 3 đầu_tổng"],
    },
    {
        name: "3 Giữa",
        label: "Combo 3 giữa",
        submenu: ["Combo 3 giữa", "Combo 3 giữa_tổng của 3"],
        label2: "Nhóm 3 giữa",
        submenu2: ["Nhóm 3 giữa_Nhóm 3", "Nhóm 3 giữa_Nhóm 6", "Nhóm 3 giữa_tổng"],
    },
    {
        name: "3 Cuối",
        label: "Combo 3 cuối",
        submenu: ["Combo 3 cuối", "Combo 3 cuối_tổng của 3"],
        label2: "Nhóm 3 cuối",
        submenu2: ["Nhóm 3 cuối_Nhóm 3", "Nhóm 3 cuối_Nhóm 6", "Nhóm 3 cuối_tổng"],
    },
    {
        name: "4 Sao",
        label: "Combo 4 sao",
        submenu: ["Combo 4 sao", "Sự phối hợp của 4 sao"],
        label2: "Nhóm 4 sao",
        submenu2: ["4 sao nhóm 24", "4 sao nhóm 12", "4 sao nhóm 6", "4 sao nhóm 4"],
    },
    {
        name: "5 Sao",
        label: "Combo 5 sao",
        submenu: ["Combo 5 sao", "Sự phối hợp của 5 sao"],
        label2: "Nhóm 5 sao",
        submenu2: [
            "5 sao nhóm 120",
            "5 sao nhóm 60",
            "5 sao nhóm 30",
            "5 sao nhóm 20",
            "5 sao nhóm 10",
            "5 sao nhóm 5",
        ],
    },
    {
        name: "Bất cứ",
        label: "3 sao ngẫu nhiên",
        submenu: ["1 trên 3 cuối", "2 trên 3 cuối", "1 trên 3 đầu", "2 trên 3 đầu"],
    },
    {
        name: "2 Bất kỳ",
        label: "2 vị trí",
        submenu: ["Combo tổng"],
        label2: "Bất kỳ 2 vị trí",
        submenu2: ["Nhóm trộn", "Nhóm tổng"],
        hasVT: true,
    },
    {
        name: "3 Bất kỳ",
        label: "3 vị trí",
        submenu: ["Combo tổng"],
        label2: "Bất kỳ 3 vị trí",
        submenu2: ["Nhóm tổng"],
        hasVT: true,
    },
    {
        name: "4 Bất kỳ",
        label: "4 vị trí",
        submenu: ["Nhóm 24", "Nhóm 12", "Nhóm 6", "Nhóm 4"],
        hasVT: true,
    },
]);

const rightMenuItems = [
    {
        name: "Luật chơi",
        href: "#",
    },
    {
        name: "Mô tả giải thưởng",
        href: "#",
    },
    {
        name: "Kết quả trò chơi",
        href: "#",
    },
    {
        name: "Xu hướng",
        href: "#",
    },
    {
        name: "Rồng",
        href: "#",
    },
    {
        name: "Cài đặt",
        href: "#",
    },
    {
        name: "Cài đặt ngôn ngữ",
        href: "#",
    },
    {
        name: "Xóa bộ nhớ cache",
        href: "#",
    },
    {
        name: "Làm mới",
        href: "#",
    },
];

const selectMenu = (item) => {
    if (selectedMenu.value === item) {
        selectedMenu.value = null;
        selectedSubmenu.value = null;
    } else {
        selectedMenu.value = item;
        selectedSubmenu.value = item.submenu?.[0] || null;
    }
};

const selectSubmenu = (submenu) => {
    selectedSubmenu.value = submenu;
};

const setActiveTab = (tab) => {
    activeTab.value = tab;
};

const toggleFund = () => {
    showFund.value = !showFund.value;
};

// Toggle menu Dữ liệu
const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};

const toggleRightMenu = () => {
    showRightMenu.value = !showRightMenu.value;
};

const toggleSpeaker = () => {
    isMuted.value = !isMuted.value;
};

// Chọn loại dữ liệu
const selectDataType = (type) => {
    selectedDataType.value = type;
    showMenu.value = false; // Ẩn menu sau khi chọn
    if (type === "Chính thức") {
        // Tự động chọn "Vị trí"
        selectedMenu.value = menuItems.value.find((item) => item.name === "Vị trí") || null;
        selectedSubmenu.value = selectedMenu.value?.submenu?.[0] || null;
    } else {
        // Đặt lại nếu chọn "Cổ điển"
        selectedMenu.value = null;
        selectedSubmenu.value = null;
    }
};

const formatTime = (seconds) => {
    const hour = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const startTimer = () => {
    if (timer) clearInterval(timer);
    timeLeft.value = 10;
    timer = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value--;
        } else {
            clearInterval(timer);
            showModal.value = true;
            setTimeout(startTimer, 2000);
        }
    }, 1000);
};

onMounted(() => {
    startTimer();
});

onBeforeUnmount(() => {
    clearInterval(timer);
});

const toggleResult = () => {
    showResult.value = !showResult.value;
};
</script>

<style scoped>
.menu-item {
    line-height: 1.5;
    margin-bottom: 10px;
    color: #212121;
    font-size: 13px;
    display: flex;
    width: calc(33.33333% - 5px);
    float: left;
    text-align: center;
    margin-left: 2.5px;
    margin-right: 2.5px;
}

.menu-button {
    background: #fff;
    border-radius: 4px;
    min-height: 30px;
    line-height: 20px;
    display: block;
    margin: 0 10px 10px 0;
    text-align: center;
    font-size: 13px;
    border: 1px solid #e1e1e1;
    color: #666;
    width: 90%;
}

.submenu {
    margin-top: 10px;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.submenu-item {
    font-size: 12px;
    color: #666;
    padding: 5px 10px;
    background: #f5f5f5;
    border-radius: 4px;
    border: 1px solid #e1e1e1;
    text-align: center;
    min-width: 80px;
}
</style>
