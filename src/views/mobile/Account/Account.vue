<template>
    <div class="!py-1.5 pb-3 select-none">
        <Header title="Trung tâm cài đặt" />
        <div class="!pt-6 !px-1.5 flex items-center" style="gap: 16px">
            <img class="w-5 rounded-full" :src="avatar" alt="" />
            <div class="relative w-full font-semibold text-gray-100 flex items-stretch justify-evenly flex-col">
                <div class="!mb-0.5 active:opacity-60 active:duration-150 flex items-center" style="gap: 6px">
                    <h3 class="max-w-[4.5rem] line-clamp-1 text-[0.4rem]">Member3798</h3>
                    <div class="bg-[#222208] px-0.5 py-[3px] rounded-sm flex items-center">
                        <span class="text-[0.26rem] text-[#dab82e]">Chưa xác minh</span>
                    </div>
                </div>
                <div class="flex">
                    <div
                        class="text-[0.32rem] text-[#999999] font-medium active:opacity-60 active:duration-150 flex items-center"
                        style="gap: 3px">
                        <span>UID: 8243838361</span
                        ><span role="img" aria-label="copy" class="anticon anticon-copy text-[0.28rem]"
                            ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="copy"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg
                        ></span>
                    </div>
                </div>
                <router-link
                    to="/account-settings/acc-info"
                    class="absolute right-0 text-gray-600 text-[0.32rem] mt-[0.06rem]">
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
                        class="rv-icon rv-icon-arrow">
                        <path
                            d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                            fill-rule="evenodd"></path>
                    </svg>
                </router-link>
            </div>
        </div>
        <div class="px-1.5">
            <div
                class="relative min-h-6 px-1.5 !mt-2.5 flex items-center"
                :style="{
                    backgroundImage: `url(${Mine})`,
                }"
                style="background-repeat: no-repeat; background-size: cover; border-radius: 12px; gap: 12px">
                <img class="w-3.5" :src="Gift" alt="" />
                <div class="flex flex-col items-stretch">
                    <p class="text-[0.32rem] font-semibold !mb-0.5">Chỉ cho Người dùng mới</p>
                    <p class="text-[0.28rem] text-[#95a39e] font-medium">
                        Phần thưởng lên đến <span class="text-[#0ea073]">10,800 USDT</span>!
                    </p>
                </div>
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
                    class="rv-icon rv-icon-arrow absolute right-1.5 text-[#0eaa79] text-[0.32rem] mt-[0.06rem]">
                    <path
                        d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                        fill-rule="evenodd"></path>
                </svg>
            </div>
        </div>
        <div
            class="min-h-8 !px-2 !mt-2 border-y-4 border-[#000000] active:opacity-60 active:duration-150 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-space-between"
            style="gap: 12px">
            <div class="flex flex-col items-stretch">
                <p class="text-[0.34rem] font-semibold !mb-0.5">Chương trình giới thiệu</p>
                <p class="text-[0.3rem] text-[#95a39e] font-medium">
                    Giới thiệu bạn bè để hưởng hoa hồng <span class="text-[#0ea073]">20%</span>
                </p>
            </div>
            <div class="relative">
                <img class="w-6" :src="Invite" alt="" /><span
                    class="absolute left-1/2 -translate-x-1/2 top-[0.48rem] text-[0.42rem] text-[#79828d] font-semibold"
                    >1</span
                >
            </div>
        </div>
        <div class="px-1.5">
            <div
                class="flex items-center justify-between gap-2 text-[0.4rem] py-2 active:opacity-60 active:duration-150">
                <router-link to="/account-settings/acc-info" class="flex items-center gap-2 text-[0.4rem]">
                    <span role="img" aria-label="user" class="anticon anticon-user !text-[0.52rem] text-[#f1f1f1]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="user"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg
                    ></span>
                    <div class="flex items-center gap-1">
                        <span class="text-[0.34rem] font-semibold text-[#f1f1f1]">Thông tin tài khoản</span>
                    </div>
                </router-link>
            </div>
            <div
                class="flex items-center justify-between gap-2 text-[0.4rem] py-2 active:opacity-60 active:duration-150">
                <div class="flex items-center gap-2 text-[0.4rem]">
                    <span
                        role="img"
                        aria-label="safety-certificate"
                        class="anticon anticon-safety-certificate !text-[0.52rem] text-[#f1f1f1]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="safety-certificate"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path></svg
                    ></span>
                    <div class="flex items-center gap-1">
                        <span class="text-[0.34rem] font-semibold text-[#f1f1f1]">Bảo mật</span>
                    </div>
                </div>
            </div>
            <div
                class="flex items-center justify-between gap-2 text-[0.4rem] py-2 active:opacity-60 active:duration-150">
                <div class="flex items-center gap-2 text-[0.4rem]">
                    <span role="img" aria-label="wallet" class="anticon anticon-wallet !text-[0.52rem] text-[#f1f1f1]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="wallet"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg
                    ></span>
                    <div class="flex items-center gap-1">
                        <span class="text-[0.34rem] font-semibold text-[#f1f1f1]">Đồng tiền cơ sở</span>
                    </div>
                </div>
                <span class="text-[0.32rem] text-[#6a6a6a] font-medium">USDT</span>
            </div>
            <div
                class="flex items-center justify-between gap-2 text-[0.4rem] py-2 active:opacity-60 active:duration-150">
                <router-link to="/events" class="flex items-center gap-2 text-[0.4rem]">
                    <span
                        role="img"
                        aria-label="schedule"
                        class="anticon anticon-schedule !text-[0.52rem] text-[#f1f1f1]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="schedule"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0025.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path></svg
                    ></span>
                    <div class="flex items-center gap-1">
                        <span class="text-[0.34rem] font-semibold text-[#f1f1f1]">Trung tâm sự kiện</span>
                    </div>
                </router-link>
            </div>
            <div
                class="flex items-center justify-between gap-2 text-[0.4rem] py-2 active:opacity-60 active:duration-150">
                <router-link
                    to="/invite?redirect=account-settings/center"
                    class="flex items-center gap-2 text-[0.4rem]">
                    <span role="img" aria-label="gift" class="anticon anticon-gift !text-[0.52rem] text-[#f1f1f1]"
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
                    <div class="flex items-center gap-1">
                        <span class="text-[0.34rem] font-semibold text-[#f1f1f1]">Giới thiệu bạn bè</span>
                        <p class="flex items-center justify-center bg-green-600 px-1 py-[0.08rem] rounded-sm">
                            <span class="font-medium text-[0.25rem]">Nhận 300k/người</span>
                        </p>
                    </div>
                </router-link>
            </div>
            <div
                class="flex items-center justify-between gap-2 text-[0.4rem] py-2 active:opacity-60 active:duration-150">
                <div class="flex items-center gap-2 text-[0.4rem]">
                    <span role="img" aria-label="global" class="anticon anticon-global !text-[0.52rem] text-[#f1f1f1]"
                        ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="global"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z"></path></svg
                    ></span>
                    <div class="flex items-center gap-1">
                        <span class="text-[0.34rem] font-semibold text-[#f1f1f1]">Tham gia cộng đồng Coincex</span>
                    </div>
                </div>
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
                    class="rv-icon rv-icon-arrow text-[0.32rem] text-gray-500">
                    <path
                        d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                        fill-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div class="!mt-2 px-1.5">
            <h3 class="text-[0.36rem] font-medium !mb-1.5 text-[#f1f1f1]">Hỗ trợ nhanh</h3>
            <div class="flex items-center gap-1.5">
                <router-link
                    to="http://t.me/coincex_chat_bot"
                    class="bg-primary border border-secondary active:opacity-80 active:duration-150 active:scale-95 w-full flex flex-col items-center justify-center gap-1 py-1 rounded-md"
                    target="_blank"
                    ><img
                        class="w-2.5 h-2.5"
                        width="25"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAACXBIWXMAAAsSAAALEgHS3X78AAAAY1BMVEVHcEwpofIpofIpofIpofIpofIpofIpofIpofIpofIpofIpofIpofIpofIpofIpofIpofL///82p/NfufWv3PrY7v3y+f7K6PyU0Pnl9P1Rs/RErfSi1vm94vuHyvh6xPdsvvaVrW77AAAAEHRSTlMAQNBQwPBgoCAQsJCAcOAwAW+5ngAABE5JREFUeNrNXOl66joMbNKskBRl34H3f8rDUu6lkNiTWAman/2KGWzPSLZlf30thuVFvuPQExzHjzzra2McYt+mSdh+fNiISODtXNLC3XnB6kxim2DY8Yp8Qs+hmXC8cJ1O2bu0AO6ev3ssnxbD5xWY5ZARHD46gU/G8HkGK4yIBRHDVP7+ISb8fJt2y44YsTPqnG+XWOEu75xwT+zYL+ycwKYVYAcShui/oVrgOR6tBm8uF59WhC+Iy0w2K3OZxWZHJIaNTySGzSZcQDYbcYHYeLQZtH5j0YbQeHHgbknGVcap0KZNYati+J42xl4RqGlzTGZbobs9GTf8XBQYyYvFDNLkQIU/nyHzMzZQEX0I0Yjd0ccQfC4+AhHTog/iNUY5nyTjCOqY165Zb8a0eVXl2ZxZs5qUTkVyw2mGoNaJ1l1dJg9kcPReJUJmQ/KEAY6X/HlvemySPyjhfJhb111eJq9A1c08fU9V8o4KjQkx5/jUTTKGQffB+JcMXxae5ckEam1uzjxKD1MZw4mwceLRUteXiQKZtgGPLfX9ayojSMFk2GU3lXeU+lbc23mjcSQsEy0qoKGDsbBHTeUdOdBUbJY9dHWTYKiB1nwTl5k2lXeckV2AC5mFk3bSVPq0XqLsCxYmnNOm0ly+tk/mhslH8rnA8s7TpjKko1xKqF1v9kJSZSrldWrkC5V9XVr6M01FZSbpBBdI2Vc5OVymUh5piguk7GuC5eCmonTaopvmAin7SobJVO6/PV8cs+/axkxF47RNq+SSEBsZTaZy8zk1l5KLzFkbCcvfQciNYraeDJCp3HxOzQVUtppMC0TC8iGU3DBmq8m0BRCNqw7gAipbQaYD8re7z12HU92HrSmZo55L8fiSVNOJZEqmxrM3HZfGmEyrodJkKBdY2YoJ3CM+h3BJepjMdKDsjoNW0AgXWNm6qJ3VhcLnMC5omLyQ0SZX6bn/+4XFU+MIF1jZPpZ2dqf8Ny40/fPvhLjAyo7whDzNLnj5E8QFVrZnsjeOccGVbS1dxF2BLbNnKNtgedsxrrMfy9vFC/8MJJPBYjLYEmlBMqiyY6PNInA/BG3uYLSN1pacynYNNxixZBBsbGe89drzickz35TOtBPnCLYUMGzXpwOPsm2eg4yzeh53uLA5Dg/SikHZAdvh13G6cwo0seI7FuwKQ2V7rAemtZGynwuMOI6SJxwQU/ae+5A97ZcrO+AvP8jKhcr21yjMGHFANOFco2Tl1QGHebpmrlnpqvlTxlqvzOnZAYf5M4b52P9/kVfpbCnxl8bdT+iaE/TP0epFg22WgYn4aNGgqHJKWYWmskpwRRUnyyrbllXQLqrUX9YlCFnXQ2RdnJF1pUjWZatN2My4FCfpgp6sq4uyLnXKuu568WJBF4FlXZGWdXlc1rV6YQ8OyHqKQdgjFbKe7xD2sImwJ1+EPYYj7JkgYQ8oSXtaStqjWys+R/YPiiPWw+dfqjIAAAAASUVORK5CYII="
                        alt="" /><span class="text-[0.28rem] text-[#f1f1f1]">Nhắn tin Telegram</span></router-link
                ><router-link
                    to="http://t.me/coincex_chat_bot"
                    class="bg-primary border border-secondary active:opacity-80 active:duration-150 active:scale-95 w-full flex flex-col items-center justify-center gap-1 py-1 rounded-md"
                    target="_blank"
                    ><img
                        class="w-2.5 h-2.5"
                        width="25"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAACXBIWXMAAAsSAAALEgHS3X78AAAAY1BMVEVHcEzwVFXwVFXwVFXwVFXwVFXwVFXwVFXwVFXwVFXwVFXwVFXwVFXwVFXwVFXwVFX////wVFX4qqr+9fXxX2DzdHX71dX3n6D5v8D96uryaWr0f4D83+D4tbX1ior2lJX6yspa1YXAAAAAEHRSTlMAYNCwEPBAoCDAkFCAcOAwcaig3QAABHdJREFUeNrtXOuSqjAMFgQKLBwtd+Tm+z/l2RHloAslCaWTM7Pfv9VZ+UhzbZOeTmR4ViSCQM4QBCKyvJNhXGJhy1XYIr4YIuJbZ1duwj1b/uFMYluCYccH8nGsQCIRWM4xQgldSYAb6hePJyQZQq+BeYHchUAfHV/I3RB6FsuJpBZEGlT564/UhD9fe8Vylhpx3iWcL1dqhUsXjhNK7QiJwvFteQBskll5rjwELsHnWPIwWFguQh4IwYgLks3BXFBszlKyYSOkZMPGCBcgG0NcQGwsaQyb/saTBrHhi33XJBlXGaccWxqFrYrhoTSMUJFLSeNYzbYc1zwZ19EaBW5Nn3yjb260vFjXImV9V1xnKLo+07NQDrYmGe7XBdx7bAWztFC4Wi1L6usK6gQnnmjB3aF+oEznj2+Lop3/nZaoH/N3xcdmkkpdDc306VBNn7fNnoiJiUnJSwBd/vlV3r1EluyIUfA9j+xpQPWwotdP8RRwzQmogsnrTbV4KlSdE0UD9nf5+KC78rWz0ejTnKQ1PpLLprWUSDY+IVpnKfQZI+sUqjchIUK28Pcd2bT4eAnNezuM7Ec2HTofBtp1j9ODkU2PtG6g+mYPox4QkfRh4BlOhWOE460wQadCuOL4SQaWhd8w7zmXJSzpslGrVCE04E3LKsw6wWwpe8QbbBr3iGMZwp5goeDhUxssmQbkr2fJMMzj1QgX9uEma5jfe5w3wpwG0qzfzBvmmi5gw07gi/9T1UqwcQuwJt4pddEdrPcC7GXgL7ik+GBPA1eZnEKmgf8nNOHswe+3KFOYr/SALi+hGfbLuGHxyQIWkgnF/f5TfRiZaMOYsrKYasc7jcxUkadFmW2YUwCuYhMamQRc9wZKMtVbQa+BjDqEB6etlFczGWVSfNrwENrJqCL/aSMX0U+moJC5XY8ho0hDT+rgfwSZnkAmOYpM8kvml8wvmePJBHzIBLzICD5kxHraaZ5MtJ6QmydjrZcqhwXKYb1UOfFJIVTlrenkylYV/qbTTqHcEtGTkHfQhDxWbxa9lyoljUwBLVUuG9to8yIuzWhkWmAR525uMH6Xt6/iNqdxyWaqqyxvzwbad3rovrRFOETGooJud/qY7XoabtBzHht3kEEWDGgXLSYd9uM1pkCsEuZQG4nx/AuyyR8c3g6HOBm0jm4p6sczU4iznDcY0Ru/8jKZMLy5k6xCnG2H5H6VmeF+pBnVJIXbs0MDeL7q72/ozNLPxGncK75NQaSFcREauiirn21F3ZDc6wVJqeFRW1YWY+ByvxP04C7Q0GDaKKkU8KMyT0MbsIJM2yEyDrGzAUyxTG2R9Lj+QX9va9yaAhMS5UhH0+C3Ca+YNgqLTYOUntd1pwfHl75G0/VwAMT5f2jBZdWczKttm1dDO6tWf15DELzGQ3gNzvAaKeI1bGWEDWIojtOAHq/RRV5DnbzGXXkNAvMakeY1PM5rrJ7ZhQO8rmJgdkkFr+s7mF1swuzKF2aX4TC7JojZBUrcrpbidunWgdeR/QV1KwQhMnpm3gAAAABJRU5ErkJggg=="
                        alt="" /><span class="text-[0.28rem] text-[#f1f1f1]">Nhắn tin CSKH</span></router-link
                >
            </div>
        </div>

        <p class="text-center mt-3 text-[0.3rem]">Version v2.01.8 (Build 1914)</p>
    </div>
</template>

<script setup>
import { Header } from "@/components/mobile";
import { avatar } from "@/assets/mobile/icons";
import { Gift, Mine, Invite } from "@/assets/mobile/account";
</script>

<style></style>
