<template>
    <div class="bg-white max-w-100 mx-auto h-screen">
        <div class="p-2.5">
            <img :src="SettingIcon" alt="ico" class="w-5 h-5" @click="navigateTo('/setting')" />
        </div>
        <div class="w-full flex items-center justify-center">
            <div class="flex px-5 py-2.5">
                <img :src="Avatar" alt="avt" class="w-[75px] h-[75px] rounded-full" />
                <div class="flex flex-col ml-[15px] justify-center">
                    <span style="color: #333">{{ user?.username || "Guest" }}</span>
                    <span style="color: #007187 !important; font-size: 13px; margin-top: 3px"
                        >ID: <span style="color: #007187 !important"> 235514</span></span
                    >
                    <span style="color: #333; font-size: 16px; margin-top: 6px">VIP <span> 0</span></span>
                </div>
            </div>
        </div>
        <div class="p-[15px] pt-0">
            <div
                style="
                    padding: 13px;
                    border-radius: 6px;
                    /* margin: 13px; */
                    height: 80px;
                    background: linear-gradient(258deg, #3d3d3d, #060606);
                    color: #fff;
                ">
                <div
                    style="
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        align-items: center;
                        flex: 1;
                    ">
                    <span style="font-size: 12px; color: #fff !important">Tích điểm</span>

                    <span style="font-size: 20px; display: flex; align-items: center; color: #fff !important"
                        ><img :src="Coin" style="width: 19px; height: 19px; margin-right: 4px" draggable="false" />
                        0
                    </span>
                </div>
                <div
                    style="
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        align-items: center;
                        flex: 1;
                    ">
                    <!-- <span style="font-size:12px;color:#ccc">Đặt cược ngày hôm nay</span> -->
                    <!-- <span style="font-size:20px">0</span> -->
                </div>
                <div
                    style="
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        align-items: center;
                        flex: 1;
                    ">
                    <!-- <span style="font-size:12px;color:#ccc">Lãi lỗ ngày hôm nay</span> -->
                    <!-- <span style="font-size:20px">0</span> -->
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-content: center; margin-top: 15px">
                <a
                    href="/deposit"
                    class="bg-gradient-to-b from-[#13a2ba] to-[#087c95] flex-1 rounded-[10px] min-h-11 text-white text-lg font-semibold flex items-center justify-center mr-1.5"
                    >Nạp tiền</a
                >
                <a
                    href="https://tikseen.net/withdraw"
                    class="bg-gradient-to-r from-[#efdaaf] to-[#dbb579] flex-1 rounded-[10px] min-h-11 text-white text-lg font-semibold flex items-center justify-center ml-1.5"
                    >Rút tiền</a
                >
            </div>
            <div class="mt-5">
                <div class="flex flex-col pb-[0.26667rem]">
                    <div
                        v-for="item in items"
                        :key="item.title"
                        class="h-[47px] px-[26px] rounded-md bg-[#f7f7f7] my-[5px] flex justify-between items-center text-[16px]"
                        @click="navigateTo(item.route || '')">
                        <div class="flex justify-start items-center">
                            <span class="text-[#333]">{{ item.title }}</span>
                        </div>
                        <ChevronRightIcon class="w-4 h-4 ml-4 text-[#73747b]"  :style="{ strokeWidth: '2.5' }" :stroke-width="2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

import { ChevronRightIcon } from "@heroicons/vue/24/outline";

import SettingIcon from "~/assets/icons/setting.svg";
import Avatar from "~/assets/imgs/avt.png";
import Coin from "~/assets/icons/coin.png";

const user = JSON.parse(localStorage.getItem("user") || "{}");
console.log(user.username);

const items = [
    { title: "Cá nhân", route: "/setting" },
    { title: "Lịch sử giao dịch", route: "/history" },
    { title: "Lịch sử nạp tiền", route: "/historywithdrawal?type=1" },
    { title: "Lịch sử rút tiền", route: "/historywithdrawal?type=2" },
    { title: "Lịch sử đặt hàng", route: "/historyplay" },
    { title: "Nhóm chat", route: "/groupchat" },
    { title: "Chăm sóc khách hàng", route: "/groupcskh" },
    { title: "Đăng xuất", route: "/logout" },
];

const navigateTo = (path) => {
    if (path === "/logout") {
        handleLogout();
    } else {
        router.push(path);
    }
};

const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
};
</script>

<style></style>
