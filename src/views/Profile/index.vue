<template>
    <div>
        <div class="bg-[#e72732] min-h-11 flex items-center justify-center border-b border-[#fff]">
            <p class="p text-white" style="margin-bottom: 0px; font-size: 15px">Trung Tâm Người Dùng</p>
        </div>
        <div
            class="h-[calc(100vh-env(safe-area-inset-bottom)-92px)]"
            :style="{
                backgroundImage: `url(${bgRed})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }">
            <div class="h-[110px] relative pt-[26px]">
                <div class="absolute left-[35%] translate-x-[-30%]">
                    <div class="flex">
                        <div class="flex flex-col justify-center">
                            <img
                                :src="userDefault"
                                alt=""
                                class="rounded-full w-15 h-15 align-middle border-2 border-[#fff3]" />
                            <i
                                class="-ml-[10px] mr-[10px] w-[75px] h-[18px] relative"
                                :style="{
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPositionX: 'center',
                                    backgroundPositionY: '0px',
                                }"></i>
                        </div>
                        <div class="pt-[10px] pl-[10px] flex flex-col text-white">
                            <div class="text-[16px] font-medium float-left">mrl9999</div>
                            <div class="mt-[5px] w-[65vw] opacity-60 text-xs">
                                <span>Lần đăng nhập cuối:23-03-2025 19:52:43</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-[30px] text-white rounded-[5px] px-[15px] py-[5px] bg-[#ffffff1a] mt-3">
                <span style="font-size: 12px; opacity: 0.7">Tổng quỹ</span>
                <br />
                <span style="font-size: 18px" class="flex">
                    <img :src="balance" alt="" class="w-5 h-5" />&nbsp;₫&nbsp;0
                </span>
            </div>
            <div class="text-white" style="display: flex; margin: 10px 20px; font-size: 12px">
                <div class="w-full rounded-[5px] p-[10px] bg-[#ffffff1a] text-center" style="margin: 0px 10px">
                    <router-link class="flex flex-col items-center">
                        <img :src="dep" alt="" class="w-[22px]" />
                        <span>Ký quỹ</span>
                    </router-link>
                </div>
                <div class="w-full rounded-[5px] p-[10px] bg-[#ffffff1a] text-center" style="margin: 0px 10px">
                    <router-link class="flex flex-col items-center">
                        <img :src="cashout" alt="" class="w-[22px]" />
                        <span>Rút quỹ</span>
                    </router-link>
                </div>
            </div>
            <div class="" style="padding: 10px; margin: 10px 0px 30px">
                <div class="bg-white p-[10px]" style="border-radius: 10px 10px 0px 0px; margin-bottom: -1px">
                    <p class="p-[10px] text-xs text-center">Thành viên</p>
                    <div class="bg-[#178bff] w-1/5 h-[3px] mx-auto"></div>
                </div>
                <div
                    class=""
                    style="
                        overflow-x: hidden;
                        border-radius: 0px 0px 10px 10px;
                        margin-bottom: calc(0px + env(safe-area-inset-bottom));
                    ">
                    <div
                        class=""
                        style="
                            height: 1018px;
                            flex-direction: row;
                            transition: all;
                            transform: translate(0%, 0px);
                            direction: ltr;
                            display: flex;
                            will-change: transform;
                        ">
                        <div
                            class="w-full"
                            style="
                                background-color: white;
                                color: black;
                                overflow-x: hidden;
                                border-radius: 0px 0px 10px 10px;
                            ">
                            <div v-for="(category, index) in menuCategories" :key="index">
                                <button
                                    class="m-[5%] w-[90%] flex justify-between items-center"
                                    @click="toggleCategory(category.id)">
                                    <span class="text-sm font-bold">{{ category.label }}</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        class="dropdownArrow transition-transform duration-300"
                                        :class="{ 'rotate-180': openCategories[category.id] }"
                                        size="20"
                                        height="20"
                                        width="20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M12 8l6 6H6z"></path>
                                        </g>
                                    </svg>
                                </button>
                                <div v-if="openCategories[category.id]" class="ml-6 transition-all duration-300">
                                    <router-link
                                        v-for="item in groupedMenuItems[category.id]"
                                        :key="item.href"
                                        :to="item.href"
                                        class="flex items-center p-2 text-sm">
                                        <img :src="item.icon" alt="" width="25" />
                                        <span style="font-size: 14px; margin-left: 15px">{{ item.label }}</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import bgRed from "@client/assets/images/bg/bg-red.png";
import userDefault from "@client/assets/images/profile/user-default.jpg";
// import rich from "@client/assets/images/profile/rich.png";
import balance from "@client/assets/images/profile/balance.png";
import dep from "@client/assets/images/profile/icon_dep.png";
import cashout from "@client/assets/images/profile/icon_cashout.png";

import withDraw from "@client/assets/images/profile/withdraw.png";
import myFund from "@client/assets/images/profile/myfunds.png";
import record from "@client/assets/images/profile/record.png";
import report from "@client/assets/images/profile/report.png";
import myAcc from "@client/assets/images/profile/myacc.png";
import password from "@client/assets/images/profile/password.png";
import vip from "@client/assets/images/profile/vip.png";
import verified from "@client/assets/images/profile/verified.png";
import music from "@client/assets/images/profile/music.png";
import theme from "@client/assets/images/profile/theme.png";
import chipSettings from "@client/assets/images/profile/chipsettings.png";
import noti from "@client/assets/images/profile/noti.png";
import language from "@client/assets/images/profile/language.png";
import msg from "@client/assets/images/profile/msg.png";
import qna from "@client/assets/images/profile/qna.png";
import aboutus from "@client/assets/images/profile/aboutus.png";
import signout from "@client/assets/images/profile/signout.png";

const menuCategories = [
    { id: 1, label: "Quản lý cá nhân" },
    { id: 2, label: "Quản lý Dự Án" },
    { id: 3, label: "Quản lý Tài Khoản" },
    { id: 4, label: "Cài Đặt Hệ Thống" },
    { id: 5, label: "Quản Lý Chung" },
];

const menuItems = [
    {
        label: "Chi Tiết Ngân Hàng",
        icon: withDraw,
        href: "/my-bank",
        category: 1,
    },
    {
        label: "Lịch Sử Thao Tác",
        icon: myFund,
        href: "/transaction-record-page",
        category: 1,
    },
    {
        label: "Lịch Sử Dữ Liệu",
        icon: record,
        href: "/betting-record-page",
        category: 2,
    },
    {
        label: "Báo Cáo Cá Nhân",
        icon: report,
        href: "/personal-report-page",
        category: 2,
    },
    {
        label: "Tài Khoản Của Tôi",
        icon: myAcc,
        href: "/my-account-info",
        category: 3,
    },
    {
        label: "Quản Lý Mật Khẩu",
        icon: password,
        href: "/my-account-info-password",
        category: 3,
    },
    {
        label: "Cấp Độ Của Tôi",
        icon: vip,
        href: "/my-account-info-level",
        category: 3,
    },
    {
        label: "Xác Thực Hai Yếu Tố",
        icon: verified,
        href: "/my-account-info-verify",
        category: 3,
    },
    {
        label: "Nhạc Nền",
        icon: music,
        href: "/custom-music",
        category: 4,
    },
    {
        label: "Màu Chủ Đề",
        icon: theme,
        href: "/custom-theme",
        category: 4,
    },
    {
        label: "Cài Đặt Chip",
        icon: chipSettings,
        href: "/custom-bet-values",
        category: 4,
    },
    {
        label: "Cửa Sổ Nhắc Nhở Cá Lệnh",
        icon: noti,
        href: "/custom-notifications",
        category: 4,
    },
    {
        label: "Cài Đặt Ngôn Ngữ",
        icon: language,
        href: "/custom-language",
        category: 4,
    },
    {
        label: "Trung Tâm Tin Nhắn",
        icon: msg,
        href: "/message-center",
        category: 5,
    },
    {
        label: "Dịch Vụ Trả Lời Khách Hàng",
        icon: qna,
        href: "/customer-service",
        category: 5,
    },
    {
        label: "Về Chúng Tôi",
        icon: aboutus,
        href: "/about-us",
        category: 5,
    },
    {
        label: "Đăng Xuất Khỏi Tài Khoản Hiện tại",
        icon: signout,
        href: "/logout",
        category: 5,
    },
];

const groupedMenuItems = computed(() => {
    return menuItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});
});

const openCategories = ref({});

onMounted(() => {
    menuCategories.forEach((category) => {
        openCategories.value[category.id] = true;
    });
});

const toggleCategory = (categoryId) => {
    openCategories.value[categoryId] = !openCategories.value[categoryId];
};
</script>

<style></style>
