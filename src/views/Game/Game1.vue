<template>
    <div>
        <div class="w-full" style="height: calc(532px + 44px - env(safe-area-inset-bottom)); overflow: scroll">
            <div class="w-full h-[59px] flex justify-between items-center bg-[#f4f4f4]">
                <div class="pt-[5px] text-sm text-center mx-[5px]" v-for="tab in tabs" :key="tab.value">
                    <button
                        :class="activeTab === tab.value ? '!text-white bg-[#e72732]' : 'text-[#919191]'"
                        class="py-[5px] px-[17px] rounded-[25px] min-w-[75px]"
                        @click="setActiveTab(tab.value)">
                        <span>{{ tab.label }}</span>
                    </button>
                </div>
            </div>
            <Dulieu v-if="activeTab === 'OSC001'" />
            <KhachHang v-if="activeTab === 'OSC002'" />
            <DoiTac v-if="activeTab === 'OSC003'" />
            <Other v-if="activeTab === 'OSC004'" />
        </div>
        <Bet />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"; 

import Dulieu from "./Dulieu.vue";
import KhachHang from "./KhachHang.vue";
import DoiTac from "./DoiTac.vue";
import Other from "./Other.vue";

import Bet from "./Bet.vue"

const isMuted = ref(true);
const activeTab = ref("OSC001");

const tabs = [
    { value: "OSC001", label: "Dữ liệu" },
    { value: "OSC002", label: "Khách hàng" },
    { value: "OSC003", label: "Đối tác" },
    { value: "OSC004", label: "Khác" },
];

const setActiveTab = (tab) => {
    activeTab.value = tab;
};
</script>

<style scope></style>
