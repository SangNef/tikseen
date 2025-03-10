<template>
    <div
        class="fixed bottom-0 left-[50%] transform translate-x-[-50%] w-full bg-white flex items-end h-[70px] [padding-block-start:0] [padding-block-end:0.13333rem] text-sm z-100 max-w-100 mx-auto font-helvetica">
        <div
            v-for="tab in tabs"
            :key="tab.name"
            class="flex flex-1 flex-col items-center cursor-pointer gap-[0.11707rem]"
            @click="navigateTo(tab.route)">
            <img :src="currentRoute === tab.route ? tab.iconActive : tab.icon" class="w-7 h-7" />
            <span class="text-[11px] [line-height:16.5px] text-[#9397bd]">
                {{ tab.label }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const tabs = ref([
    {
        name: "home",
        label: "Trang chủ",
        route: "/",
        icon: "src/assets/imgs/menu-icons/icon_home.png",
        iconActive: "src/assets/imgs/menu-icons/icon_home_active.png",
    },
    {
        name: "store",
        label: "Cửa hàng",
        route: "/shop",
        icon: "src/assets/imgs/menu-icons/icon_shop.png",
        iconActive: "src/assets/imgs/menu-icons/icon_shop_active.png",
    },
    {
        name: "orders",
        label: "Đơn hàng",
        route: "/history",
        icon: "src/assets/imgs/menu-icons/icon_order.png",
        iconActive: "src/assets/imgs/menu-icons/icon_order_active.png",
    },
    {
        name: "profile",
        label: "Cá nhân",
        route: "/customer",
        icon: "src/assets/imgs/menu-icons/icon_user.png",
        iconActive: "src/assets/imgs/menu-icons/icon_user_active.png",
    },
]);

const router = useRouter();
const route = useRoute();

const currentRoute = computed(() => route.path);

const navigateTo = (path: string) => {
    router.push(path);
};
</script>
