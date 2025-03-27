<template>
    <div>
        <!-- Header -->
        <div class="fixed top-0 left-0 h-11 w-full bg-[#e72732] flex justify-between items-center p-3">
            <button @click="goBack" class="flex items-center">
                <ArrowLeftIcon class="h-5 w-5 text-white stroke-2" />
            </button>
            <h1 class="text-white text-lg">Sài Gòn 5D 5 phút</h1>
            <button class="flex items-center">
                <EllipsisVerticalIcon class="h-5 w-5 text-white stroke-2" />
            </button>
        </div>

        <!-- Danh sách lịch sử -->
        <div class="mt-12">
            <div
                v-for="(history, index) in histories"
                :key="index"
                class="bg-white p-1 py-3 border-b border-gray-200">
                <div class="flex justify-between mb-3">
                    <p class="text-gray-700 text-sm">Mã số {{ history.id }}</p>
                    <p class="text-gray-500 text-sm mr-3">{{ history.time }}</p>
                </div>
                <div class="flex space-x-1 gap-1">
                    <span
                        v-for="(num, i) in history.result.split('')"
                        :key="i"
                        :class="index === 0 ? 'bg-red-500 text-white' : 'bg-white border border-red-500 text-red-500'"
                        class="w-7 h-7 flex justify-center items-center rounded-full">
                        {{ num }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowLeftIcon, EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
    router.go(-1);
};

const histories = [
    { id: "20250327-168", time: "03-27 13:00", result: "12345" },
    { id: "20250327-167", time: "03-27 12:55", result: "67890" },
    { id: "20250327-166", time: "03-27 12:50", result: "54321" },
    { id: "20250327-165", time: "03-27 12:45", result: "98765" },
    { id: "20250327-164", time: "03-27 12:40", result: "13579" },
    { id: "20250327-163", time: "03-27 12:35", result: "24680" },
];
</script>
