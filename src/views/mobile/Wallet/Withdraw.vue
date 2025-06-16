<template>
    <div>
        <div
            class="rv-nav-bar rv-nav-bar--fixed rv-hairline--bottom max-w-40 left-0 bg-primary border-b border-[#f3f3f31f] py-0.5"
            :class="{
                'rv-nav-bar--fixed': isScrolled,
                '!bg-transparent': !isScrolled,
            }"
            style="z-index: 100">
            <div class="rv-nav-bar__content">
                <div class="rv-nav-bar__left" @click="navigateBack">
                    <div>
                        <span
                            role="img"
                            aria-label="arrow-left"
                            tabindex="-1"
                            class="anticon anticon-arrow-left text-white text-[0.52rem]"
                            ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="arrow-left"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg
                        ></span>
                    </div>
                </div>
                <div class="rv-nav-bar__title rv-ellipsis">
                    <div class="text-white">
                        <span class="text-white text-[0.42rem] font-medium whitespace-nowrap">Rút tài sản</span>
                    </div>
                </div>
            </div>
            <div class="rv-nav-bar__right">
                <router-link to="/tx-history?redirect=withdrawal?redirect=wallet&type=withdrawal">
                    <span role="img" aria-label="history" tabindex="-1" class="anticon anticon-history !text-[0.54rem]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="history"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"></path></svg
                    ></span>
                </router-link>
            </div>
        </div>
        <div class="select-none px-1 pt-8">
            <div class="mb-2.5 min-h-10"><img class="rounded-md" :src="deposit" alt="" /></div>
            <div class="mb-2.5">
                <h2 class="text-[#c7c9d6] font-bold uppercase text-[0.32rem]">Chưa có tài sản Crypto</h2>
                <div
                    class="bg-primary border border-secondary rounded-md px-1.5 my-1 active:opacity-60 active:scale-95 active:duration-150 flex items-center justify-center"
                    style="gap: 24px">
                    <div class="flex items-center justify-center">
                        <div class="w-4 h-4 flex items-center justify-center rounded-full bg-primary">
                            <img class="w-4" :src="mcard" alt="" />
                        </div>
                    </div>
                    <div class="py-1.5 flex flex-col items-stretch" style="gap: 6px">
                        <h3 class="text-[0.36rem] font-semibold">Rút qua ngân hàng</h3>
                        <span class="text-[#a4a6b3] text-[0.32rem]"
                            >Bán VNDC và nhận về VND vào tài khoản ngân hàng của bạn, thông qua các đối tác đã được xác
                            thực và bảo lãnh an toàn bởi Coincex.</span
                        >
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-[#c7c9d6] font-bold uppercase text-[0.32rem]">Đã có tài sản Crypto</h2>
                <div
                    class="flex items-center justify-center gap-2 bg-primary border border-secondary rounded-md px-1.5 my-1 active:opacity-60 active:scale-95 active:duration-150">
                    <div class="flex items-center justify-center">
                        <div class="w-4 h-4 flex items-center justify-center rounded-full bg-primary">
                            <img class="w-4" :src="fiat" alt="" />
                        </div>
                    </div>
                    <div class="flex flex-col gap-0.5 py-1.5">
                        <h3 class="text-[0.36rem] font-semibold">Gửi Crypto on-chain</h3>
                        <span class="text-[#a4a6b3] text-[0.32rem]"
                            >Rút on-chain tài sản crypto đến địa chỉ ví cá nhân của bạn trên các mạng lưới
                            blockchain.</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { deposit, fiat, mcard } from '@/assets/wallet';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const isScrolled = ref(false);

const onScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});

const router = useRouter();
function navigateBack() {
    router.back();
}
</script>

<style scope>
.bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgb(18 18 18 / var(--tw-bg-opacity, 1));
}

.rv-nav-bar--fixed {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
}

.rv-nav-bar {
    position: relative;
    z-index: 1000;
    line-height: 22px;
    text-align: center;
}

.rv-nav-bar__content {
    position: relative;
    display: flex;
    align-items: center;
    height: 46px;
}

.rv-nav-bar__left {
    left: 0;
}

.rv-nav-bar__left,
.rv-nav-bar__right {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 14px;
    cursor: pointer;
}

.rv-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #323232;
    font-weight: 500;
    font-size: 16px;
}
.rv-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.rv-nav-bar__right {
    right: 0;
}
</style>
