<template>
    <div>
        <Header title="Thông báo" />
        <div class="pt-7 pb-3">
            <div class="mx-1.5 mt-1 select-none" v-for="item in notifications" :key="item.id">
                <p class="text-[0.28rem] text-[#636363] font-medium text-center mt-1 !mb-1.5">{{ item.time }}</p>
                <router-link
                    class="block bg-[#1b1b1b] p-1.5 rounded-md active:opacity-60 duration-150"
                    :to="`/notification/${item.id}`">
                    <div class="!mb-1 flex items-center justify-between text-[#606060]" style="gap: 6px">
                        <div class="flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="gift"
                                class="svg-inline--fa fa-gift text-[0.42rem]"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18.05px"
                                height="18.05px"
                                viewBox="0 0 512 512">
                                <path
                                    fill="currentColor"
                                    d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"></path>
                            </svg>
                            <span class="text-[0.34rem] font-medium">{{ item.category }}</span>
                        </div>
                        <svg
                            width="18.05px"
                            height="18.05px"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="text-[0.32rem] text-[#5f5f5f]">
                            <path d="..." />
                        </svg>
                    </div>
                    <div class="!mb-0.5 flex items-center gap-2">
                        <div class="relative w-1 h-1 ant-flex css-1v613y0">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-default opacity-75"></span>
                            <span class="relative inline-flex rounded-full w-1 h-1 bg-default"></span>
                        </div>
                        <p class="text-[0.36rem] text-[#e8e8e8] font-semibold line-clamp-1">
                            {{ item.title }}
                        </p>
                    </div>
                    <div class="text-[0.32rem] text-[#757575] font-medium line-clamp-3">
                        <p v-for="(line, idx) in item.content" :key="idx">{{ line }}</p>
                    </div>
                </router-link>
            </div>

            <div class="text-center text-gray-300 pt-1.5 pb-3">
                <p class="text-[0.32rem] text-center text-[#757575]">Không còn dữ liệu</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Header } from "@/components/mobile";
import { notifications } from "./notification";
</script>
