<template>
    <div class="bg-white max-w-100 w-full mx-auto h-screen relative font-helvetica">
        <div class="h-[50px] absolute top-0 left-0 w-full flex justify-between items-center">
            <div class="w-[51px] h-[51px] flex items-center justify-center">
                <ChevronLeftIcon class="w-7 h-7 text-[#333] cursor-pointer" @click="router.back()" />
            </div>
            <div class="text-[20px] [line-height: 30px] text-[#333]">Cài đặt</div>
            <div class="w-5"></div>
        </div>
        <div class="pt-[50px]">
            <div class="mx-[15px] my-[10px] p-[15px] flex flex-col">
                <div
                    v-for="item in items"
                    :key="item.title"
                    class="flex-1 flex items-center justify-between border-b border-[#9797970d] py-[15px] px-2 bg-[#f7f7f7] rounded-md my-[5px]"
                    @click="navigateTo(item.route)">
                    <span class="text-[#333]">{{ item.title }}</span>
                    <ChevronRightIcon
                        class="w-4 h-4 ml-4 text-[#333]"
                        :style="{ strokeWidth: '2.5' }"
                        :stroke-width="2" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";

const router = useRouter();

const items = [
    { title: "Mật khẩu đăng nhập", route: "/changepassword" },
    { title: "Đổi tên biệt danh", route: "/changename" },
    { title: "Số điện thoại", route: "/changephone" },
    { title: "Hộp thư bảo mật", route: "/changeemail" },
    { title: "Quản lý thẻ ngân hàng", route: "changebank" },
];

const navigateTo = (route) => {
    router.push(route);
};
</script>

<style></style>
