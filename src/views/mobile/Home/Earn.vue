<template>
    <div class="select-none min-h-screen pb-8 bg-gradient-to-b to-[16%] from-green-800/30 pt-1">
        <div
            class="rv-nav-bar rv-nav-bar--fixed rv-hairline--bottom max-w-40 left-0 border-b border-[#f3f3f31f] py-0.5"
            :class="{
                'bg-primary': isScrolled,
                '!bg-transparent': !isScrolled,
            }"
            style="z-index: 20">
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
                        <span class="text-white text-[0.42rem] font-medium whitespace-nowrap">Lãi qua đêm</span>
                    </div>
                </div>
                <div class="rv-nav-bar__right">
                    <div class="flex items-center gap-2 pr-0.5">
                        <span
                            role="img"
                            aria-label="question-circle"
                            class="anticon anticon-question-circle !text-[0.55rem]"
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
                                    d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg></span
                        ><span
                            role="img"
                            aria-label="history"
                            tabindex="-1"
                            class="anticon anticon-history !text-[0.55rem]"
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
        <div class="px-1 pb-2.5 pt-6 border-b border-gray-500/10">
            <div class="flex items-center gap-1">
                <div
                    class="mb-1 font-bold"
                    style="font-family: Nunito, sans-serif; font-weight: bold; font-size: 21.5px">
                    <span class="text-default">Coin</span><span>cex</span><span class="text-green-600"> OIR</span>
                </div>
            </div>
            <p class="text-[0.58rem] font-bold text-gray-100 leading-4 mt-1">
                Tích lũy không kỳ hạn nhận theo giờ từ 21.5% - 32.7%/năm
            </p>
            <div class="flex items-center justify-start text-[0.32rem] font-bold mt-1">
                <div
                    class="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-green-600/10 text-green-600 border border-green-500/10">
                    <span>Hành trình</span
                    ><span role="img" aria-label="right" class="anticon anticon-right"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg
                    ></span>
                </div>
            </div>
        </div>
        <div class="pt-3">
            <div class="flex items-center justify-between">
                <div class="w-full flex flex-col items-center gap-1 pr-1">
                    <div class="flex items-center justify-center w-6 h-6 relative rounded-full">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="sack-dollar"
                            class="svg-inline--fa fa-sack-dollar absolute z-10 text-[0.52rem] text-green-600"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22.36px"
                            height="22.36px"
                            viewBox="0 0 512 512">
                            <path
                                fill="currentColor"
                                d="M320 96L192 96 144.6 24.9C137.5 14.2 145.1 0 157.9 0L354.1 0c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128l128 0c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4c0 0 0 0 0 0s0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z"></path></svg
                        ><img class="w-6 h-6 absolute z-0 opacity-40" :src="frame" alt="" />
                    </div>
                    <p class="text-center text-[0.32rem] text-gray-300">
                        Nhận và rút lãi <br />
                        hàng ngày
                    </p>
                </div>
                <div class="w-full flex flex-col items-center gap-1 px-1">
                    <div class="flex items-center justify-center w-6 h-6 relative rounded-full">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="seedling"
                            class="svg-inline--fa fa-seedling absolute z-10 text-[0.52rem] text-green-600"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22.36px"
                            height="22.36px"
                            viewBox="0 0 512 512">
                            <path
                                fill="currentColor"
                                d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"></path></svg
                        ><img class="w-6 h-6 absolute z-0 opacity-40" :src="frame" alt="" />
                    </div>
                    <p class="text-center text-[0.32rem] text-gray-300">
                        Lợi nhuận lên đến <br />
                        32.7%/năm
                    </p>
                </div>
                <div class="w-full flex flex-col items-center gap-1 pl-1">
                    <div class="flex items-center justify-center w-6 h-6 relative rounded-full">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="circle-dollar-to-slot"
                            class="svg-inline--fa fa-circle-dollar-to-slot absolute z-10 text-[0.52rem] text-green-600"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22.36px"
                            height="22.36px"
                            viewBox="0 0 512 512">
                            <path
                                fill="currentColor"
                                d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3l-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1l0 6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1l0 6.4c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1l0-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4l0-6.3c0-11.1-9-20.1-20.1-20.1zM48 352l16 0c19.5 25.9 44 47.7 72.2 64L64 416l0 32 192 0 192 0 0-32-72.2 0c28.2-16.3 52.8-38.1 72.2-64l16 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48z"></path></svg
                        ><img class="w-6 h-6 absolute z-0 opacity-40" :src="frame" alt="" />
                    </div>
                    <p class="text-center text-[0.32rem] text-gray-300">
                        Rút vốn gốc <br />
                        bất cứ lúc nào
                    </p>
                </div>
            </div>
        </div>
        <div class="px-1">
            <button
                type="button"
                class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center p-1 rounded-full bg-green-700 border-2 border-green-800 mt-3">
                <p class="text-md font-bold">Đầu tư ngay</p>
            </button>
        </div>
        <div class="px-1.5 pt-3.5">
            <div class="flex items-center gap-1">
                <h3 class="font-semibold text-[0.42rem]">Lãi quy năm (APY)</h3>
                <span
                    role="img"
                    aria-label="info-circle"
                    class="anticon anticon-info-circle text-[0.35rem] text-gray-500"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="info-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path
                            d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg
                ></span>
            </div>
            <div class="flex items-center justify-between mt-1.5">
                <div>
                    <h3 class="text-[#8e98a1] font-semibold text-[0.32rem] mb-0.5">APY hiện tại</h3>
                    <span class="text-[0.3rem] text-[#8e98a1]"
                        ><span class="text-green-600 text-[0.56rem] font-bold">21.5%</span>/năm</span
                    >
                </div>
                <div>
                    <h3 class="text-[#8e98a1] font-semibold text-[0.32rem] mb-0.5">APY trung bình 24 giờ</h3>
                    <span class="text-[0.3rem] text-[#8e98a1]"
                        ><span class="text-green-600 text-[0.56rem] font-bold">21.5%</span>/năm</span
                    >
                </div>
            </div>
        </div>
        <div class="pr-1">
            <div style="min-height: 295px">
                <div id="apy-chart" style="width: 100%; height: 280px"></div>
            </div>
        </div>
        <p class="text-[#8d919d] text-[0.32rem] font-medium px-1.5 mt-0.5">
            <span class="text-[#98a2ac]">+75,000</span> người dùng tin tưởng sử dụng và đang nhận lãi hàng ngày với
            <span class="text-default">Coin</span><span class="text-white">cex</span
            ><span class="text-green-600"> OIR</span>.
        </p>
        <div class="pt-2">
            <router-link
                to="/invite?redirect=overnight-interest"
                class="flex items-center justify-between bg-green-900/10 pl-2 pr-1.5 py-1.5 rounded-sm">
                <div class="flex items-center gap-1.5">
                    <span
                        role="img"
                        aria-label="gift"
                        class="anticon anticon-gift text-default text-[0.58rem] animate-bounce"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="gift"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zm-334-74c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm-138-70c38.6 0 70 31.4 70 70v70h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70zM180 482V378h298v104H180zm48 68h250v308H228V550zm568 308H546V550h250v308zm48-376H546V378h298v104z"></path></svg
                    ></span>
                    <p class="text-[0.32rem] text-gray-300 font-bold">
                        Giới thiệu bạn bè cùng sử dụng <br />
                        Coincex OIR
                    </p>
                </div>
                <span role="img" aria-label="right" class="anticon anticon-right text-gray-300"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="right"
                        width="21.5px"
                        height="21.5px"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg
                ></span>
            </router-link>
        </div>
        <div class="px-1.5 pt-3.5 border-b border-gray-500/10 pb-2.5">
            <h3 class="font-semibold text-[0.42rem] mb-1.5">Tính toán lợi nhuận</h3>
            <div class="relative">
                <input
                    type="text"
                    placeholder="Nhập số tiền cần tính"
                    class="w-full bg-green-800/5 border-2 border-green-800/50 rounded-sm px-1.5 py-1 text-[0.42rem] min-h-[46px] font-semibold caret-green-800 oir focus:border-green-800 duration-150"
                    value="1,000,000,000" /><span
                    class="absolute right-1.5 top-1/2 -translate-y-1/3 font-semibold z-10 text-[0.3rem] text-default active:opacity-60 active:duration-150 select-none"
                    >VNDC</span
                >
            </div>
            <span class="text-[#8d919d] text-[0.32rem] font-semibold"
                >APY hiện tại <span class="text-green-600">21.5%</span>/năm</span
            >
            <div class="mt-2.5 font-semibold">
                <div class="flex items-center justify-between mb-2.5 active:opacity-30 duration-150">
                    <div class="flex items-center justify-between gap-1.5">
                        <div
                            class="w-4 h-4 flex items-center justify-center rounded-full bg-green-800/20 border-2 border-green-800">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-trend-up"
                                width="19.33px"
                                height="17.19px"
                                class="svg-inline--fa fa-arrow-trend-up text-[0.4rem] text-green-600"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h4 class="mb-0.5 text-gray-300 leading-[0.55rem] text-[0.36rem]">Lãi một giờ</h4>
                            <span class="text-[#8c96a2] text-[0.28rem]">Ước tính</span>
                        </div>
                    </div>
                    <div class="text-green-600 text-[0.38rem] font-bold">+24,543 ₫</div>
                </div>
                <div class="flex items-center justify-between mb-2.5 active:opacity-30 duration-150">
                    <div class="flex items-center justify-between gap-1.5">
                        <div
                            class="w-4 h-4 flex items-center justify-center rounded-full bg-green-800/20 border-2 border-green-800">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-trend-up"
                                width="19.33px"
                                height="17.19px"
                                class="svg-inline--fa fa-arrow-trend-up text-[0.4rem] text-green-600"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h4 class="mb-0.5 text-gray-300 leading-[0.55rem] text-[0.36rem]">Lãi một ngày</h4>
                            <span class="text-[#8c96a2] text-[0.28rem]">Ước tính</span>
                        </div>
                    </div>
                    <div class="text-green-600 text-[0.38rem] font-bold">+589,207 ₫</div>
                </div>
                <div class="flex items-center justify-between mb-2.5 active:opacity-30 duration-150">
                    <div class="flex items-center justify-between gap-1.5">
                        <div
                            class="w-4 h-4 flex items-center justify-center rounded-full bg-green-800/20 border-2 border-green-800">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-trend-up"
                                width="19.33px"
                                height="17.19px"
                                class="svg-inline--fa fa-arrow-trend-up text-[0.4rem] text-green-600"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h4 class="mb-0.5 text-gray-300 leading-[0.55rem] text-[0.36rem]">Lãi 30 ngày</h4>
                            <span class="text-[#8c96a2] text-[0.28rem]">Ước tính</span>
                        </div>
                    </div>
                    <div class="text-green-600 text-[0.38rem] font-bold">+17,828,072 ₫</div>
                </div>
                <div class="flex items-center justify-between mb-2.5 active:opacity-30 duration-150">
                    <div class="flex items-center justify-between gap-1.5">
                        <div
                            class="w-4 h-4 flex items-center justify-center rounded-full bg-green-800/20 border-2 border-green-800">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-trend-up"
                                width="19.33px"
                                height="17.19px"
                                class="svg-inline--fa fa-arrow-trend-up text-[0.4rem] text-green-600"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h4 class="mb-0.5 text-gray-300 leading-[0.55rem] text-[0.36rem]">Lãi 6 tháng</h4>
                            <span class="text-[#8c96a2] text-[0.28rem]">Ước tính</span>
                        </div>
                    </div>
                    <div class="text-green-600 text-[0.38rem] font-bold">+111,850,891 ₫</div>
                </div>
                <div class="flex items-center justify-between mb-2.5 active:opacity-30 duration-150">
                    <div class="flex items-center justify-between gap-1.5">
                        <div
                            class="w-4 h-4 flex items-center justify-center rounded-full bg-green-800/20 border-2 border-green-800">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-trend-up"
                                width="19.33px"
                                height="17.19px"
                                class="svg-inline--fa fa-arrow-trend-up text-[0.4rem] text-green-600"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col justify-center">
                            <h4 class="mb-0.5 text-gray-300 leading-[0.55rem] text-[0.36rem]">Lãi 365 ngày</h4>
                            <span class="text-[#8c96a2] text-[0.28rem]">Ước tính</span>
                        </div>
                    </div>
                    <div class="text-green-600 text-[0.38rem] font-bold">+239,858,626 ₫</div>
                </div>
            </div>
        </div>
        <div class="px-1.5 pt-3">
            <h3 class="font-semibold text-[0.42rem] mb-1.5">Có thể bạn quan tâm</h3>
            <div class="divide-y divide-gray-500/10">
                <div
                    v-for="(drawer, idx) in drawers"
                    :key="idx"
                    class="flex items-center justify-between py-1.5 active:opacity-30 duration-150 cursor-pointer"
                    @click="openDrawer(idx)">
                    <div class="flex items-center gap-1">
                        <span
                            role="img"
                            aria-label="question-circle"
                            class="anticon anticon-question-circle text-gray-500 text-[0.42rem]">
                            <svg
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
                                    d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                            </svg>
                        </span>
                        <span class="text-[0.36rem] text-gray-300 font-semibold">{{ drawer.title }}</span>
                    </div>
                    <span role="img" aria-label="right" class="anticon anticon-right text-gray-500 text-[0.42rem]">
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        <a-drawer
            v-if="openDrawerIndex !== null"
            :visible="openDrawerIndex !== null"
            placement="bottom"
            :closable="false"
            :title="null"
            @close="closeDrawer"
            height="auto"
            :body-style="{ padding: 0, background: 'none', borderRadius: '25px 25px 0 0' }"
            wrap-class-name="custom-drawer">
            <div class="relative">
                <div
                    class="sticky py-1.5 bg-[#0b121a] rounded-t-[25px] w-full flex flex-col items-center justify-center shadow-sm z-10">
                    <div class="w-6 h-[4px] rounded-full bg-[#e4ebf5] active:opacity-60 active:duration-150"></div>
                    <h1 class="mt-3 text-[0.42rem] text-[#f6f7fb] text-center px-3 font-semibold tracking-wide">
                        {{ drawers[openDrawerIndex].title }}
                    </h1>
                    <span
                        role="img"
                        aria-label="close"
                        tabindex="-1"
                        class="anticon anticon-close absolute top-1.5 right-2 text-[0.55rem] text-[#4d515a] cursor-pointer"
                        @click="closeDrawer">
                        <svg
                            fill-rule="evenodd"
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="close"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
                        </svg>
                    </span>
                </div>
                <div class="pt-1 pb-3 px-2.5 bg-[#0b121a] rounded-t-[25px]">
                    <div class="text-[#979dad] text-[0.34rem] leading-[0.55rem]">
                        <div v-html="drawers[openDrawerIndex].content"></div>
                    </div>
                    <button
                        type="button"
                        class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center p-1 rounded-full bg-green-700 mt-3"
                        @click="closeDrawer">
                        <p class="text-md font-medium">Đã hiểu</p>
                    </button>
                </div>
            </div>
        </a-drawer>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ApexCharts from "apexcharts";
