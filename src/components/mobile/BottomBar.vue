<template>
    <div
        class="flex items-center w-full max-w-40 min-h-6 fixed bottom-0 z-10 bg-primary border-t border-gray-500/15 select-none"
        style="padding-bottom: env(safe-area-inset-bottom, 0)">
        <div
            class="flex items-center w-full max-w-40 min-h-6 fixed bottom-0 z-10 bg-primary border-t border-gray-500/15 select-none"
            style="padding-bottom: env(safe-area-inset-bottom, 0)">
            <div class="flex items-center justify-around flex-1 h-full font-medium relative">
                <router-link
                    v-for="item in menus"
                    :key="item.label"
                    :to="item.href"
                    :class="
                        route.path === item.href
                            ? 'w-full flex items-center justify-center text-white'
                            : 'w-full flex items-center justify-center text-[#676a73]'
                    "
                    data-discover="true">
                    <div :class="item.divClass">
                        <component
                            v-if="item.type === 'img'"
                            :is="'img'"
                            :src="item.icon"
                            :alt="item.label"
                            :class="item.iconClass"
                            :style="
                                item.label === 'Giao dịch'
                                    ? route.path === item.href
                                        ? 'filter: grayscale(0%)'
                                        : 'filter: grayscale(100%)'
                                    : item.iconStyle
                            " />
                        <svg v-else v-bind="item.svgAttrs">
                            <path v-for="(d, idx) in item.paths" :key="idx" v-bind="d" />
                        </svg>
                        <span :class="item.textClass">
                            {{ item.label }}
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { rocket } from '@/assets/icons';
import { useRoute } from 'vue-router';

const route = useRoute();

const menus = [
    {
        label: 'Trang chủ',
        href: '/',
        divClass: 'flex flex-col items-center justify-center flex-1 h-full',
        type: 'svg',
        svgAttrs: {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fas',
            'data-icon': 'house',
            class: 'svg-inline--fa fa-house h-[22.93px] mb-0.5',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 576 512',
        },
        paths: [
            {
                fill: 'currentColor',
                d: 'M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z',
            },
        ],
        textClass: 'text-[0.24rem] font-semibold',
    },
    {
        label: 'Khám phá',
        href: '/explore',
        divClass: 'flex flex-col items-center justify-center flex-1 h-full',
        type: 'svg',
        svgAttrs: {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fas',
            'data-icon': 'compass',
            class: 'svg-inline--fa fa-compass h-[22.93px] mb-0.5',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 512 512',
        },
        paths: [
            {
                fill: 'currentColor',
                d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z',
            },
        ],
        textClass: 'text-[0.24rem] font-semibold',
    },
    {
        label: 'Giao dịch',
        href: '/trade',
        divClass: 'relative flex flex-col items-center justify-end flex-1 w-5 h-5',
        type: 'img',
        icon: rocket,
        iconClass: 'w-6 absolute -top-1.5',
        iconStyle: 'filter: grayscale(100%)',
        svgAttrs: {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fas',
            'data-icon': 'file-lines',
            class: 'svg-inline--fa fa-file-lines h-[22.93px] mb-0.5 opacity-0',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 384 512',
        },
        paths: [
            {
                fill: 'currentColor',
                d: 'M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
            },
        ],
        textClass: 'text-[0.24rem] font-semibold my-[0.1rem]',
    },
    {
        label: 'Futures',
        href: '/futures',
        divClass: 'flex flex-col items-center justify-center flex-1 h-full',
        type: 'svg',
        svgAttrs: {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fas',
            'data-icon': 'file-lines',
            class: 'svg-inline--fa fa-file-lines h-[22.93px] mb-0.5',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 384 512',
        },
        paths: [
            {
                fill: 'currentColor',
                d: 'M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
            },
        ],
        textClass: 'text-[0.24rem] font-semibold',
    },
    {
        label: 'Tài sản',
        href: '/wallet',
        divClass: 'flex flex-col items-center justify-center flex-1 h-full',
        type: 'svg',
        svgAttrs: {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fas',
            'data-icon': 'wallet',
            class: 'svg-inline--fa fa-wallet h-[22.93px] mb-0.5',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 512 512',
        },
        paths: [
            {
                fill: 'currentColor',
                d: 'M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
            },
        ],
        textClass: 'text-[0.24rem] font-semibold',
    },
];
</script>

<style></style>
