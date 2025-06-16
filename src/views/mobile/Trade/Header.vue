<template>
    <div class="!p-1.5 mb-0.5">
        <div class="text-md flex items-center justify-between">
            <div
                class="active:opacity-60 active:scale-95 active:duration-150 -translate-x-0.5 flex items-center"
                style="gap: 12px">
                <div class="!mt-[0.05rem]">
                    <span role="img" aria-label="swap" class="anticon anticon-swap"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="swap"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg
                    ></span>
                </div>
                <div class="flex items-center gap-0.5 cursor-pointer" @click="drawerLeftVisible = true">
                    <img
                        class="pointer-events-none rounded-full"
                        width="23"
                        src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-ETH-icon.png"
                        alt="" />
                    <p class="font-semibold text-[0.42rem]">ETH/USDT</p>
                </div>
            </div>
            <div class="text-[0.42rem] flex items-center" style="gap: 16px">
                <span
                    role="img"
                    aria-label="star"
                    tabindex="-1"
                    class="anticon anticon-star text-yellow-500 active:opacity-60 duration-150"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="star"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span
                ><span
                    role="img"
                    aria-label="share-alt"
                    tabindex="-1"
                    class="anticon anticon-share-alt active:opacity-60 duration-150"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="share-alt"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"></path></svg></span
                ><span
                    role="img"
                    aria-label="question-circle"
                    tabindex="-1"
                    class="anticon anticon-question-circle active:opacity-60 duration-150"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="question-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path
                            d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg
                ></span>
            </div>
        </div>
        <div class="w-full !mt-1 flex">
            <div class="flex-1 flex flex-col gap-0.5 text-md">
                <div class="flex items-center" style="gap: 6px">
                    <p class="font-semibold text-[0.42rem] text-default">2.544,70</p>
                    <div class="text-[0.26rem] font-medium px-0.5 py-[2px] rounded-sm bg-[#0c221f] text-default">
                        +0.38%
                    </div>
                </div>
                <div class="flex items-center" style="gap: 6px">
                    <div class="text-[#adb0b9] text-[0.3rem] font-medium flex items-center" style="gap: 6px">
                        <span>{{ nowRange }}</span
                        ><span class="text-red-600">{{ countdown }}</span>
                    </div>
                </div>
                <div class="-translate-x-0.5 active:opacity-60 duration-150 flex items-center" style="gap: 6px">
                    <div
                        class="text-[0.26rem] text-[#fb8535] bg-[#281a0f] border border-[#231d18] px-0.5 py-[2px] rounded-sm font-semibold flex items-center"
                        style="gap: 5px"
                        @click="drawerVisible = true">
                        <img
                            class="w-1.5"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABwUlEQVRYw+2WMVLCUBRF7wuODRbswLiDmNCDKxBXAK5ArJwxYcCCwkpdAbAC2QHYo2YJsAIptFJzLZCRAROTn3x0Rl6byc3Jfe+/f4FN/Zei53TpOtWsdY0U7+5C0KXnDNiyzL8ANK8yXnOZQRmZ/JbAzArKSOXMMtRbrvMrQDy3a2GQdO36+h0SaUY9Y90qrA2Int2EIGpWCsgbtbUA0bObgLRiOHioHYgN+yoWzHyWPtvGc7vGhtPJFIiu3QEl2bDmt0qzL0gVRGwoyaxNK8o8BmUK4PZLTK6lPTpVdoieU1GCAYDAMEFcLUHW6RbL6i1bFkzm0PenUdhUAqJbLP9wvJU3fJRL4Q5JUNGXXcK1o1pW0gYk4doRQGLqAwrXNiKvAH1V0JuH1hJhibG+oaav4FBwp88HmSg4JEONnblNDrQd9AFMNbRrLO37XmIgaflTkDcaxraX9rZ/BMTKzp2HvXR56DU4AjnOAgZvwUHqPAQAPLNMbBmDqA0bB0Yu/bH6HlqkvvRnf0f0FHD6eAn248DEdmg1lvAEwE9pYAjKhbRHidaHKI9E3SpgJ1cGaS1cmk8AJnh+H8q1P8WmNNQHss+hARePAMsAAAAASUVORK5CYII="
                            alt="" />Top 1 về độ phổ biến
                    </div>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        role="img"
                        aria-label="ellipsis"
                        focusable="false"
                        data-icon="ellipsis"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        class="rv-icon rv-icon-ellipsis text-gray-300">
                        <path
                            d="M180.556 416.667c38.353 0 69.444 31.091 69.444 69.444s-31.091 69.445-69.444 69.445c-38.354 0-69.445-31.092-69.445-69.445 0-38.353 31.091-69.444 69.445-69.444zm319.444 0c38.353 0 69.444 31.091 69.444 69.444s-31.09 69.445-69.444 69.445c-38.353 0-69.444-31.092-69.444-69.445 0-38.353 31.09-69.444 69.444-69.444zm319.444 0c38.354 0 69.445 31.091 69.445 69.444s-31.091 69.445-69.445 69.445c-38.353 0-69.444-31.092-69.444-69.445 0-38.353 31.091-69.444 69.444-69.444z"
                            fill-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <div class="flex-1 flex flex-col items-end justify-center text-md">
                <div class="w-full text-[0.24rem] font-medium !mb-0.5 text-[#666666] flex items-center justify-between">
                    <span class="max-w-12 line-clamp-1">24h Cao</span><span class="text-[#f8f8f8]">2559.51</span>
                </div>
                <div class="w-full text-[0.24rem] font-medium !mb-0.5 text-[#666666] flex items-center justify-between">
                    <span class="max-w-12 line-clamp-1">24h Thấp</span><span class="text-[#f8f8f8]">2492.00</span>
                </div>
                <div class="w-full text-[0.24rem] font-medium !mb-0.5 text-[#666666] flex items-center justify-between">
                    <span class="max-w-12 line-clamp-1">Số tiền 24 giờ(BTC)</span
                    ><span class="text-[#f8f8f8]">300749.67</span>
                </div>
                <div class="w-full text-[0.24rem] font-medium !mb-0.5 text-[#666666] flex items-center justify-between">
                    <span class="max-w-12 line-clamp-1">Khối lượng 24 giờ(USDT)</span
                    ><span class="text-[#f8f8f8]">761439.71K</span>
                </div>
            </div>
        </div>
    </div>
    <a-drawer
        placement="bottom"
        :open="drawerVisible"
        @close="drawerVisible = false"
        height="56%"
        :closable="false"
        class="ant-drawer-bottom css-1v613y0">
        <div class="select-none">
            <div class="!mb-1.5 flex items-center justify-between">
                <p class="w-full text-[0.52rem]">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="xmark"
                        class="svg-inline--fa fa-xmark text-[#888] cursor-pointer"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="16.77px"
                        height="22.36px"
                        @click="drawerVisible = false">
                        <path
                            fill="currentColor"
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                    </svg>
                </p>
                <p class="w-full text-center text-[0.38rem] font-semibold whitespace-nowrap text-white">
                    Bảng xếp hạng
                </p>
                <p class="w-full"></p>
            </div>
            <div class="!py-1.5 pl-2 pt-2 active:opacity-60 duration-150 flex items-center">
                <div class="min-w-3 h-3 flex items-center">
                    <img
                        class="w-2.5"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABwUlEQVRYw+2WMVLCUBRF7wuODRbswLiDmNCDKxBXAK5ArJwxYcCCwkpdAbAC2QHYo2YJsAIptFJzLZCRAROTn3x0Rl6byc3Jfe+/f4FN/Zei53TpOtWsdY0U7+5C0KXnDNiyzL8ANK8yXnOZQRmZ/JbAzArKSOXMMtRbrvMrQDy3a2GQdO36+h0SaUY9Y90qrA2Int2EIGpWCsgbtbUA0bObgLRiOHioHYgN+yoWzHyWPtvGc7vGhtPJFIiu3QEl2bDmt0qzL0gVRGwoyaxNK8o8BmUK4PZLTK6lPTpVdoieU1GCAYDAMEFcLUHW6RbL6i1bFkzm0PenUdhUAqJbLP9wvJU3fJRL4Q5JUNGXXcK1o1pW0gYk4doRQGLqAwrXNiKvAH1V0JuH1hJhibG+oaav4FBwp88HmSg4JEONnblNDrQd9AFMNbRrLO37XmIgaflTkDcaxraX9rZ/BMTKzp2HvXR56DU4AjnOAgZvwUHqPAQAPLNMbBmDqA0bB0Yu/bH6HlqkvvRnf0f0FHD6eAn248DEdmg1lvAEwE9pYAjKhbRHidaHKI9E3SpgJ1cGaS1cmk8AJnh+H8q1P8WmNNQHss+hARePAMsAAAAASUVORK5CYII="
                        alt="" />
                </div>
                <div class="ml-0.5">
                    <div class="text-[0.36rem] font-semibold !mb-[3.5px] flex items-center" style="gap: 8px">
                        <p class="text-white">Danh sách nóng</p>
                        <span class="text-[#dcb32f]">#2</span>
                    </div>
                    <span class="text-[#787878] text-[0.32rem]"
                        >Xếp hạng tổng thể 24 giờ (gồm khối lượng giao dịch, chủ đề nóng, v.v.)</span
                    >
                </div>
            </div>
            <div class="!py-1.5 pl-2 active:opacity-60 duration-150 flex items-center">
                <div class="min-w-3 h-3 flex items-center">
                    <img
                        class="w-2"
                        src="data:image/png;base64,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"
                        alt="" />
                </div>
                <div>
                    <div class="text-[0.36rem] font-semibold !mb-[3.5px] ml-0.5 flex items-center" style="gap: 8px">
                        <p class="text-white">Xu hướng</p>
                        <span class="text-[#dcb32f]">#1</span>
                    </div>
                    <span class="text-[#787878] pl-[3px] text-[0.32rem]">Tìm kiếm nhiều nhất 24 giờ</span>
                </div>
            </div>
            <div class="!py-1.5 pl-2 active:opacity-60 duration-150 flex items-center">
                <div class="min-w-3 h-3 flex items-center">
                    <img
                        class="w-2"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACw0lEQVRYw+2XPXITQRCF39frg3EWQiIyZ+ByhiMiQq4CF2MfQffM7J+KLaGyEk25ypK1u+5+f92SHudx/u9w7Y1/Pn56wfqKbAOyLQDbM7xOP3+8XPPcp6tbiZAk2c6mAAkZI1/d5/UFhWSDEBbCTrwxIt/pPggVTQRIkmXBxLsXNEcQSukYWBU63wMhIUEKOYGRAMvSU7w/QhGTLYFkSyjKskazrDtQBqiZHlsiQWpw3QMhWyLS9ErdWBCbivz5+cNF4r9/+307hIwQXUCpLDR7E0Sefo3XGaD5QmzD+XqEEpl6KE3mlkQQa86g3lumCb7McDOX1T8BVFz1XmfPq64dQZtT7QO3dm5n+5CmnGEo5JhpzMWM17VnGiigMcaFWXq9hoicXgmRUVjROdMWISxndEXJ53i07wry82uqretOqrwRb18WiYwqoO1qGMkgzfNa1BA2TfU0qjjibF+QIp1s25EDqofffpa1pF64Rwo2to/kqo2YfssZypii2VNDq8thNQpK5Mr2NGXYmsRWQ72YxUecoqzMSESGnS/ZfnLHvkSTMgnk2UcaKmrdujwawXtRE61yDz4OygLMQM5j4O40JEKq/jInZksYzris9pwNouyKilBFENrmy3hG1RMjOAExUYb5t6iJkFbekvNnw3jpov3VtlBui2jaFZ851OvPF6coE24BVkMBGe/W5IgOW+VRWxf3cqV2k7GwpBcOvHJEGSIV5wV5u7kDiHC3TjZAbSGba3O2uVTX0DxyzKGoRV9sRlzggxxiRCLuGaEtnpFqo61MUU4+8P2+oCl6f4vrKQFsCoqqopM7qFlFSRmAhW7ivIak1SwyldVHSY00leg9OvCe3aKzPU2rtDhne6zl7Vt4eaoqjBQlnTHnLkRJ/x5XKXoyh4zVvoFyefsof43rj6de01sVn65VOH8/zuPc+PwFO2NPrq3SplYAAAAASUVORK5CYII="
                        alt="" />
                </div>
                <div>
                    <div class="text-[0.36rem] font-semibold !mb-[3.5px] ml-0.5 flex items-center" style="gap: 8px">
                        <p class="text-white">Khối lượng</p>
                        <span class="text-[#dcb32f]">#1</span>
                    </div>
                    <span class="text-[#787878] pl-[3px] text-[0.32rem]">Xếp hạng khối lượng giao dịch 24 giờ</span>
                </div>
            </div>
        </div>
    </a-drawer>

    <Market :drawerLeftVisible="drawerLeftVisible" @update:drawerLeftVisible="drawerLeftVisible = $event" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Market from './Market.vue';

