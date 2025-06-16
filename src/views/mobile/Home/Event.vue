<template>
    <div>
        <Header title="Trung tâm hoạt động" />
        <div class="px-1.5 pt-8 pb-3.5">
            <component
                v-for="(event, idx) in events"
                :key="idx"
                :is="event.href ? 'a' : 'router-link'"
                :href="event.href"
                :to="event.id ? `/events/${event.id}` : undefined"
                class="block mb-2.5"
                data-discover="true">
                <div class="border border-[#222] rounded-md overflow-hidden">
                    <div class="relative rounded-t-[.16rem] h-16 overflow-hidden">
                        <img class="w-full h-full" :src="event.image" alt="" />
                        <div
                            v-if="event.time"
                            class="absolute left-0 top-0 bg-[#17423c]/80 border-b border-r border-[#01bc8d80] !px-1.5 !py-[2px] rounded-br-full flex items-center"
                            style="gap: 8px">
                            <span class="relative flex w-[8px] h-[8px]">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-default opacity-75"></span>
                                <span class="relative inline-flex rounded-full w-[8px] h-[8px] bg-default"></span>
                            </span>
                            <p class="text-[0.26rem] font-medium text-default">Đang diễn ra</p>
                        </div>
                    </div>
                    <div class="active:opacity-60 duration-150" style="background: rgba(243, 243, 243, 0.02)">
                        <div class="border-t border-[#222] rounded-b-md !p-1 flex items-center justify-between">
                            <span class="text-[0.36rem] font-medium line-clamp-1 uppercase">
                                {{ event.title }}
                            </span>
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                role="img"
                                aria-label="arrow"
                                focusable="false"
                                data-icon="arrow"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid meet"
                                class="rv-icon rv-icon-arrow text-[0.36rem] text-gray-500 ml-1">
                                <path
                                    d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </component>
            <p class="text-[0.32rem] text-gray-500 text-center mt-1.5">Không còn dữ liệu</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Header } from '@/components/mobile';
import { events } from '@/assets/event';
</script>

<style></style>
