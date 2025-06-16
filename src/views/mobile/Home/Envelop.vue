<template>
    <div
        class="rv-nav-bar rv-nav-bar--fixed rv-hairline--bottom max-w-40 left-0 bg-primary py-0.5"
        :class="{
            'rv-nav-bar--fixed': isScrolled,
            '!bg-transparent': !isScrolled,
        }"
        style="z-index: 100">
        <div class="rv-nav-bar__content">
            <div class="rv-nav-bar__left">
                <div @click="navigateBack">
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
                    <span class="text-white text-[0.42rem] font-medium whitespace-nowrap">Nhận thưởng</span>
                </div>
            </div>
            <div class="rv-nav-bar__right">
                <div class="flex items-center gap-2">
                    <span role="img" aria-label="history" class="anticon anticon-history !text-[0.54rem]"
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
                </div>
            </div>
        </div>
    </div>
    <div
        class="h-24"
        :style="`background-image: url(${bgTop});`"
        style="background-size: cover; background-repeat: no-repeat; background-position: center center"></div>
    <div class="bg-primary h-1.5 rounded-t-full -translate-y-1"></div>
    <div
        class="-translate-y-1.5 px-1.5"
        :style="`background-image: url(${bgMain});`"
        style="background-size: cover; background-repeat: no-repeat; background-position: center center">
        <div class="flex items-center justify-center flex-col !mb-1.5">
            <div class="!mb-1.5">
                <img class="w-16 mx-auto" :src="head" alt="" />
            </div>
            <h3 class="font-medium text-[0.36rem] select-none">Mã nhận thưởng</h3>
        </div>
        <form class="ant-form ant-form-horizontal css-1v613y0 text-white">
            <div class="ant-form-item mb-2 css-1v613y0">
                <div class="ant-row ant-form-item-row css-1v613y0">
                    <div class="ant-col ant-form-item-control css-1v613y0">
                        <div class="ant-form-item-control-input">
                            <div class="ant-form-item-control-input-content">
                                <div
                                    class="text-white/90 text-[0.34rem] font-medium ml-0.5 mb-0.5 ant-flex css-1v613y0 ant-flex-align-center"
                                    style="gap: 6px"></div>
                                <div
                                    class="bg-primary flex items-center relative border rounded-[0.28rem] border-secondary">
                                    <div class="w-full ant-flex css-1v613y0 ant-flex-align-stretch ant-flex-vertical">
                                        <div class="w-full ant-flex css-1v613y0 ant-flex-align-center">
                                            <div class="w-full flex items-center">
                                                <input
                                                    class="_input-field_7rxzm_2 bg-transparent w-full min-h-[48px] text-[0.36rem] text-white p-1.5 caret-default rounded-[0.32rem] font-semibold"
                                                    placeholder="Nhập mã nhận thưởng tại đây"
                                                    name="code"
                                                    value="" />
                                                <div
                                                    class="cursor-pointer pl-0.5 py-0.5 flex flex-col items-center justify-center">
                                                    <span
                                                        class="text-[0.32rem] text-default font-semibold whitespace-nowrap pr-2"
                                                        >Dán</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-[46px] flex items-center justify-center p-1 rounded-full bg-default mt-3.5">
                <p class="text-md font-semibold">Mở quà</p>
            </button>
        </form>
    </div>
    <div class="px-1.5 py-5">
        <div class="bg-primary border border-secondary p-1.5 rounded-md">
            <h2 class="text-[0.36rem] !mb-1">Quy định nhận thưởng?</h2>
            <p class="text-[0.3rem] text-[#a5a7b3] leading-[0.5rem] !mb-1.5">
                1. Mã nhận thưởng chỉ có thể được sử dụng một lần cho mỗi tài khoản. Người dùng cần nhập chính xác mã để
                nhận phần thưởng.
            </p>
            <p class="text-[0.3rem] text-[#a5a7b3] leading-[0.5rem] !mb-1.5">
                2. Thời gian hiệu lực: Mỗi mã có thời gian sử dụng nhất định, sau thời gian này, mã sẽ không còn giá
                trị.
            </p>
            <p class="text-[0.3rem] text-[#a5a7b3] leading-[0.5rem] !mb-1.5">
                3. Điều kiện nhận thưởng: Người dùng cần đảm bảo tài khoản của mình tuân thủ các quy định của nền tảng,
                bao gồm xác minh danh tính nếu cần thiết.
            </p>
            <p class="text-[0.3rem] text-[#a5a7b3] leading-[0.5rem] !mb-1.5">
                4. Hình thức nhận thưởng: Phần thưởng có thể là VNDC, USDT hoặc các tài sản số khác, tùy theo từng
                chương trình khuyến mãi.
            </p>
            <p class="text-[0.3rem] text-[#a5a7b3] leading-[0.5rem]">
                5. Không chuyển nhượng: Mã nhận thưởng không thể quy đổi thành tiền mặt hoặc chuyển nhượng giữa các tài
                khoản.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { bgMain, bgTop, head } from '@/assets/envelop';

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

<style></style>