const countdown = ref('00:00');
const nowRange = ref('');
let timer = null;
let endTime = null;
const drawerVisible = ref(false);
const drawerLeftVisible = ref(false);

function updateNowRangeAndEndTime() {
    const now = new Date();
    now.setSeconds(0, 0); // về đầu phút hiện tại
    const start = now.toTimeString().slice(0, 5);

    now.setMinutes(now.getMinutes() + 2);
    const end = now.toTimeString().slice(0, 5);

    nowRange.value = `${start}~${end} / `;

    endTime = new Date();
    endTime.setSeconds(0, 0);
    endTime.setMinutes(now.getMinutes()); // phút chẵn tiếp theo (kết thúc)
}

function updateCountdown() {
    const now = new Date();
    let diff = Math.floor((endTime - now) / 1000);
    if (diff < 0) {
        updateNowRangeAndEndTime();
        diff = Math.floor((endTime - now) / 1000);
    }
    const s = (diff % 60).toString().padStart(2, '0');
    countdown.value = `00:${s}`;
}

onMounted(() => {
    updateNowRangeAndEndTime();
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});
</script>

<style>
.trade-drawer-left .ant-drawer-body {
    padding: 0;
}

.trade-drawer-left :where(.css-1v613y0).ant-tabs .ant-tabs-tab {
    position: relative;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-flex;
    align-items: center;
    padding: 12px 0;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    color: #a8aab6;
}

