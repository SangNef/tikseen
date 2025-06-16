<template>
    <div>
        <Header />
        <div>
            <div class="flex items-center justify-between px-0.5 text-[0.26rem] text-[#979aa3] font-medium">
                <div class="flex items-center gap-1 pb-0.5">
                    <div class="flex items-center">
                        <div
                            class="px-0.5 cursor-pointer"
                            :class="{ 'text-white': mainIndicator === 'MA' }"
                            @click="setMainIndicator('MA')">
                            MA
                        </div>
                        <div
                            class="px-0.5 cursor-pointer"
                            :class="{ 'text-white': mainIndicator === 'EMA' }"
                            @click="setMainIndicator('EMA')">
                            EMA
                        </div>
                        <div
                            class="px-0.5 cursor-pointer"
                            :class="{ 'text-white': mainIndicator === 'BOLL' }"
                            @click="setMainIndicator('BOLL')">
                            BOLL
                        </div>
                    </div>
                    <div class="w-[2px] h-2 bg-[#151821]"></div>
                    <div class="flex items-center">
                        <div
                            class="px-0.5 cursor-pointer"
                            :class="{ 'text-white': subIndicator === 'VOL' }"
                            @click="setSubIndicator('VOL')">
                            VOL
                        </div>
                        <div
                            class="px-0.5 cursor-pointer"
                            :class="{ 'text-white': subIndicator === 'MACD' }"
                            @click="setSubIndicator('MACD')">
                            MACD
                        </div>
                        <div
                            class="px-0.5 cursor-pointer"
                            :class="{ 'text-white': subIndicator === 'RSI' }"
                            @click="setSubIndicator('RSI')">
                            RSI
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div
                        v-for="tf in timeframes"
                        :key="tf.value"
                        class="pr-1 cursor-pointer"
                        :class="{ 'text-white': activeTimeframe === tf.value }"
                        @click="setTimeframe(tf.value)">
                        {{ tf.label }}
                    </div>
                    <div class="px-0.5">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="gear"
                            class="svg-inline--fa fa-gear !text-[0.35rem]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                                fill="currentColor"
                                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6-15.1 44-25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="relative !mb-1 py-0.5 border-t border-secondary">
                <div class="w-full h-[405px]">
                    <div id="tv_chart_container" style="width: 100%; height: 405px"></div>
                </div>
            </div>
            <div
                class="!p-1 text-white text-center text-[0.26rem] border-b border-secondary flex items-center"
                style="gap: 24px">
                <div class="active:opacity-60 duration-150">
                    <p class="text-[#7d8691] whitespace-nowrap mb-0.5">Hôm nay</p>
                    <p class="text-[#02bd8c]">0.17%</p>
                </div>
                <div class="active:opacity-60 duration-150">
                    <p class="text-[#7d8691] whitespace-nowrap mb-0.5">7 ngày</p>
                    <p class="text-[#fb5256]">-4.08%</p>
                </div>
                <div class="active:opacity-60 duration-150">
                    <p class="text-[#7d8691] whitespace-nowrap mb-0.5">30 ngày</p>
                    <p class="text-[#02bd8c]">2.56%</p>
                </div>
                <div class="active:opacity-60 duration-150">
                    <p class="text-[#7d8691] whitespace-nowrap mb-0.5">90 ngày</p>
                    <p class="text-[#02bd8c]">27.87%</p>
                </div>
                <div class="active:opacity-60 duration-150">
                    <p class="text-[#7d8691] whitespace-nowrap mb-0.5">180 ngày</p>
                    <p class="text-[#02bd8c]">5.55%</p>
                </div>
                <div class="active:opacity-60 duration-150">
                    <p class="text-[#7d8691] whitespace-nowrap mb-0.5">1 năm</p>
                    <p class="text-[#02bd8c]">59.04%</p>
                </div>
            </div>
            <div class="px-1 py-1.5">
                <div class="px-0.5 mb-2 flex items-center justify-between">
                    <span class="text-[0.32rem] text-[#5f5f5f] font-medium">Khả dụng</span
                    ><router-link to="/deposit?redirect=trade" data-discover="true"
                        ><div class="active:opacity-60 duration-150 flex items-center" style="gap: 6px">
                            <span class="text-[0.32rem] font-medium text-white">0.57 USDT</span
                            ><span
                                role="img"
                                aria-label="plus-circle"
                                class="anticon anticon-plus-circle text-[0.35rem] text-default font-medium"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="plus-circle"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                                    <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg
                            ></span></div
                    ></router-link>
                </div>
                <div class="flex" style="gap: 16px">
                    <button
                        type="button"
                        class="_btn-ripple_1fzeu_1 font-medium w-full flex items-center justify-center gap-1 py-1 h-[43px] rounded-full bg-[#00c189] !text-[#101e1d]"
                        @click="openDrawer('buy')">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-trend-up"
                            class="svg-inline--fa fa-arrow-trend-up text-[0.3rem]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.89px"
                            height="14.5px"
                            viewBox="0 0 576 512">
                            <path
                                fill="currentColor"
                                d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path></svg
                        ><span class="text-[0.32rem] font-bold">Mua BTC</span></button
                    ><button
                        type="submit"
                        class="_btn-ripple_1fzeu_1 font-medium w-full flex items-center justify-center gap-1 py-1 h-[43px] rounded-full bg-[#f86655] !text-[#360d0d]"
                        @click="openDrawer('sell')">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-trend-down"
                            class="svg-inline--fa fa-arrow-trend-down text-[0.3rem]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.89px"
                            height="14.5px"
                            viewBox="0 0 576 512">
                            <path
                                fill="currentColor"
                                d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352 384 352z"></path></svg
                        ><span class="text-[0.32rem] font-bold">Bán BTC</span>
                    </button>
                </div>
            </div>
        </div>
        <History />
        <a-drawer
            placement="bottom"
            :open="drawerBuyVisible"
            @close="drawerBuyVisible = false"
            height="56%"
            :closable="false"
            class="ant-drawer-bottom css-1v613y0 drawer-bottom">
            <div
                class="ant-drawer-body"
                style="padding: 0px; background: rgb(18, 18, 18); position: relative; border-radius: 25px 25px 0px 0px">
                <div class="pb-2.5">
                    <div class="fixed mt-1.5 w-full flex items-center justify-center">
                        <div class="w-6 h-[4px] rounded-full bg-secondary active:opacity-60 active:duration-150"></div>
                    </div>
                    <span
                        role="img"
                        aria-label="close-circle"
                        tabindex="-1"
                        @click="drawerBuyVisible = false"
                        class="anticon anticon-close-circle absolute right-3 top-1.5 text-[0.45rem] text-secondary active:opacity-60 active:duration-150"
                        ><svg
                            fill-rule="evenodd"
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="close-circle"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"></path></svg
                    ></span>
                    <div class="select-none px-1.5 py-1.5">
                        <p
                            class="mt-3.5 text-[0.42rem] font-bold"
                            :class="drawerType === 'buy' ? 'text-white' : 'text-white'">
                            Tôi nghĩ BTC sẽ
                            <span :class="drawerType === 'buy' ? 'text-[#00c78c]' : 'text-[#f86655]'">
                                {{ drawerType === 'buy' ? ' tăng' : ' giảm' }}
                            </span>
                        </p>
                        <p
                            class="mt-1 text-[0.32rem]"
                            :class="drawerType === 'buy' ? 'text-[#6b6b6b]' : 'text-[#6b6b6b]'">
                            {{
                                drawerType === 'buy'
                                    ? 'Khi bạn mua quyền chọn mua, nếu giá BTC cao hơn giá thực hiện khi hết hạn, bạn sẽ kiếm được lợi nhuận. Nếu giá BTC thấp hơn, bạn sẽ bị lỗ.'
                                    : 'Khi bạn mua quyền chọn bán, nếu giá BTC thấp hơn giá thực hiện khi hết hạn, bạn sẽ kiếm được lợi nhuận. Nếu giá BTC cao hơn, bạn sẽ bị lỗ.'
                            }}
                        </p>
                        <div class="relative opacity-80 mt-2.5">
                            <div class="_floatingInputContainer_3bdrj_2">
                                <input
                                    id="price-market"
                                    class="_floatingInput_3bdrj_2"
                                    placeholder=" "
                                    readonly=""
                                    disabled=""
                                    spellcheck="false"
                                    value="" /><label
                                    for="price-market"
                                    class="_floatingLabel_3bdrj_26 _placeholderShown_3bdrj_43"
                                    >Giá thị trường tốt nhất</label
                                >
                            </div>
                            <span
                                role="img"
                                aria-label="caret-down"
                                class="anticon anticon-caret-down absolute right-1.5 top-1/2 -translate-y-1/2 text-[#414141]"
                                ><svg
                                    viewBox="0 0 1024 1024"
                                    focusable="false"
                                    data-icon="caret-down"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg
                            ></span>
                        </div>
                        <div class="mt-2.5">
                            <div class="!mb-1.5">
                                <div class="_floatingInputContainer_3bdrj_2">
                                    <input
                                        id="amount"
                                        class="_floatingInput_3bdrj_2"
                                        placeholder="Nhập số tiền (USDT)"
                                        type="number"
                                        spellcheck="false"
                                        value="" />
                                </div>
                            </div>
                        </div>
                        <div class="mt-2.5 mb-3 ant-flex css-1v613y0 ant-flex-align-center" style="gap: 8px">
                            <div
                                class="w-full flex items-center justify-center py-[0.1rem] rounded-[0.15rem] border active:opacity-60 duration-100 bg-default border-default text-white">
                                <span class="text-[0.26rem] font-medium">0%</span>
                            </div>
                            <div
                                class="w-full flex items-center justify-center py-[0.1rem] rounded-[0.15rem] border active:opacity-60 duration-100 bg-primary border-[#2a2a2a] text-[#727272]">
                                <span class="text-[0.26rem] font-medium">5%</span>
                            </div>
                            <div
                                class="w-full flex items-center justify-center py-[0.1rem] rounded-[0.15rem] border active:opacity-60 duration-100 bg-primary border-[#2a2a2a] text-[#727272]">
                                <span class="text-[0.26rem] font-medium">10%</span>
                            </div>
                            <div
                                class="w-full flex items-center justify-center py-[0.1rem] rounded-[0.15rem] border active:opacity-60 duration-100 bg-primary border-[#2a2a2a] text-[#727272]">
                                <span class="text-[0.26rem] font-medium">25%</span>
                            </div>
                            <div
                                class="w-full flex items-center justify-center py-[0.1rem] rounded-[0.15rem] border active:opacity-60 duration-100 bg-primary border-[#2a2a2a] text-[#727272]">
                                <span class="text-[0.26rem] font-medium">50%</span>
                            </div>
                            <div
                                class="w-full flex items-center justify-center py-[0.1rem] rounded-[0.15rem] border active:opacity-60 duration-100 bg-primary border-[#2a2a2a] text-[#727272]">
                                <span class="text-[0.26rem] font-medium">75%</span>
                            </div>
                            <div
                                class="w-full flex items-center justify-center py-[0.1rem] rounded-[0.15rem] border active:opacity-60 duration-100 bg-primary border-[#2a2a2a] text-[#727272]">
                                <span class="text-[0.26rem] font-medium">100%</span>
                            </div>
                        </div>
                        <div class="px-0.5 mb-2">
                            <div
                                class="!mb-1 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-space-between">
                                <span class="text-[0.32rem] text-[#5f5f5f] font-medium">Khả dụng</span
                                ><router-link to="/deposit?redirect=trade" data-discover="true"
                                    ><div
                                        class="active:opacity-60 duration-150 ant-flex css-1v613y0 ant-flex-align-center"
                                        style="gap: 6px">
                                        <span class="text-[0.32rem] font-medium text-white">0.57 USDT</span
                                        ><span
                                            role="img"
                                            aria-label="plus-circle"
                                            class="anticon anticon-plus-circle text-[0.35rem] text-default font-medium"
                                            ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="plus-circle"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                                                <path
                                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg
                                        ></span></div
                                ></router-link>
                            </div>
                            <div
                                class="!mb-1 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-space-between">
                                <span class="text-[0.32rem] text-[#5f5f5f] font-medium">Phí giao dịch</span
                                ><span class="text-[0.32rem] font-medium text-white">0.00 USDT</span>
                            </div>
                            <div
                                class="!mb-1 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-space-between">
                                <span class="text-[0.32rem] text-[#5f5f5f] font-medium">Lợi nhuận cuối cùng</span
                                ><span class="text-[0.32rem] font-medium text-[#02bd8c]">0.00 USDT</span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            :class="[
                                '_btn-ripple_1fzeu_1',
                                'text-white font-medium w-full flex items-center justify-center gap-1 py-1 h-[43px] rounded-full',
                                drawerType === 'buy' ? 'bg-[#00c189] !text-[#101e1d]' : 'bg-[#f86655] !text-[#360d0d]',
                            ]">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-trend-up"
                                class="svg-inline--fa fa-arrow-trend-up text-[0.32rem]"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="15.47px"
                                height="13.75px"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path></svg
                            ><span class="text-[0.34rem] font-bold">
                                {{ drawerType === 'buy' ? 'Mua BTC' : 'Bán BTC' }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </a-drawer>
    </div>
</template>

<script setup>
import Header from './Header.vue';
import { ref, onMounted, watch } from 'vue';
import History from './History.vue';

const timeframes = [
    { label: '1m', value: '1' },
    { label: '5m', value: '5' },
    { label: '15m', value: '15' },
];
// Không chọn indicator nào lúc đầu
const mainIndicator = ref('');
const subIndicator = ref('');
const activeTimeframe = ref('1');

const drawerBuyVisible = ref(false);
const drawerType = ref('buy');

function openDrawer(type) {
    drawerType.value = type;
    drawerBuyVisible.value = true;
}

function getStudies() {
    const studies = [];
    if (mainIndicator.value === 'MA') studies.push('MAExp@tv-basicstudies');
    if (mainIndicator.value === 'EMA') studies.push('EMA@tv-basicstudies');
    if (mainIndicator.value === 'BOLL') studies.push('BB@tv-basicstudies');
    if (subIndicator.value === 'VOL') studies.push('Volume@tv-basicstudies');
    if (subIndicator.value === 'MACD') studies.push('MACD@tv-basicstudies');
    if (subIndicator.value === 'RSI') studies.push('RSI@tv-basicstudies');
    return studies;
}

function renderChart() {
    const container = document.getElementById('tv_chart_container');
    if (container) container.innerHTML = '';
    new window.TradingView.widget({
        autosize: true,
        symbol: 'BINANCE:BTCUSDT',
        interval: activeTimeframe.value,
        timezone: 'Asia/Ho_Chi_Minh',
        theme: 'dark',
        style: '1',
        locale: 'vi',
        toolbar_bg: '#151821',
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: true,
        hide_side_toolbar: true,
        container_id: 'tv_chart_container',
        hide_volume: true,
        studies: getStudies(),
    });
    // Giảm height của price-axis-container sau khi widget render
    setTimeout(() => {
        const axis = document.querySelector('.chart-markup-table.price-axis-container');
        if (axis) axis.style.height = '80px';
    }, 1200);
}

onMounted(() => {
    if (window.TradingView) {
        renderChart();
    } else {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.onload = renderChart;
        document.body.appendChild(script);
    }
});

watch([mainIndicator, subIndicator, activeTimeframe], () => {
    if (window.TradingView) {
        setTimeout(renderChart, 100);
    }
});

function setMainIndicator(ind) {
    mainIndicator.value = ind;
}
function setSubIndicator(ind) {
    subIndicator.value = ind;
}
function setTimeframe(tf) {
    activeTimeframe.value = tf;
}
</script>

<style>
/* Đảm bảo giảm height cho price-axis-container nếu bị override */
.chart-markup-table.price-axis-container {
    height: 80px !important;
    min-height: 80px !important;
    max-height: 80px !important;
}

.drawer-bottom .ant-drawer-body {
    padding: 0 !important;
}

._floatingInputContainer_3bdrj_2 {
    position: relative;
    background-color: #121212;
}

._floatingInput_3bdrj_2 {
    display: block;
    width: 100%;
    padding: 0.35rem 0.5rem;
    font-size: 0.36rem;
    font-weight: 600;
    color: #fff;
    background-color: #121212;
    border-radius: 0.3rem;
    border: 1px solid #2b2b2b;
    appearance: none;
    caret-color: #fff;
    outline: none;
    transition: border-color 0.2s ease-in-out;
}

._floatingLabel_3bdrj_26 {
    position: absolute;
    font-size: 0.36rem;
    font-weight: 600;
    padding: 0 0.15rem;
    color: #414141;
    transition: transform 0.3s, scale 0.3s, top 0.3s;
    transform-origin: 0;
    background-color: #121212;
    left: 0.35rem;
    z-index: 10;
    border-radius: 12px;
}

._floatingLabel_3bdrj_26._placeholderShown_3bdrj_43 {
    transform: scale(1) translateY(0);
    top: 50%;
    transform: translateY(-50%);
}
</style>
