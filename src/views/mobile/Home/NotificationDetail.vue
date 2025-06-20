<template>
    <div>
        <Header title="Chi tiết thông báo" />
        <div class="pt-7 min-h-screen select-none p-1.5">
            <div class="relative bg-[#1b1b1b] min-h-[78vh] px-1.5 py-2 rounded-md">
                <h1 class="text-[0.36rem] text-[#e8e8e8] font-semibold !mb-0.5">
                    {{ notification.title }}
                </h1>
                <p class="text-[0.32rem] text-[#757575] font-medium !mb-2.5">
                    {{ notification.time }}
                </p>
                <div class="notification-detail flex flex-col gap-1 text-[0.34rem] text-[#757575]">
                    <div>
                        <p v-for="(line, idx) in notification.content" :key="idx" class="!mb-[6.45px]">{{ line }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { Header } from "@/components/mobile";
import { getNotificationById } from "./notification";

const route = useRoute();
const notificationId = route.params.id;
const notification = getNotificationById(notificationId);
</script>
