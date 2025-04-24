<template>
    <div class="w-screen bg-[#18191d] p-[34px]">
        <div class="max-w-[1418px] mx-auto text-[#848e9c] text-[16px]">
            <ul class="flex justify-end items-center gap-[15px]">
                <li
                    v-for="item in items"
                    :key="item.tab"
                    class="cursor-pointer hover:text-[#00b897] duration-150 py-[18px]"
                    @click="openTab(item.tab)">
                    {{ item.label }}
                </li>
            </ul>

            <div class="w-full px-[15px]">
                <div class="pt-10 py-5 border-t border-[#848e9c] text-center">
                    CopyRight © 2017 - 2023 HOSE. All Rights Reserved
                </div>
            </div>
        </div>
    </div>
    <transition name="slide-fade">
        <div
            v-if="activeTab !== null"
            class="fixed top-0 left-0 w-screen h-screen bg-black/60 flex items-center justify-center z-50"
            @click.self="closeTab">
            <div
                class="bg-white text-black rounded-xl max-h-[80%] max-w-[1210px] w-full relative translate-y-0"
                @click.stop>
                <button class="absolute top-3 right-4 text-black text-xl" @click="closeTab">×</button>
                <div class="pl-5 border-b border-[#eee] bg-[#ddd] text-[#555]">
                    <h5 class="text-[28px] leading-[60px]" v-if="activeTitle">{{ activeTitle }}</h5>
                </div>
                <div class="overflow-y-auto" :style="{ maxHeight: 'calc(80vh - 60px)' }" v-html="activeContent"></div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, computed } from "vue";
import contents from "@/data/footer";

const items = [
    { label: "Giới thiệu công ty", tab: 1 },
    { label: "Chứng chỉ MSB", tab: 2 },
    { label: "Điều khoản dịch vụ", tab: 3 },
    { label: "Chính sách bảo mật", tab: 4 },
];

const activeTab = ref(null);

const openTab = (tab) => {
    activeTab.value = tab;
};

const closeTab = () => {
    activeTab.value = null;
};

const activeContent = computed(() => {
    const found = contents.find((c) => c.tab === activeTab.value);
    return found ? found.html : "";
});

const activeTitle = computed(() => {
    return contents.find((c) => c.tab === activeTab.value)?.title || "";
});
</script>

<style>
.modal-body {
    padding: 20px;
}

.modal-body p,
.modal-body li,
.modal-body h2 {
    color: #2c3e50;
    margin-bottom: 16px;
}

.modal-body h2 {
    font-weight: bold;
}

.modal-body figure {
    display: flex;
}

.modal-body figure img {
    width: 45%;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.4s ease;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.slide-fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.slide-fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
