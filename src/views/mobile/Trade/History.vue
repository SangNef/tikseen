<template>
    <div class="relative border-t border-secondary">
        <div id="markets-tab" class="ant-tabs ant-tabs-top ant-tabs-mobile css-1v613y0">
            <div role="tablist" aria-orientation="horizontal" class="ant-tabs-nav" style="margin: 0px 1rem 0px 0.3rem">
                <a-tabs v-model:activeKey="activeKey" class="custom-tabs" :animated="false">
                    <a-tab-pane key="0" tab="Sổ lệnh">
                        <div class="min-h-[530px] mt-1 mx-0.5">
                            <div class="flex justify-between text-[#979aa3] text-[0.3rem]">
                                <div class="flex flex-col items-start"><span> Số lượng mua </span></div>
                                <div class="flex flex-col items-center"><span> Giá (USDT) </span></div>
                                <div class="flex flex-col items-end"><span> Số lượng bán </span></div>
                            </div>
                            <div class="order-book flex justify-center text-[0.3rem] mt-1">
                                <div class="bids flex justify-end w-full">
                                    <div class="w-full">
                                        <div
                                            v-for="(bid, idx) in bids"
                                            :key="'bid-' + idx"
                                            :style="`background: linear-gradient(to left, rgba(63, 179, 136, 0.2) ${bid.percent}%, transparent ${bid.percent}%);`">
                                            <div class="flex justify-between items-center py-[.1rem]">
                                                <div class="text-left flex justify-start">
                                                    <p class="text-[#979aa3]">{{ Number(bid.amount).toFixed(2) }}</p>
                                                </div>
                                                <div class="price text-right mr-[2px]">
                                                    <span class="text-[#3fb388]">{{ bid.price }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="asks w-full">
                                    <div class="w-full">
                                        <div
                                            v-for="(ask, idx) in asks"
                                            :key="'ask-' + idx"
                                            :style="`background: linear-gradient(to right, rgba(242, 71, 92, 0.2) ${ask.percent}%, transparent ${ask.percent}%);`">
                                            <div class="flex justify-between items-center py-[.1rem]">
                                                <div class="price text-left ml-[2px]">
                                                    <span class="text-[#f2475c]">{{ ask.price }}</span>
                                                </div>
                                                <div class="text-right flex justify-end">
                                                    <p class="text-[#979aa3]">{{ Number(ask.amount).toFixed(2) }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="1" :tab="`Lệnh mở (${openOrders})`">
                        <div class="flex flex-col min-h-[420px] pb-5 items-center justify-center">
                            <a-empty
                                :image="empty"
                                description="Chưa có dữ liệu"
                                class="!text-[0.32rem] !text-[#6a6a6a]" />
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Lịch sử giao dịch">
                        <div class="flex flex-col min-h-[520px]">
                            <div class="divide-y divide-default/60 mt-1.5 px-0.5">
                                <template v-for="(item, idx) in tradeHistory" :key="item.id">
                                    <div class="text-gray-300 text-[0.32rem] font-normal px-0.5 py-1">
                                        <div class="flex items-center justify-between mb-1 text-[0.36rem]">
                                            <div class="flex items-center gap-1">
                                                <span :class="item.result > 0 ? 'text-green-600' : 'text-red-600'">
                                                    {{ item.result > 0 ? '+' : '' }}{{ item.result.toFixed(4) }} USDT
                                                </span>
                                                <p
                                                    :class="[
                                                        'px-1 rounded-sm text-[0.22rem] font-normal py-[2px]',
                                                        item.status === 'success'
                                                            ? 'bg-green-600/10 border border-green-600/50 text-green-600'
                                                            : 'bg-red-600/10 border border-red-600/50 text-red-600',
                                                    ]">
                                                    {{ item.status === 'success' ? 'Thành công' : 'Thất bại' }}
                                                </p>
                                            </div>
                                            <div
                                                class="flex items-center gap-[2.5px] text-[0.34rem] active:opacity-60 duration-150">
                                                <span class="text-default">Xem chi tiết</span>
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 1024 1024"
                                                    fill="currentColor"
                                                    class="rv-icon rv-icon-arrow text-default">
                                                    <path
                                                        d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                                                        fill-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            v-for="field in tradeFields"
                                            :key="field.key"
                                            class="flex items-center justify-between mb-1">
                                            <div class="text-[#adb0b9]">{{ field.label }}</div>
                                            <div>
                                                <span
                                                    v-if="field.key === 'side'"
                                                    :class="
                                                        item[field.key] === 'MUA'
                                                            ? 'font-medium text-green-600'
                                                            : 'font-medium text-red-600'
                                                    "
                                                    >{{ item[field.key] }}</span
                                                >
                                                <span v-else>{{ item[field.key] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="Lịch sử thị trường">
                        <div class="flex flex-col min-h-[520px]">
                            <div class="divide-y divide-default/60 mt-1.5 px-0.5">
                                <template v-for="item in marketHistory" :key="item.block">
                                    <div class="text-gray-300 text-[0.32rem] px-0.5 py-1">
                                        <div class="flex items-center justify-between mb-1 text-[0.34rem]">
                                            <div class="flex items-center gap-1">
                                                <span class="text-[#adb0b9]">
                                                    * Block: <span class="text-green-600">#{{ item.block }}</span>
                                                </span>
                                            </div>
                                            <div
                                                class="flex items-center gap-[2.5px] text-[0.34rem] active:opacity-60 duration-150">
                                                <span class="text-default">Xem chi tiết</span>
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 1024 1024"
                                                    fill="currentColor"
                                                    class="rv-icon rv-icon-arrow text-default">
                                                    <path
                                                        d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z"
                                                        fill-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            v-for="field in marketFields"
                                            :key="field.key"
                                            class="flex items-center justify-between mb-1">
                                            <div class="text-[#adb0b9]">{{ field.label }}</div>
                                            <div>
                                                <template v-if="field.key === 'result'">
                                                    <span
                                                        v-if="item.result === 'up'"
                                                        class="font-medium text-green-600">
                                                        <span
                                                            role="img"
                                                            aria-label="caret-up"
                                                            class="anticon anticon-caret-up text-green-600">
                                                            <svg
                                                                viewBox="0 0 1024 1024"
                                                                focusable="false"
                                                                data-icon="caret-up"
                                                                width="1em"
                                                                height="1em"
                                                                fill="currentColor"
                                                                aria-hidden="true">
                                                                <path
                                                                    d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                                            </svg>
                                                        </span>
                                                        TĂNG
                                                    </span>
                                                    <span v-else class="font-medium text-red-600">
                                                        <span
                                                            role="img"
                                                            aria-label="caret-down"
                                                            class="anticon anticon-caret-down text-red-600">
                                                            <svg
                                                                viewBox="0 0 1024 1024"
                                                                focusable="false"
                                                                data-icon="caret-down"
                                                                width="1em"
                                                                height="1em"
                                                                fill="currentColor"
                                                                aria-hidden="true">
                                                                <path
                                                                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                                            </svg>
                                                        </span>
                                                        GIẢM
                                                    </span>
                                                </template>
                                                <template v-else>
                                                    <span>{{ item[field.key] }}</span>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </a-tab-pane>
                </a-tabs>
                <div class="ant-tabs-nav-operations" style="margin: 0px 1rem 0px 0.3rem"></div>
            </div>
        </div>
        <div class="absolute top-1.5 flex items-center right-1">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="list"
                class="svg-inline--fa fa-list text-[0.42rem] text-[#a8aab6]"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                    fill="currentColor"
                    d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { empty } from '@/assets/trade';
import { ref, onMounted, onUnmounted, watch } from 'vue';

const activeKey = ref('0');
const openOrders = 0;

const bids = ref([]);
const asks = ref([]);
let intervalId = null;

// Các trường dữ liệu giống nhau cho tradeHistory
const tradeFields = [
    { key: 'orderId', label: '* Mã lệnh' },
    { key: 'amount', label: '* Số tiền vào lệnh' },
    { key: 'side', label: '* Mở lệnh' },
    { key: 'symbol', label: '* Cặp giao dịch' },
    { key: 'createdAt', label: '* Thời gian vào lệnh' },
];

// Dữ liệu mẫu, thay bằng API thực tế
const tradeHistory = ref([
    {
        id: 1,
        result: -12.5,
        status: 'fail',
        orderId: '#20250531N2ZH24X8',
        amount: '12.5000 USDT',
        side: 'MUA',
        symbol: 'BTC/USDT',
        createdAt: '2025-05-31 11:32:31',
    },
    {
        id: 2,
        result: 15.093,
        status: 'success',
        orderId: '#20250531GEJBSJDR',
        amount: '7.7400 USDT',
        side: 'BÁN',
        symbol: 'BTC/USDT',
        createdAt: '2025-05-31 11:24:20',
    },
    // ... thêm dữ liệu
]);

const marketFields = [
    { key: 'result', label: '* Kết quả' },
    { key: 'open', label: '* Giá mở' },
    { key: 'close', label: '* Giá đóng' },
    { key: 'symbol', label: '* Cặp giao dịch' },
    { key: 'closedAt', label: '* Thời gian đóng' },
];

const marketHistory = ref([
    {
        block: '1950168715',
        result: 'up',
        open: '105465.3906 USDT',
        close: '105494.4922 USDT',
        symbol: 'BTC/USDT',
        closedAt: '2025-06-16 07:55:59',
    },
    {
        block: '1950168714',
        result: 'down',
        open: '105400.0000 USDT',
        close: '105371.8203 USDT',
        symbol: 'BTC/USDT',
        closedAt: '2025-06-16 07:53:59',
    },
    // ...thêm dữ liệu
]);

async function fetchOrderBook(symbol = 'BTCUSDT', limit = 10) {
    const url = `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=${limit}`;
    const res = await fetch(url);
    const data = await res.json();

    // Xử lý dữ liệu để tính phần trăm (percent) cho hiệu ứng màu
    const maxBid = Math.max(...data.bids.map((b) => parseFloat(b[1])));
    const maxAsk = Math.max(...data.asks.map((a) => parseFloat(a[1])));

    bids.value = data.bids.map((b) => ({
        price: Number(b[0]).toFixed(2),
        amount: b[1],
        percent: maxBid ? (parseFloat(b[1]) / maxBid) * 100 : 0,
    }));

    asks.value = data.asks.map((a) => ({
        price: Number(a[0]).toFixed(2),
        amount: a[1],
        percent: maxAsk ? (parseFloat(a[1]) / maxAsk) * 100 : 0,
    }));
}

watch(activeKey, (val) => {
    if (val === '0') {
        fetchOrderBook();
        if (!intervalId) {
            intervalId = setInterval(() => fetchOrderBook(), 2000);
        }
    } else {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
});

onMounted(() => {
    if (activeKey.value === '0') {
        fetchOrderBook();
        intervalId = setInterval(() => fetchOrderBook(), 2000);
    }
});

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.custom-tabs :deep(.ant-tabs-tab-btn) {
    font-size: 0.32rem;
    font-weight: 600;
    color: #a8aab6;
    user-select: none;
}
.custom-tabs :deep(.ant-tabs-tab-active .ant-tabs-tab-btn) {
    color: #a8aab6; /* hoặc đổi sang màu highlight hơn nếu muốn */
}
</style>