import { frame } from "@/assets/mobile/earn";
import { useRouter } from "vue-router";

const isScrolled = ref(false);

const onScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});

const router = useRouter();
const navigateBack = () => {
    router.back();
};

const chartOptions = ref({
    chart: {
        type: "area",
        height: 280,
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "Nunito, sans-serif",
    },
    colors: ["#16a34a"],
    dataLabels: { enabled: false },
    stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#16a34a"],
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "#16a34a",
                        opacity: 0.4,
                    },
                    {
                        offset: 100,
                        color: "#fff",
                        opacity: 0,
                    },
                ],
            ],
        },
    },
    xaxis: {
        categories: ["07/2024", "09/2024", "11/2024", "01/2025", "03/2025", "05/2025"],
        labels: {
            style: {
                colors: "#81888e",
                fontSize: "12px",
                fontWeight: 400,
            },
        },
    },
    yaxis: {
        min: 10,
        max: 35,
        tickAmount: 5,
        labels: {
            formatter: (val) => `${val}%`,
            style: {
                colors: "#81888e",
                fontSize: "11px",
                fontWeight: 400,
            },
        },
    },
    grid: {
        borderColor: "#171a1f",
        strokeDashArray: 5,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
    },
    tooltip: {
        y: {
            formatter: (val) => `${val}%`,
        },
    },
    legend: { show: false },
});

