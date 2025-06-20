<template>
    <div class="!pb-6">
        <div
            class="rv-nav-bar rv-nav-bar--fixed rv-hairline--bottom max-w-40 left-0 bg-primary border-b border-[#f3f3f31f] py-0.5"
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
                        <span class="text-white text-[0.42rem] font-medium whitespace-nowrap">Phần thưởng</span>
                    </div>
                </div>
                <div class="rv-nav-bar__right">
                    <div class="flex items-center gap-2">
                        <span
                            role="img"
                            aria-label="calendar"
                            tabindex="-1"
                            class="anticon anticon-calendar !text-[0.5rem]"
                            ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="calendar"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg></span
                        ><router-link to="/invite-reward-history" data-discover="true"
                            ><span role="img" aria-label="history" class="anticon anticon-history !text-[0.5rem]"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="history"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"></path></svg></span
                        ></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-8 px-1.5">
            <div class="text-center">
                <p class="text-[0.44rem] font-semibold">Mời bạn bè để kiếm tiền</p>
                <p class="text-[0.48rem] font-bold !my-0.5">
                    Nhận thưởng đến <span class="text-default">35% Hoa hồng</span>
                </p>
                <p class="text-[0.32rem] font-semibold text-secondary">
                    Mời bạn bè đăng ký và giao dịch để chia sẻ phần thưởng hoa hồng cao nhất lên đến 35%!
                </p>
            </div>
            <InviteRewardGif />
            <div
                class="border border-[#00c288]/[0.2] rounded-md px-1.5 pt-1.5 pb-1 mt-2"
                :style="{ backgroundImage: `url(${center})` }"
                style="background-size: cover; background-repeat: no-repeat; background-clip: padding-box">
                <div class="text-[0.28rem] font-semibold mb-1 flex items-center justify-around">
                    <div class="w-full">
                        <div class="w-full cursor-pointer flex flex-col items-center" style="gap: 8px">
                            <p class="text-center text-default">
                                Liên hệ đại lý nhận<br />
                                thưởng<span
                                    role="img"
                                    aria-label="info-circle"
                                    class="anticon anticon-info-circle text-[0.26rem] ml-0.5"
                                    ><svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="info-circle"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        class="inline-block"
                                        aria-hidden="true">
                                        <path
                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path
                                            d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg
                                ></span>
                            </p>
                            <span class="text-[0.38rem]">0.0000 USDT</span>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="w-full cursor-pointer flex flex-col items-center" style="gap: 8px">
                            <p class="text-center text-default">
                                Phần thưởng có thể<br />
                                nhận ngay<span
                                    role="img"
                                    aria-label="info-circle"
                                    class="anticon anticon-info-circle text-[0.26rem] ml-0.5"
                                    ><svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="info-circle"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        class="inline-block"
                                        aria-hidden="true">
                                        <path
                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path
                                            d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg
                                ></span>
                            </p>
                            <span class="text-[0.38rem]">0.0000 USDT</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-1.5 flex items-center justify-between text-[14px]" style="gap: 16px">
                <button
                    class="_mk-button_1tkv1_1 _button-animate_breath_1tkv1_16 whitespace-nowrap active:opacity-60 duration-150">
                    <div class="_mk-button_animate_1tkv1_28 animation-btn"></div>
                    <span class="">Nhận thưởng ngay</span></button
                ><button
                    class="_mk-button_1tkv1_1 _button-animate_breath_1tkv1_16 whitespace-nowrap _share_1tkv1_50 active:opacity-60 duration-150">
                    <div class="_mk-button_animate_1tkv1_28"></div>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        role="img"
                        aria-label="share-o"
                        focusable="false"
                        data-icon="share-o"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                        class="rv-icon rv-icon-share-o mr-0.5">
                        <path
                            d="M607.651 120.192l324.795 316.981c16.478 16.106 16.602 42.164.308 58.206L607.342 815.552c-16.313 16.042-29.538 10.121-29.538-12.809V635.287C109.358 635.287 57.572 880.73 56 888.779l.45-17.767c4.604-91.379 51.475-502.827 521.354-570.618V132.917c0-23.098 13.225-28.935 29.847-12.725zm32.684 120.169l.037 60.033c0 31.772-22.94 58.7-53.8 63.152C386.401 392.425 258.8 488.09 184.921 630.456a551.876 551.876 0 00-11.054 22.547l-3.663 8.373 9.905-5.718c92.745-51.281 215.82-81.075 372.651-83.926l25.044-.226c32.087 0 58.533 24.622 62.147 56.343l.42 7.438-.036 59.127 231.624-227.951L640.335 240.36z"
                            fill-rule="nonzero"></path></svg
                    ><span>Chia sẻ</span>
                </button>
            </div>
            <p class="text-[0.36rem] font-semibold !mt-5 !ml-0.5 !mb-1 flex items-center">
                <span role="img" aria-label="rocket" class="anticon anticon-rocket mr-0.5 inline-block"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="rocket"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"></path></svg
                ></span>
                Thống kê giới thiệu
            </p>
            <div class="relative border border-[#01bc8d33] rounded-t-md p-1.5 rounded-md">
                <div
                    style="
                        position: absolute;
                        border-radius: 12px;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 80px;
                        opacity: 0.2;
                        background: linear-gradient(rgba(1, 188, 141, 0.4) 0%, rgba(1, 188, 141, 0) 100%);
                    "></div>
                <div>
                    <p
                        class="flex items-center gap-1 text-ellipsis overflow-hidden text-[0.38rem] text-secondary font-medium">
                        Tổng giới thiệu thành công
                    </p>
                    <span class="text-[0.4rem] font-bold">0 thành viên</span>
                </div>
                <div class="mt-1.5">
                    <div
                        class="w-full text-ellipsis overflow-hidden text-[0.36rem] font-medium mb-1 flex items-center justify-between">
                        <span class="text-secondary">Thành viên nạp đầu</span>
                        <p class="text-default font-semibold">0 người</p>
                    </div>
                    <div
                        class="w-full text-ellipsis overflow-hidden text-[0.36rem] font-medium mb-1 flex items-center justify-between">
                        <span class="text-secondary">Thành viên nạp lần 2 - 4</span>
                        <p class="text-default font-semibold">0 người</p>
                    </div>
                </div>
                <p class="text-[0.32rem] font-semibold text-secondary mt-1.5">
                    <span role="img" aria-label="info-circle" class="anticon anticon-info-circle mr-0.5 inline-block"
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
                    Lưu ý: Tất cả dữ liệu đều dựa theo giờ UTC+07:00. Dữ liệu này được tính từ 00:00 ngày 26/05/2025 .
                </p>
            </div>
            <p class="text-[0.36rem] font-semibold !mt-2 !ml-0.5 !mb-1 flex items-center">
                <span
                    role="img"
                    aria-label="deployment-unit"
                    class="anticon anticon-deployment-unit mr-0.5 inline-block"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="deployment-unit"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M888.3 693.2c-42.5-24.6-94.3-18-129.2 12.8l-53-30.7V523.6c0-15.7-8.4-30.3-22-38.1l-136-78.3v-67.1c44.2-15 76-56.8 76-106.1 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 49.3 31.8 91.1 76 106.1v67.1l-136 78.3c-13.6 7.8-22 22.4-22 38.1v151.6l-53 30.7c-34.9-30.8-86.8-37.4-129.2-12.8-53.5 31-71.7 99.4-41 152.9 30.8 53.5 98.9 71.9 152.2 41 42.5-24.6 62.7-73 53.6-118.8l48.7-28.3 140.6 81c6.8 3.9 14.4 5.9 22 5.9s15.2-2 22-5.9L674.5 740l48.7 28.3c-9.1 45.7 11.2 94.2 53.6 118.8 53.3 30.9 121.5 12.6 152.2-41 30.8-53.6 12.6-122-40.7-152.9zm-673 138.4a47.6 47.6 0 01-65.2-17.6c-13.2-22.9-5.4-52.3 17.5-65.5a47.6 47.6 0 0165.2 17.6c13.2 22.9 5.4 52.3-17.5 65.5zM522 463.8zM464 234a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm170 446.2l-122 70.3-122-70.3V539.8l122-70.3 122 70.3v140.4zm239.9 133.9c-13.2 22.9-42.4 30.8-65.2 17.6-22.8-13.2-30.7-42.6-17.5-65.5s42.4-30.8 65.2-17.6c22.9 13.2 30.7 42.5 17.5 65.5z"></path></svg
                ></span>
                Thống kê phần thưởng
            </p>
            <div class="relative border border-[#01bc8d33] rounded-t-md p-1.5 rounded-md">
                <div
                    style="
                        position: absolute;
                        border-radius: 12px;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 80px;
                        opacity: 0.2;
                        background: linear-gradient(rgba(1, 188, 141, 0.4) 0%, rgba(1, 188, 141, 0) 100%);
                    "></div>
                <div>
                    <div
                        class="flex items-center gap-1 text-ellipsis overflow-hidden text-[0.38rem] text-secondary font-medium">
                        Tổng thu nhập
                        <div>
                            <span role="img" aria-label="eye" tabindex="-1" class="anticon anticon-eye"
                                ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="eye"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true">
                                    <path
                                        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg
                            ></span>
                        </div>
                    </div>
                    <span class="text-[0.4rem] font-bold">0 USDT</span>
                </div>
                <div class="mt-1.5">
                    <div
                        class="w-full text-ellipsis overflow-hidden text-[0.36rem] font-medium mb-1 flex items-center justify-between">
                        <span class="text-secondary">Phần thưởng nạp đầu</span>
                        <p class="text-default font-semibold">0 USDT</p>
                    </div>
                    <div
                        class="w-full text-ellipsis overflow-hidden text-[0.36rem] font-medium mb-1 flex items-center justify-between">
                        <span class="text-secondary">Phần thưởng nạp lần 2 - 4</span>
                        <p class="text-default font-semibold">0 USDT</p>
                    </div>
                </div>
                <p class="text-[0.32rem] font-semibold text-secondary mt-1.5 flex">
                    <span role="img" aria-label="info-circle" class="anticon anticon-info-circle mr-0.5 inline-block"
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
                    Lưu ý: Tất cả dữ liệu đều dựa theo giờ UTC+07:00. Dữ liệu này được tính từ 00:00 ngày 26/05/2025 .
                </p>
            </div>
        </div>
        <KocBlock />
        <div class="px-1.5">
            <div>
                <p class="text-[0.42rem] font-semibold !mt-4 !mb-2.5">Cách mời bạn bè?</p>
                <div>
                    <div class="!mb-3 flex items-center" style="gap: 16px">
                        <img class="w-5 h-5" :src="invite1" alt="" />
                        <div>
                            <h4 class="text-[0.34rem] !mb-0.5 font-semibold">
                                Chia sẻ mã hoặc liên kết giới thiệu của bạn
                            </h4>
                            <p class="text-[0.32rem] font-medium text-secondary">
                                Chia sẻ mã giới thiệu của bạn và cho bạn bè khám phá tất cả những gì CoinCEX mang lại!
                            </p>
                        </div>
                    </div>
                    <div class="relative !mb-3 flex items-center" style="gap: 16px">
                        <img class="w-5 h-5" :src="invite2" alt="" />
                        <div>
                            <h4 class="text-[0.34rem] !mb-0.5 font-semibold">Kết nối với bạn bè</h4>
                            <p class="text-[0.32rem] font-medium text-secondary">
                                Khi một người bạn được mời đăng ký tài khoản, họ sẽ được liên kết với bạn.
                            </p>
                        </div>
                        <div class="bg-[#f2f2f214] absolute -top-4 left-2.5 w-[1px] h-4"></div>
                        <div class="bg-[#f2f2f214] absolute -bottom-4 left-2.5 w-[1px] h-4"></div>
                    </div>
                    <div class="!mb-3 flex items-center" style="gap: 16px">
                        <img class="w-5 h-5" :src="invite3" alt="" />
                        <div>
                            <h4 class="text-[0.34rem] !mb-0.5 font-semibold">
                                Nhận hoa hồng và nhiều phần thưởng khác
                            </h4>
                            <p class="text-[0.32rem] font-medium text-secondary">
                                Mời bạn bè giao dịch và nhận thưởng tự động. Bạn bè của bạn cũng có cơ hội nhận hoàn
                                tiền và các phần thưởng độc quyền dành cho người mới!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { center, invite1, invite2, invite3, mkButton } from "@/assets/mobile/invite";
