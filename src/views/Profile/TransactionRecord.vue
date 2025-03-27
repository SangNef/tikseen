<template>
    <div>
        <!-- Navbar -->
        <nav class="h-11 bg-[#e72732] flex justify-between p-3 items-center">
            <div class="flex items-center gap-4">
                <button type="button" class="text-white" style="outline: none; border: 0px" @click="goBack">
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
                <p class="p text-white" style="margin-bottom: 0px; font-size: 14px">Chi Tiết Ngân Hàng</p>
            </div>
            <img :src="logo" alt="logo" width="30px" />
        </nav>

        <!-- Menu -->
        <div class="navbar-container">
            <ul>
                <li
                    v-for="(item, index) in menuItems"
                    :key="index"
                    :class="['nav-link', activeIndex === index ? 'active-link' : '']"
                    @click="setActive(index)">
                    <a class="nav-button">{{ item }}</a>
                    <div class="underline"></div>
                </li>
            </ul>
        </div>
        <button
            type="button"
            class="transaction-record-refresh theme-background-color btn btn-secondary"
            style="border-color: white">
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                size="24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                style="color: rgb(255, 255, 255)">
                <path
                    d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import logo from "@client/assets/images/header/logo.png";

const router = useRouter();
const activeIndex = ref(0); // Mặc định chọn mục đầu tiên

const menuItems = ["Ký quỹ", "Rút quỹ", "Dòng tiền"];

const goBack = () => {
    router.go(-1);
};

const setActive = (index) => {
    activeIndex.value = index;
};
</script>

<style scoped>
.transaction-record-refresh {
    border-radius: 100px;
    width: 2.5rem;
    height: 2.5rem;
    position: fixed;
    bottom: 45px;
    right: 33px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