const chartSeries = ref([
    {
        name: "APY",
        data: [35, 30, 25, 20, 15, 10],
    },
]);

onMounted(() => {
    const chart = new ApexCharts(document.querySelector("#apy-chart"), {
        ...chartOptions.value,
        series: chartSeries.value,
    });
    chart.render();
});

const drawers = ref([
    {
        title: "FOIR hoạt động như thế nào?",
        content: `
            <p class="pb-0.5">
                Tính ưu việt của công nghệ blockchain đã sản sinh ra đa dạng các sản phẩm tích lũy
                bằng tài sản số, với mức lợi nhuận tốt hơn hẳn các sản phẩm tích lũy truyền thống.
                Tuy nhiên, người dùng phổ thông sẽ gặp nhiều trở ngại để tiếp cận sử dụng các sản
                phẩm tích lũy này, như thiếu kiến thức công nghệ, rủi ro tỷ giá, không có đội ngũ
                CSKH bài bản.
            </p>
            <p class="pb-0.5">
                <span class="text-green-600">FOIR</span> là giải pháp trung gian giúp người dùng dễ
                dàng tiếp cận tới các sản phẩm tài chính tích lũy trong lĩnh vực tài sản số, mà
                không cần am hiểu sâu về công nghệ blockchain.
            </p>
            <p>
                Hệ thống và thuật toán của <span class="text-green-600">FOIR</span> sẽ ngay lập tức
                tìm kiếm những sản phẩm tích lũy có mức lợi nhuận tốt nhất, với tỷ suất lãi ổn định
                qua nhiều năm và thông tin dự án minh bạch. Lợi nhuận từ hoạt động tích lũy sẽ được
                chia sẻ cho người dùng <span class="text-green-600">FOIR</span> theo giờ, với mức
                lãi quy năm (APR) thông thường từ 10% - 20% / năm.
            </p>
        `,
    },
    {
        title: "Tích lũy với FOIR có an toàn không?",
        content: `
            <p class="pb-0.5">
                Tất cả các khoản tích lũy của người dùng
                <span class="text-green-600">FOIR</span> được cam kết bảo toàn vốn gốc và có thể rút
                lãi &amp; gốc bất kỳ lúc nào. Để đảm bảo an toàn cho tài sản tích lũy,
                <span class="text-green-600">FOIR</span> áp dụng:
            </p>
            <p class="pb-0.5">
                Các sản phẩm được <span class="text-green-600">FOIR</span> lựa chọn tích lũy là các
                dự án hoặc sàn giao dịch đã được kiểm duyệt, có lịch sử trả lãi ổn định từ 4 năm trở
                lên, thông tin minh bạch và pháp lý được công nhận rộng rãi.
            </p>
            <p class="pb-0.5">
                <span class="text-green-600">FOIR</span> đã ký kết hợp tác chiến lược với sàn giao
                dịch Coincex để bảo lãnh và hỗ trợ thanh khoản cho 100% các giao dịch nạp rút tài
                sản của người dùng. Coincex sẽ đứng ra xử lý và bồi hoàn nếu người dùng không thể
                rút gốc và lãi theo như cam kết khi giao dịch trên
                <span class="text-green-600">FOIR</span>.
            </p>
            <p>
                Ngoài ra để tăng tính cam kết, <span class="text-[#37c883]">FOIR</span> dự kiến sẽ
                ra mắt Quỹ bảo hiểm trong tháng 5/2024. Thông tin sẽ được cập nhật tới cộng đồng
                trên website.
            </p>
        `,
    },
    {
        title: "So sánh FOIR với các sản phẩm tích lũy VNDC phổ biến trên thị trường",
        content: `
            <p class="pb-1.5">
                FOIR có mức lợi nhuận và linh hoạt vượt trội so với các sản phẩm tích lũy VNDC phổ
                biến trên thị trường:
            </p>
            <table class="table-oir">
                <thead>
                    <tr>
                        <th colspan="2">Tích lũy VNDC phổ biến</th>
                        <th>
                            <div class="flex items-center justify-center gap-0.5">
                                <img
                                    width="15"
                                    src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20380.28%20388.102'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%232dbd96;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M196.842,128.76c19.908,0,37.76,8.788,49.897,22.695l28.25-28.25c-19.392-21.109-47.223-34.34-78.147-34.34-58.589,0-106.085,47.496-106.085,106.085s47.496,106.085,106.085,106.085c28.842,0,54.993-11.512,74.119-30.186l-28.213-28.213c-11.901,11.459-28.08,18.504-45.906,18.504-36.556,0-66.189-29.634-66.189-66.189s29.634-66.189,66.189-66.189Z'/%3e%3cpath%20class='cls-1'%20d='M194.051,315.125c-66.868,0-121.074-54.206-121.074-121.074s54.206-121.074,121.074-121.074c36.416,0,69.071,16.075,91.273,41.514l51.675-51.675C301.526,24.204,250.618,0,194.051,0,86.88,0,0,86.88,0,194.051s86.88,194.051,194.051,194.051c52.758,0,100.594-21.058,135.58-55.216l-51.608-51.608c-21.77,20.961-51.365,33.848-83.971,33.848Z'/%3e%3crect%20class='cls-1'%20x='182.874'%20y='181.143'%20width='197.407'%20height='33.215'%20rx='16.607'%20ry='16.607'/%3e%3crect%20class='cls-1'%20x='274.99'%20y='129.318'%20width='103.032'%20height='33.215'%20rx='16.607'%20ry='16.607'/%3e%3crect%20class='cls-1'%20x='274.99'%20y='232.969'%20width='103.032'%20height='33.215'%20rx='16.607'%20ry='16.607'/%3e%3c/svg%3e"
                                    alt="" /><span class="text-green-600">Coincex OIR</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="!text-left">Trả lãi</td>
                        <td>Hàng ngày</td>
                        <td class="highlight">Hàng giờ</td>
                    </tr>
                    <tr>
                        <td class="!text-left">Lợi nhuận</td>
                        <td>3% - 12%/năm</td>
                        <td class="highlight">20.4% - 32.2%/năm</td>
                    </tr>
                    <tr>
                        <td class="!text-left">Hạn mức nhận lãi</td>
                        <td>Có</td>
                        <td class="highlight">Không</td>
                    </tr>
                </tbody>
            </table>
        `,
    },
]);
const openDrawerIndex = ref(null);

function openDrawer(idx) {
    openDrawerIndex.value = idx;
}
function closeDrawer() {
    openDrawerIndex.value = null;
}
</script>

<style>
.custom-drawer .ant-drawer-content-wrapper {
    border-radius: 25px 25px 0 0 !important;
    overflow: hidden;
    background: none !important;
}
.custom-drawer .ant-drawer-content {
    background: none !important;
}
.custom-drawer .ant-drawer-body {
    padding: 0 !important;
    background: #0b121a !important;
    border-radius: 25px 25px 0 0 !important;
}
.custom-drawer .ant-drawer-mask {
    background: rgba(0, 0, 0, 0.45) !important;
}

.table-oir {
    width: 100%;
    max-width: 600px;
    border-collapse: collapse;
    background-color: #1e252d;
    overflow: hidden;
    border-radius: 8px;
}

.table-oir th,
.table-oir td {
    padding: 8px 4px;
    text-align: center;
    border: 1px solid #2a3139;
    white-space: nowrap;
}
</style>
