<template>
    <a-drawer
        placement="left"
        :open="drawerLeftVisible"
        @close="$emit('update:drawerLeftVisible', false)"
        width="85%"
        :closable="false"
        class="ant-drawer-left css-1v613y0 trade-drawer-left">
        <div
            class="ant-drawer-body"
            style="padding: 0px; background: rgb(18, 18, 18); border-radius: 0px 5px 5px 0px; overflow: hidden">
            <div class="px-1">
                <div class="flex items-end justify-between py-2 font-semibold">
                    <h3 class="text-[0.55rem] text-white">Futures Zero</h3>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[#4c505d] uppercase text-default">usdt</span
                        ><span class="text-[#4c505d] uppercase">vndc</span>
                    </div>
                </div>
                <div class="relative">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="magnifying-glass"
                        class="svg-inline--fa fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-1.5 text-[#b0b3bb] text-md"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.05px"
                        height="15.05px"
                        viewBox="0 0 512 512">
                        <path
                            fill="currentColor"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg
                    ><input
                        type="text"
                        class="w-full bg-primary border border-secondary focus:border-primary rounded-sm p-1 pl-4 text-md font-medium active:duration-150"
                        placeholder="Tìm kiếm cặp giao dịch"
                        spellcheck="false" />
                </div>
            </div>
            <div class="px-1">
                <a-tabs v-model:activeKey="marketTabKey" class="ant-tabs-mobile mt-1 css-1v613y0" :animated="false">
                    <a-tab-pane key="1" tab="Vị thế (0)">
                        <!-- Nội dung tab Vị thế -->
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Lệnh chờ (0)">
                        <!-- Nội dung tab Lệnh chờ -->
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="Lịch sử lệnh">
                        <!-- Nội dung tab Lịch sử lệnh -->
                    </a-tab-pane>
                    <a-tab-pane key="4" tab="Lịch sử giao dịch">
                        <!-- Nội dung tab Lịch sử giao dịch -->
                    </a-tab-pane>
                </a-tabs>
            </div>
            <div class="pl-1.5 pr-0.5 py-1">
                <div
                    class="grid grid-cols-12 justify-between text-[#9fa1ad] text-[0.26rem] font-medium mt-1 shadow-2xl">
                    <div class="col-span-6 flex items-center gap-0.5">
                        <span class="whitespace-nowrap">Tài sản</span
                        ><svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="sort"
                            class="svg-inline--fa fa-sort"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6.97px"
                            height="11.17px"
                            viewBox="0 0 320 512">
                            <path
                                fill="currentColor"
                                d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"></path>
                        </svg>
                    </div>
                    <div class="col-span-6 grid grid-cols-12 gap-1.5">
                        <div class="col-span-12 flex items-center justify-end gap-0.5 mr-[0.25rem]">
                            <span class="whitespace-nowrap">Giá gần nhất</span
                            ><svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="sort"
                                class="svg-inline--fa fa-sort"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.97px"
                                height="11.17px"
                                viewBox="0 0 320 512">
                                <path
                                    fill="currentColor"
                                    d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"></path></svg
                            ><span>/</span><span class="whitespace-nowrap">Biến đống 24H</span
                            ><svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="sort"
                                class="svg-inline--fa fa-sort"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6.97px"
                                height="11.17px"
                                viewBox="0 0 320 512">
                                <path
                                    fill="currentColor"
                                    d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="markets_zero flex flex-col h-[75vh] overflow-hidden overflow-y-scroll pb-6">
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">BTC</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$826902.71K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$105,738.23</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+0.131%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-ETH-icon.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">ETH</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$880970.00K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$2,569.50</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+1.401%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5864.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">YFI</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$1015.66K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$5,108.00</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+0.216%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Binance-Coin-BNB-icon.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">BNB</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$56368.44K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$651.52</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+0.602%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">AVAX</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$22091.10K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$19.38</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+1.839%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">LTC</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$15150.49K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$86.59</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+1.003%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/131.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">DASH</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$600790.20</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$20.31</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+0.296%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">SOL</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$526876.62K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$155.81</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+6.844%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">AXS</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$1282.09K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$2.331</span>
                                    <div class="rounded-sm duration-150 text-[#e74c3c]">
                                        <p class="text-[0.25rem] font-bold">-0.257%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">MATIC</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$0.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$0.00</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+0%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">SHIB</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$10381.75K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$0.0000121</span>
                                    <div class="rounded-sm duration-150 text-[#e74c3c]">
                                        <p class="text-[0.25rem] font-bold">-0.247%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">TRX</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$46034.99K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$0.2715</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+0.000%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">ETC</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$3392.70K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$16.81</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+0.719%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">RNDR</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$0.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$0.00</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+0%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/28752.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">WIF</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$27221.72K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$0.878</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+4.276%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 justify-between py-1.5">
                        <div class="col-span-6 flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star text-yellow-500 text-[0.4rem]"
                                width="19.33px"
                                height="17.19px"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                            <div class="flex items-center gap-1">
                                <img
                                    class="rounded-full"
                                    width="28"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png"
                                    alt="" />
                                <div class="flex flex-col">
                                    <span class="text-[0.3rem] font-semibold text-white">SUI</span
                                    ><span class="text-[0.26rem] text-[#898b97]">$91024.86K</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 grid grid-cols-12 gap-1.5">
                            <div class="col-span-12 flex justify-end mr-[0.25rem]">
                                <div class="flex flex-col items-end">
                                    <span class="text-[0.3rem] font-semibold text-white">$3.0683</span>
                                    <div class="rounded-sm duration-150 text-[#27ae60]">
                                        <p class="text-[0.25rem] font-bold">+2.901%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-center text-gray-600 mt-1.5">Không còn dữ liệu</p>
                </div>
            </div>
        </div>
    </a-drawer>
</template>

<script setup>
defineProps({
    drawerLeftVisible: Boolean,
});
</script>

<style></style>
