<template>
    <nav class="relative flex items-center justify-between px-5 py-2">
        <div class="flex items-center gap-12">
            <router-link class="flex items-center gap-2 cursor-pointer select-none" to="/"
                ><img class="w-44 rotate-[-0.5deg]" loading="lazy" :src="logo" alt=""
            /></router-link>
        </div>
        <div class="flex items-center gap-3 font-semibold text-sm lg:text-base _text-default_1uimq_1">
            <div class="flex items-center gap-6 text-[#8391a6] pl-6">
                <span
                    role="img"
                    aria-label="download"
                    aria-describedby=":r0:"
                    class="anticon anticon-download hover:text-[#01bc8d] text-2xl duration-100 cursor-pointer"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="download"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span
                ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="globe"
                    class="svg-inline--fa fa-globe hover:text-[#01bc8d] text-xl duration-100 cursor-pointer"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20px"
                    height="20px"
                    aria-describedby=":r2:">
                    <path
                        fill="currentColor"
                        d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"></path>
                </svg>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { logo } from "@/assets/desktop/logo";
</script>

<style></style>
