<template>
    <div></div>
    <div>
        <div
            class="h-[44px] w-full flex px-[30px] justify-center items-center text-white text-normal lg:text-[15px] lg:leading-[22px]"
            style="background: linear-gradient(270.05deg, rgb(211, 109, 247) -26.41%, rgb(23, 30, 217) 130.94%)">
            <div class="truncate" style="max-width: calc(100% - 100px)">
                Niêm yết 03 cặp giao dịch mới: BANDVNDC, BONDVNDC và STRAXVNDC
            </div>
            <router-link to="/help-center/announcements/niem-yet-03-cap-giao-dich-moi-bandvndc-bondvndc-va-straxvndc"
                ><span class="text-[#F8A032] font-bold ml-3 cursor-pointer">Xem thêm</span></router-link
            >
        </div>
        <div class="max-w-[1520px] px-12 mx-auto">
            <div class="flex items-center justify-between py-8 mt-3">
                <div>
                    <h1 class="text-[36px] leading-[150%] pb-2.5 font-bold text-white">Thị trường</h1>
                    <h3 class="text-[rgb(81,92,112)] text-[16px] font-semibold leading-[16px]">Futures vĩnh cửu</h3>
                </div>
                <div class="flex items-center">
                    <div class="pr-[60px] border-r border-[#151923]">
                        <div class="text-[12px] leading-[18px] font-semibold pb-2.5 text-[rgb(70,79,95)]">
                            Khối lượng HĐ mở(VND)
                        </div>
                        <div class="text-[28px] leading-[38px] text-white font-bold">
                            187<span class="text-[rgb(78,91,115)]">.89 tỷ</span>
                        </div>
                    </div>
                    <div class="ml-[60px]">
                        <div class="text-[12px] leading-[18px] font-semibold pb-2.5 text-[rgb(70,79,95)]">
                            Khối lượng 24h(VND)
                        </div>
                        <div class="text-[28px] leading-[38px] text-white font-bold">
                            1,185<span class="text-[rgb(78,91,115)]">.66 tỷ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between py-8 mt-20">
                <div class="flex items-center gap-3">
                    <div class="bg-[#1c202a] px-2 py-1.5 rounded shadow-sm cursor-pointer">
                        <span class="text-[#515c70] text-sm font-bold select-none whitespace-nowrap">Tất cả</span>
                    </div>
                    <div class="bg-[#1c202a] px-2 py-1.5 rounded shadow-sm cursor-pointer">
                        <span class="text-[#515c70] text-sm font-bold select-none whitespace-nowrap">Theo dõi</span>
                    </div>
                    <div class="bg-[#1c202a] px-2 py-1.5 rounded shadow-sm cursor-pointer">
                        <span class="text-[#515c70] text-sm font-bold select-none whitespace-nowrap">Tăng trưởng</span>
                    </div>
                    <div class="bg-[#1c202a] px-2 py-1.5 rounded shadow-sm cursor-pointer">
                        <span class="text-[#515c70] text-sm font-bold select-none whitespace-nowrap">Giảm giá</span>
                    </div>
                    <div class="bg-[#1c202a] px-2 py-1.5 rounded shadow-sm cursor-pointer">
                        <span class="text-[#515c70] text-sm font-bold select-none whitespace-nowrap">Xu hướng</span>
                    </div>
                    <div class="bg-[#1c202a] px-2 py-1.5 rounded shadow-sm cursor-pointer">
                        <span class="text-[#515c70] text-sm font-bold select-none whitespace-nowrap">Mới niêm yết</span>
                    </div>
                </div>
                <div class="relative">
                    <input
                        class="outline-none bg-[#090d17] border-b-2 border-[#21252e] focus:border-amber-700 min-w-[320px] px-3.5 pl-10 py-2 rounded-md font-semibold duration-100"
                        placeholder="Tìm kiếm"
                        spellcheck="false"
                        type="text" /><svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="magnifying-glass"
                        class="svg-inline--fa fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-[#515c70]"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 512 512">
                        <path
                            fill="currentColor"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                    </svg>
                </div>
            </div>
            <div class="mb-12">
                <div class="flex items-center py-3.5 text-xs font-bold border-y border-[#1d2433] text-[#464f5f]">
                    <div class="w-[16%] whitespace-nowrap select-none text-left"><span>Cặp</span></div>
                    <div class="w-[8%] whitespace-nowrap select-none text-right"><span>Giá</span></div>
                    <div class="w-[10%] whitespace-nowrap select-none text-right"><span>Biến động 24h</span></div>
                    <div class="w-[12%] whitespace-nowrap select-none text-right"><span>Khối lượng 24h</span></div>
                    <div class="w-[10%] whitespace-nowrap select-none text-right"><span>Cao nhất 24h</span></div>
                    <div class="w-[10%] whitespace-nowrap select-none text-right"><span>Thấp nhất 24h</span></div>
                    <div class="w-[18%] whitespace-nowrap select-none text-right">
                        <span>Khối lượng giao dịch (USDT)</span>
                    </div>
                </div>
                <div>
                    <div
                        v-for="coin in coins"
                        :key="coin.code"
                        class="flex items-center py-3.5 font-semibold text-sm border-b border-[#1d2433] pr-3">
                        <div class="w-[16%] flex items-center gap-3 text-left">
                            <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium !text-xl text-[#515c70] cursor-pointer css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                width="20px"
                                height="20px"
                                fill="currentColor"
                                data-testid="StarIcon">
                                <path
                                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <div class="flex items-center gap-3">
                                <img width="32" class="select-none rounded-full" :src="coin.image" :alt="coin.code" />
                                <div class="flex flex-col justify-center items-start">
                                    <h3 class="font-semibold tracking-wide">
                                        <span>{{ coin.code }}</span
                                        ><span class="text-[#515c70]">{{ coin.code === "BTC" ? "USDT" : "" }}</span>
                                    </h3>
                                </div>
                            </div>
                            <a-tag color="rgba(0, 104, 255, 0.16)" :style="{ color: '#0068ff', fontWeight: 'bold' }">
                                125x
                            </a-tag>
                        </div>
                        <div class="w-[8%] text-right">
                            <span>{{ coin.price }}</span>
                        </div>
                        <div class="w-[10%] text-right">
                            <span :class="coin.change24h < 0 ? 'text-red-500' : 'text-green-500'">
                                {{ coin.change24h > 0 ? "+" : "" }}{{ coin.change24h }}%
                            </span>
                        </div>
                        <div class="w-[12%] text-right">
                            <span>{{ coin.volumn24h }}</span>
                        </div>
                        <div class="w-[10%] text-right">
                            <span>{{ coin.max24h }}</span>
                        </div>
                        <div class="w-[10%] text-right">
                            <span>{{ coin.min24h }}</span>
                        </div>
                        <div class="w-[18%] text-right">
                            <span>{{ coin.transaction }}M USDT</span>
                        </div>
                        <div class="w-[11%] text-right">
                            <a-button
                                type="default"
                                class="font-semibold custom-trade-btn"
                                :style="{
                                    background: '#01bc8d',
                                    borderColor: '#01bc8d',
                                    color: '#fff',
                                }">
                                Giao dịch
                            </a-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { coins } from "@/assets/desktop/coin";
</script>

<style>
.custom-trade-btn:hover {
    color: #019f77 !important;
    border-color: #019f77 !important;
    background: #ffffff !important;
}
</style>
