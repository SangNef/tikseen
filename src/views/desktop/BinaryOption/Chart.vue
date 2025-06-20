<template>
    <div class="col-span-9 3xl:col-span-10 grid grid-cols-12 self-start gap-1">
        <div class="col-span-12">
            <div class="w-full bg-[#111419] flex items-center justify-start px-6">
                <div class="flex items-center gap-6 self-stretch border-r border-[#ffffff0f] pr-3 py-2">
                    <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium !text-xl text-[#515c70] cursor-pointer css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="StarIcon">
                        <path
                            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <div class="flex items-center gap-10 cursor-pointer select-none">
                        <div class="flex items-center gap-3">
                            <img width="36" src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png" alt="" />
                            <div class="flex flex-col justify-center items-start">
                                <h3 class="text-base font-semibold leading-6 tracking-wide">BTCUSDT</h3>
                                <span class="text-sm font-medium text-[#515c70] leading-4">Vĩnh cửu</span>
                            </div>
                        </div>
                        <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium !text-2xl text-[#515c70] css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="ArrowDropDownIcon">
                            <path d="m7 10 5 5 5-5z"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center gap-6 self-stretch border-r border-[#ffffff0f] py-2 px-6">
                    <div class="text-xl font-bold drop-shadow-2xl _color-token-up_qxfm5_1">104,718.00</div>
                </div>
                <div class="w-full flex items-center overflow-hidden _token-up_qxfm5_9">
                    <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                        <button
                            class="swiper-prev absolute left-0 z-20 h-full bg-[#111419] transition"
                            @click="goPrev"
                            style="top: 0">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" class="text-white">
                                <path
                                    d="M15 18l-6-6 6-6"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                        <swiper
                            :slides-per-view="'auto'"
                            :space-between="0"
                            class="w-full"
                            @swiper="
                                (swiper) => {
                                    swiperInstance = swiper;
                                }
                            ">
                            <swiper-slide v-for="(item, idx) in swiperItems" :key="idx" style="width: 150px">
                                <div class="flex items-center gap-6 self-stretch border-r border-[#ffffff0f] py-2 px-6">
                                    <div>
                                        <div
                                            class="text-[0.65rem] text-[#d9e1ff4d] uppercase font-medium whitespace-nowrap mb-1 select-none">
                                            {{ item.label }}
                                        </div>
                                        <div class="text-sm font-semibold" :class="item.class">
                                            {{ item.value }}
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                        <button
                            class="swiper-next absolute right-0 z-20 h-full bg-[#111419] transition"
                            @click="goNext"
                            style="top: 0">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" class="text-white">
                                <path
                                    d="M9 6l6 6-6 6"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="cursor-pointer flex items-center self-stretch border-l border-[#ffffff0f] py-2 pl-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                            fill="currentColor"></path>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="col-span-12 grid grid-cols-12 self-stretch gap-1 min-h-[555px] 3xl:min-h-[816px]">
            <div class="col-span-9 3xl:col-span-8 flex">
                <div class="flex justify-start w-full relative bg-[#131722] border border-[#363a45] rounded-sm">
                    <div class="relative self-stretch w-full">
                        <!-- Thêm header chart ở đây -->
                        <div class="flex justify-between">
                            <div class="w-full flex items-center p-2 border-b border-[#1c2129]">
                                <div class="flex items-center gap-2 text-sm">
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <span class="text-[#2962ff]">1m</span>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <span>5m</span>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <span>15m</span>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <span>30m</span>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <span>1h</span>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="chevron-down"
                                            class="svg-inline--fa fa-chevron-down text-xs"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                fill="currentColor"
                                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-[1px] h-full bg-[#434651] mx-3"></div>
                                <div class="flex items-center gap-1 text-sm">
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28"
                                            width="28"
                                            height="28">
                                            <g fill="none" stroke="#D1D4DC" stroke-linecap="square">
                                                <path
                                                    d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"
                                                    stroke="#D1D4DC"
                                                    fill="none"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28"
                                            width="28"
                                            height="28"
                                            fill="currentColor">
                                            <path
                                                d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"
                                                fill="#2962FF"></path>
                                            <path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z" fill="#2962FF"></path>
                                            <path
                                                d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"
                                                fill="#2962FF"></path>
                                            <path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z" fill="#2962FF"></path>
                                        </svg>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28"
                                            width="28"
                                            height="28">
                                            <path
                                                fill="#D1D4DC"
                                                fill-rule="evenodd"
                                                d="m25.35 5.35-9.5 9.5-.35.36-.35-.36-4.65-4.64-8.15 8.14-.7-.7 8.5-8.5.35-.36.35.36 4.65 4.64 9.15-9.14.7.7ZM2 21h1v1H2v-1Zm2-1H3v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1V9h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1Zm1 0v1H4v-1h1Zm1 0H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0H7v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0H9v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1h1v1Zm1 0v1h-1v-1h1Zm0-1v-1h-1v1h1Zm0 0v1h1v1h1v-1h-1v-1h-1Zm6 2v-1h1v1h-1Zm2 0v1h-1v-1h1Zm0-1h-1v-1h1v1Zm1 0h-1v1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h1v1Zm1 0h-1v1h1v-1Zm0-1h1v1h-1v-1Zm0-1h1v-1h-1v1Zm0 0v1h-1v-1h1Zm-4 3v1h-1v-1h1Z"></path>
                                        </svg>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28"
                                            width="28"
                                            height="28"
                                            fill="currentColor">
                                            <path
                                                d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"
                                                fill="#D1D4DC"></path>
                                            <path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z" fill="#D1D4DC"></path>
                                            <path
                                                d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"
                                                fill="#D1D4DC"></path>
                                            <path
                                                d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"
                                                fill="#D1D4DC"></path>
                                        </svg>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="chevron-down"
                                            class="svg-inline--fa fa-chevron-down text-xs"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                fill="currentColor"
                                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-[1px] h-full bg-[#434651] mx-3"></div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <div class="flex items-center gap-1 text-sm">
                                        <svg
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28"
                                            width="28"
                                            height="28"
                                            fill="none">
                                            <path
                                                stroke="#D1D4DC"
                                                d="M6 12l4.8-4.8a1 1 0 0 1 1.4 0l2.7 2.7a1 1 0 0 0 1.3.1L23 5"
                                                fill="none"></path>
                                            <path
                                                fill="#D1D4DC"
                                                fill-rule="evenodd"
                                                d="M19 12a1 1 0 0 0-1 1v4h-3v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v4h17V13a1 1 0 0 0-1-1h-3zm0 10h3v-9h-3v9zm-1 0v-4h-3v4h3zm-4-4.5V22h-3v-6h3v1.5zM10 22v-3H7v3h3z"></path></svg
                                        ><span>Indicators</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex p-2 border-b border-[#1c2129]">
                                <div class="w-[1px] h-full bg-[#434651] mx-3"></div>
                                <div class="flex items-center gap-1">
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28"
                                            width="28"
                                            height="28">
                                            <path
                                                fill="#D1D4DC"
                                                fill-rule="evenodd"
                                                d="M18 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                            <path
                                                fill="#D1D4DC"
                                                fill-rule="evenodd"
                                                d="M8.5 5h11l5 9-5 9h-11l-5-9 5-9Zm-3.86 9L9.1 6h9.82l4.45 8-4.45 8H9.1l-4.45-8Z"></path>
                                        </svg>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28"
                                            width="28"
                                            height="28">
                                            <path
                                                fill="#D1D4DC"
                                                d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                        <svg
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"
                                                fill="#D1D4DC"></path>
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
                                                fill="#D1D4DC"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End header -->
                        <div
                            class="w-full bg-[#181818] rounded-md flex items-center justify-center"
                            style="height: -webkit-fill-available">
                            <div
                                class="w-12 p-2 h-full border-r border-[#1c2129] flex flex-col items-center gap-2 bg-[#131723]">
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28">
                                        <g fill="#2962FF">
                                            <path d="M18 15h8v-1h-8z" fill="#2962FF"></path>
                                            <path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z" fill="#2962FF"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28">
                                        <g fill="#D1D4DC" fill-rule="nonzero">
                                            <path d="M7.354 21.354l14-14-.707-.707-14 14z" fill="#D1D4DC"></path>
                                            <path
                                                d="M22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"
                                                fill="#D1D4DC"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28">
                                        <g fill="#D1D4DC" fill-rule="nonzero">
                                            <path d="M3 5h22v-1h-22z" fill="#D1D4DC"></path>
                                            <path d="M3 17h22v-1h-22z" fill="#D1D4DC"></path>
                                            <path d="M3 11h19.5v-1h-19.5z" fill="#D1D4DC"></path>
                                            <path d="M5.5 23h19.5v-1h-19.5z" fill="#D1D4DC"></path>
                                            <path
                                                d="M3.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 12c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"
                                                fill="#D1D4DC"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28">
                                        <g fill="#D1D4DC" fill-rule="nonzero">
                                            <path
                                                d="M20.449 8.505l2.103 9.112.974-.225-2.103-9.112zM13.943 14.011l7.631 4.856.537-.844-7.631-4.856zM14.379 11.716l4.812-3.609-.6-.8-4.812 3.609zM10.96 13.828l-4.721 6.744.819.573 4.721-6.744zM6.331 20.67l2.31-13.088-.985-.174-2.31 13.088zM9.041 7.454l1.995 3.492.868-.496-1.995-3.492z"
                                                fill="#D1D4DC"></path>
                                            <path
                                                d="M8.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM12.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM20.5 8c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM23.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"
                                                fill="#D1D4DC"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28"
                                        fill="none">
                                        <path
                                            fill="#D1D4DC"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 6.5A2.5 2.5 0 0 1 6.95 6H24v1H6.95A2.5 2.5 0 0 1 2 6.5zM4.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 16.5a2.5 2.5 0 0 1 4.95-.5h13.1a2.5 2.5 0 1 1 0 1H6.95A2.5 2.5 0 0 1 2 16.5zM22.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-18 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 22.5a2.5 2.5 0 0 1 4.95-.5H24v1H6.95A2.5 2.5 0 0 1 2 22.5z"></path>
                                        <path
                                            fill="#D1D4DC"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M22.4 8.94l-1.39.63-.41-.91 1.39-.63.41.91zm-4 1.8l-1.39.63-.41-.91 1.39-.63.41.91zm-4 1.8l-1.4.63-.4-.91 1.39-.63.41.91zm-4 1.8l-1.4.63-.4-.91 1.39-.63.41.91z"></path>
                                    </svg>
                                </div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28">
                                        <g fill="#D1D4DC" fill-rule="nonzero">
                                            <path
                                                d="M1.789 23l.859-.854.221-.228c.18-.19.38-.409.597-.655.619-.704 1.238-1.478 1.815-2.298.982-1.396 1.738-2.776 2.177-4.081 1.234-3.667 5.957-4.716 8.923-1.263 3.251 3.785-.037 9.38-5.379 9.38h-9.211zm9.211-1c4.544 0 7.272-4.642 4.621-7.728-2.45-2.853-6.225-2.015-7.216.931-.474 1.408-1.273 2.869-2.307 4.337-.599.852-1.241 1.653-1.882 2.383l-.068.078h6.853z"
                                                fill="#D1D4DC"></path>
                                            <path
                                                d="M18.182 6.002l-1.419 1.286c-1.031.935-1.075 2.501-.096 3.48l1.877 1.877c.976.976 2.553.954 3.513-.045l5.65-5.874-.721-.693-5.65 5.874c-.574.596-1.507.609-2.086.031l-1.877-1.877c-.574-.574-.548-1.48.061-2.032l1.419-1.286-.672-.741z"
                                                fill="#D1D4DC"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28">
                                        <path
                                            fill="#D1D4DC"
                                            d="M8 6.5c0-.28.22-.5.5-.5H14v16h-2v1h5v-1h-2V6h5.5c.28 0 .5.22.5.5V9h1V6.5c0-.83-.67-1.5-1.5-1.5h-12C7.67 5 7 5.67 7 6.5V9h1V6.5Z"></path>
                                    </svg>
                                </div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28">
                                        <path
                                            fill="#D1D4DC"
                                            d="M4.05 14a9.95 9.95 0 1 1 19.9 0 9.95 9.95 0 0 1-19.9 0ZM14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm-3 13.03a.5.5 0 0 1 .64.3 2.5 2.5 0 0 0 4.72 0 .5.5 0 0 1 .94.34 3.5 3.5 0 0 1-6.6 0 .5.5 0 0 1 .3-.64Zm.5-4.53a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path>
                                    </svg>
                                </div>
                                <div class="w-full h-[1px] bg-[#434651] mx-3"></div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28">
                                        <path
                                            fill="#D1D4DC"
                                            d="M2 9.75a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h24a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5zm0 1h3v2.5h1v-2.5h3.25v3.9h1v-3.9h3.25v2.5h1v-2.5h3.25v3.9h1v-3.9H22v2.5h1v-2.5h3a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-5.5a.5.5 0 0 1 .5-.5z"
                                            transform="rotate(-45 14 14)"></path>
                                    </svg>
                                </div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28"
                                        fill="currentColor">
                                        <path d="M17.646 18.354l4 4 .708-.708-4-4z" fill="#D1D4DC"></path>
                                        <path
                                            d="M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
                                            fill="#D1D4DC"></path>
                                        <path d="M9 13h7v-1H9z" fill="#D1D4DC"></path>
                                        <path d="M13 16V9h-1v7z" fill="#D1D4DC"></path>
                                    </svg>
                                </div>
                                <div class="w-full h-[1px] bg-[#434651] mx-3"></div>
                                <div class="cursor-pointer hover:bg-[#2a2e39] rounded-md p-0.5 duration-150">
                                    <svg
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 28 28"
                                        width="28"
                                        height="28">
                                        <g fill="#D1D4DC" fill-rule="evenodd">
                                            <path
                                                fill-rule="nonzero"
                                                d="M14 10a2 2 0 0 0-2 2v11H6V12c0-4.416 3.584-8 8-8s8 3.584 8 8v11h-6V12a2 2 0 0 0-2-2zm-3 2a3 3 0 0 1 6 0v10h4V12c0-3.864-3.136-7-7-7s-7 3.136-7 7v10h4V12z"
                                                fill="#D1D4DC"></path>
                                            <path d="M6.5 18h5v1h-5zm10 0h5v1h-5z" fill="#D1D4DC"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div id="chart_container" style="width: 100%; height: inherit"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3 3xl:col-span-2 flex">
                <div class="w-full h-full bg-[#111419] flex flex-col items-center justify-start self-stretch">
                    <div class="flex flex-col justify-start order-book w-full">
                        <div class="flex items-center gap-3 px-2 py-2 select-none">
                            <div class="cursor-pointer" @click="orderTab = 'orderbook'">
                                <h3
                                    class="text-sm font-bold"
                                    :class="orderTab === 'orderbook' ? 'text-white' : 'text-gray-500'">
                                    Sổ lệnh
                                </h3>
                            </div>
                            <div class="3xl:hidden cursor-pointer" @click="orderTab = 'trades'">
                                <h3
                                    class="text-sm font-bold"
                                    :class="orderTab === 'trades' ? 'text-white' : 'text-gray-500'">
                                    Giao dịch gần đây
                                </h3>
                            </div>
                        </div>
                        <div v-if="orderTab === 'orderbook'" class="min-h-[568px] w-full">
                            <div class="flex items-center justify-between px-2 mb-1.5 select-none">
                                <div class="flex items-center gap-3">
                                    <img class="opacity-100 cursor-pointer" :src="logo1" alt="" /><img
                                        class="opacity-50 cursor-pointer"
                                        :src="logo2"
                                        alt="" /><img class="opacity-50 cursor-pointer" :src="logo3" alt="" />
                                </div>
                                <div
                                    class="flex items-center justify-center gap-2 bg-[#25282c] py-1 px-8 rounded-sm cursor-pointer">
                                    <span class="text-xs select-none">0.01</span
                                    ><svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="caret-down"
                                        class="svg-inline--fa fa-caret-down text-xs"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512">
                                        <path
                                            fill="currentColor"
                                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-center justify-between text-xs text-[#adb1b8] p-2 select-none">
                                <span class="flex items-center justify-start">Giá (USDT)</span
                                ><span class="flex items-center justify-center">Số lượng (BTC)</span
                                ><span class="flex items-center justify-end">Tổng số(BTC)</span>
                            </div>
                            <div class="text-white">
                                <div
                                    v-for="(bid, idx) in bids"
                                    :key="bid[0]"
                                    class="relative w-full grid grid-cols-3 p-1 text-xs drop-shadow-2xl font-medium mb-0.5 hover:bg-[#c0d2e7]/10 duration-100 cursor-pointer">
                                    <div
                                        class="absolute top-0 right-0 z-0 h-full duration-150 bg-[#01bc8d] opacity-[0.16]"
                                        :style="{
                                            width:
                                                maxBidTotal > 0
                                                    ? (
                                                          bids
                                                              .slice(0, idx + 1)
                                                              .reduce((acc, cur) => acc + Number(cur[1]), 0) /
                                                          maxBidTotal
                                                      ).toFixed(4) + '%'
                                                    : '0%',
                                        }"></div>
                                    <span
                                        class="relative z-10 flex items-center justify-start font-bold text-[#ef454a]"
                                        >{{
                                            Number(bid[0]).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })
                                        }}</span
                                    >
                                    <span class="relative z-10 flex items-center justify-center">{{
                                        Number(bid[1]).toFixed(4)
                                    }}</span>
                                    <span class="relative z-10 flex items-center justify-end">
                                        {{
                                            bids
                                                .slice(0, idx + 1)
                                                .reduce((acc, cur) => acc + parseFloat(cur[1]), 0)
                                                .toFixed(6)
                                        }}
                                    </span>
                                </div>

                                <div class="flex items-center justify-between px-1 py-1 border-y border-[#1d2433]">
                                    <span class="text-xl font-bold drop-shadow-xl text-[#dc1f4e]">84,734.54</span>
                                    <div>
                                        <span
                                            class="text-sm text-[#515c70] pr-1.5 cursor-help underline decoration-dashed"
                                            >Chênh lệch</span
                                        ><span class="text-sm font-bold text-[#8492a7]">1.6424</span>
                                    </div>
                                </div>
                                <div
                                    v-for="ask in asks"
                                    :key="ask[0]"
                                    class="relative w-full grid grid-cols-3 p-1 text-xs drop-shadow-2xl font-medium mb-0.5 hover:bg-[#c0d2e7]/10 duration-100 cursor-pointer">
                                    <div
                                        class="absolute top-0 right-0 z-0 h-full duration-150 bg-[#ef454a] opacity-[0.16]"
                                        :style="{
                                            width:
                                                maxAskTotal > 0
                                                    ? (
                                                          asks
                                                              .slice(0, idx + 1)
                                                              .reduce((acc, cur) => acc + Number(cur[1]), 0) /
                                                          maxAskTotal
                                                      ).toFixed(4) + '%'
                                                    : '0%',
                                        }"></div>
                                    <span
                                        class="relative z-10 flex items-center justify-start font-bold text-[#20b26c]"
                                        >{{
                                            Number(ask[0]).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })
                                        }}</span
                                    >
                                    <span class="relative z-10 flex items-center justify-center">{{
                                        Number(ask[1]).toFixed(4)
                                    }}</span>
                                    <span class="relative z-10 flex items-center justify-end">
                                        {{
                                            asks
                                                .slice(0, idx + 1)
                                                .reduce((acc, cur) => acc + parseFloat(cur[1]), 0)
                                                .toFixed(6)
                                        }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div v-else class="flex flex-col justify-start w-full min-h-[568px]">
                            <div
                                class="flex items-center justify-between px-2 my-1.5 select-none text-xs text-[#adb1b8]">
                                <span>Giá (USDT)</span>
                                <span>Số lượng (BTC)</span>
                                <span>Thời gian</span>
                            </div>
                            <div
                                v-for="trade in trades.slice(0, 16).reverse()"
                                :key="trade.id"
                                class="flex items-center justify-between px-2 text-xs font-medium"
                                :class="trade.isBuyerMaker ? 'text-[#dc1f4e]' : 'text-[#20b26c]'"
                                style="height: 24px">
                                <span>{{
                                    Number(trade.price).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })
                                }}</span>
                                <span class="text-white">{{ Number(trade.qty).toFixed(4) }}</span>
                                <span class="text-white">{{ new Date(trade.time).toLocaleTimeString() }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <History />
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { logo1, logo2, logo3 } from "@/assets/desktop/future";
import History from "./History.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";

let swiperInstance = null;

const goPrev = () => swiperInstance?.slidePrev();
const goNext = () => swiperInstance?.slideNext();

const swiperItems = [
    { label: "Giá đánh dấu", value: "104,154.50" },
    { label: "Giá chỉ số", value: "104,189.84" },
    { label: "Funding", value: "0.0023%", class: "text-amber-600" },
    { label: "Đếm ngược", value: "05:32:26" },
    { label: "Biến động 24h", value: "0.478%", class: "text-[#0fe28a]" },
    { label: "Khối lượng 24h (USDT)", value: "1460.35 triệu" },
    { label: "Khối lượng 24h (BTC)", value: "14,018.67" },
    { label: "Cao nhất 24h", value: "105,550.27" },
    { label: "Thấp nhất 24h", value: "103,615.33" },
    { label: "USDT/VND", value: "0" },
];

const bids = ref([]);
const asks = ref([]);
const trades = ref([]);
const orderTab = ref("orderbook");
let orderBookInterval = null;
let tradesInterval = null;

function fetchOrderBook() {
    fetch("https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=8")
        .then((res) => res.json())
        .then((data) => {
            bids.value = data.bids;
            asks.value = data.asks;
        });
}

function fetchTrades() {
    fetch("https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=16")
        .then((res) => res.json())
        .then((data) => {
            trades.value = data;
        });
}

function renderTV() {
    if (window.TradingView?.widget) {
        new window.TradingView.widget({
            autosize: true,
            symbol: "BINANCE:BTCUSDT",
            interval: "15",
            timezone: "Asia/Ho_Chi_Minh",
            theme: "dark",
            style: "1",
            locale: "vi",
            toolbar_bg: "#151821",
            enable_publishing: false,
            hide_top_toolbar: true,
            hide_legend: true,
            hide_side_toolbar: true,
            container_id: "chart_container",
            hide_volume: true,
        });
    }
}

onMounted(() => {
    if (window.TradingView?.widget) {
        renderTV();
    } else {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.onload = renderTV;
        document.body.appendChild(script);
    }
});

onMounted(() => {
    // TradingView chart
    if (window.TradingView?.widget) {
        renderTV();
    } else {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.onload = renderTV;
        document.body.appendChild(script);
    }
    // Order book realtime
    fetchOrderBook();
    orderBookInterval = setInterval(fetchOrderBook, 2000);
    // Trades realtime
    fetchTrades();
    tradesInterval = setInterval(fetchTrades, 2000);
});

onUnmounted(() => {
    if (orderBookInterval) clearInterval(orderBookInterval);
    if (tradesInterval) clearInterval(tradesInterval);
});

const maxAskTotal = computed(() =>
    asks.value.length
        ? asks.value.reduce((max, _, idx, arr) => {
              const sum = arr.slice(0, idx + 1).reduce((acc, cur) => acc + Number(cur[1]), 0);
              return Math.max(max, sum);
          }, 0)
        : 0
);

const maxBidTotal = computed(() =>
    bids.value.length
        ? bids.value.reduce((max, _, idx, arr) => {
              const sum = arr.slice(0, idx + 1).reduce((acc, cur) => acc + Number(cur[1]), 0);
              return Math.max(max, sum);
          }, 0)
        : 0
);
</script>

<style></style>
