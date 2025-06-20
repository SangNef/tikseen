<template>
    <div class="relative overflow-x-hidden">
        <Header />
        <slot />
        <Footer />
        <div
            @click="scrollToTop"
            class="fixed right-12 bottom-12 flex items-center justify-center rounded-full w-10 h-10 bg-[#14d175] active:opacity-30 hover:opacity-80 active:scale-95 duration-150 cursor-pointer _animation-up_16i74_24">
            <span class="animate-ping absolute inline-flex w-7 h-7 rounded-full bg-[#14d175] opacity-75"></span
            ><span role="img" aria-label="arrow-up" class="anticon anticon-arrow-up text-white"
                ><svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="arrow-up"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg
            ></span>
        </div>
    </div>
</template>

<script setup>
import { Footer, Header } from "@/components/desktop";

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style></style>