import InviteRewardGif from "./InviteRewardGif.vue";
import KocBlock from "./KocBlock.vue";

const router = useRouter();
const navigateBack = () => {
    router.back();
};
</script>

<style scoped>
._button-animate_breath_1tkv1_16 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 24px;
    border-radius: 24px;
    background-color: #00d897;
    color: #1d1d1d;
    animation: _mk-btn-breath_1tkv1_1 1.1s 0s cubic-bezier(0, 0, 0.58, 1) infinite;
}

._mk-button_1tkv1_1 {
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

._button-animate_breath_1tkv1_16._share_1tkv1_50 {
    animation: none;
    background-color: #f3f3f314;
    color: #fff;
}

@keyframes _mk-btn-breath_1tkv1_1 {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.97);
    }
    100% {
        transform: scale(1);
    }
}

._button-animate_breath_1tkv1_16 ._mk-button_animate_1tkv1_28.animation-btn {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-image: url("@/assets/invite/mk-button.png");
    background-repeat: no-repeat;
    animation: _mk-btn-move_1tkv1_1 2s cubic-bezier(0.16, 0.2, 0.93, 1.11) 0s infinite;
}

@keyframes _mk-btn-move_1tkv1_1 {
    0% {
        transform: translate(-100%);
    }
    50% {
        transform: translate(100%);
    }
    100% {
        visibility: visible;
    }
}
</style>