/* Đổi màu border bottom của tab active */
.trade-drawer-left :where(.css-1v613y0).ant-tabs .ant-tabs-tab.ant-tabs-tab-active {
    border-bottom: 2px solid #01bc8d !important;
    z-index: 10;
}

.trade-drawer-left
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-tabs
    .ant-tabs-tab.ant-tabs-tab-active
    .ant-tabs-tab-btn {
    color: #01bc8d !important;
    text-shadow: 0 0 0.25px currentcolor;
}

.trade-drawer-left .ant-drawer-body,
.trade-drawer-left .markets_zero,
.trade-drawer-left .ant-tabs-content-holder,
.trade-drawer-left .ant-tabs-content,
.trade-drawer-left .ant-tabs-tabpane,
.trade-drawer-left .ant-tabs-nav-list {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
}
.trade-drawer-left .ant-drawer-body::-webkit-scrollbar,
.trade-drawer-left .markets_zero::-webkit-scrollbar,
.trade-drawer-left .ant-tabs-content-holder::-webkit-scrollbar,
.trade-drawer-left .ant-tabs-content::-webkit-scrollbar,
.trade-drawer-left .ant-tabs-tabpane::-webkit-scrollbar,
.trade-drawer-left .ant-tabs-nav-list::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}
</style>
