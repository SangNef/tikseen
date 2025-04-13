<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="THÔNG BÁO" titleColor="text-[#d9c8ab]" />

        <div class="w-full flex items-center bg-[#2b2b2b] p-0.75 rounded-lg mt-2 mb-4">
            <div
                v-for="item in menuItems"
                :key="item.id"
                @click="activeMenu = item.id"
                :class="activeMenu === item.id ? 'bg-linear-to-l from-[#b39773] to-[#5b442d]' : 'bg-[#2b2b2b]'"
                class="rounded-lg px-6 py-1 text-white text-sm w-[33.33%] text-center cursor-pointer transition-all">
                {{ item.name }}
            </div>
        </div>

        <!-- List thông báo -->
        <div v-if="filteredNotifications.length > 0" class="space-y-3">
            <div
                v-for="notify in filteredNotifications"
                :key="notify.id"
                class="p-3 rounded-md bg-[#2b2b2b] text-white text-sm shadow-md">
                <p class="text-xs text-gray-400 mt-1 mb-2">{{ formatDate(notify.timestamp) }}</p>
                <h3 class="font-semibold text-base text-[#d9c8ab] mb-1">{{ notify.title }}</h3>
                <p>{{ notify.content }}</p>
            </div>
        </div>

        <div v-else class="text-center text-[#d4cbaf] mt-10">Không có thông báo nào!</div>
    </div>
</template>

<script setup>
import Header from "@landing/components/Header.vue";
import { ref, computed } from "vue";
import notifications from "@landing/data/notify";

const activeMenu = ref(0);

const menuItems = [
    { id: 0, name: "Biến động" },
    { id: 1, name: "Thông báo" },
];

// Tạo danh sách lọc theo menu đang chọn
const filteredNotifications = computed(() =>
    notifications.filter(n => n.type === activeMenu.value + 1) // type bắt đầu từ 1
);

// Format ngày giờ
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // tháng bắt đầu từ 0
    const year = date.getFullYear();

    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} • ${hour}:${minute}`;
}

</script>
