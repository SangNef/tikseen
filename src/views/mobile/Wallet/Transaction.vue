<template>
    <div>
        <Header title="Lịch sử giao dịch" />
        <div class="fixed top-[1.25rem] bg-primary z-10 w-full flex items-center gap-1 p-1.5">
            <router-link
                v-for="(menu, idx) in menusWithLink"
                :key="'link-' + idx"
                :to="menu.to"
                class="flex items-center justify-center border border-secondary rounded-full px-1.5 py-0.5"
                :class="isActive(menu.index) ? 'bg-default' : 'bg-primary'"
                @click="activeIndex = menu.index">
                <span class="text-[0.32rem] font-medium text-gray-100">{{ menu.label }}</span>
            </router-link>

            <div
                v-for="(menu, idx) in menusWithoutLink"
                :key="'div-' + idx"
                class="flex items-center justify-center border border-secondary rounded-full px-1.5 py-0.5 bg-primary">
                <span class="text-[0.32rem] font-medium text-gray-100">{{ menu.label }}</span>
            </div>
        </div>
        <div class="pt-11">
            <div class="pt-[2px] bg-[#020202]"></div>
            <div class="pt-1">
                <div class="text-[0.34rem] font-medium mt-0.5">
                    <div
                        v-for="tx in filteredTransactions"
                        :key="tx.id"
                        class="bg-[#1b1b1b] p-1.5 rounded-md mx-1.5 mb-1.5 active:opacity-60 duration-150">
                        <!-- Header -->
                        <div class="flex items-center justify-between pb-1.5">
                            <div class="text-[#e8e8e8] flex items-center gap-0.5">
                                <span>TransID: {{ tx.id }}</span>
                                <svg
                                    class="svg-inline--fa fa-clone text-[0.32rem]"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13.75px"
                                    height="13.75px"
                                    viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M64 464h224c8.8 0 16-7.2 16-16v-64h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zm160-160h224c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z" />
                                </svg>
                            </div>
                            <div class="flex items-center gap-[2px] translate-x-0.5">
                                <p class="text-[0.32rem] text-yellow-500 whitespace-nowrap">Xem chi tiết</p>
                                <svg
                                    class="rv-icon text-secondary"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor">
                                    <path
                                        d="M711.156 508.035a41.472 41.472 0 01-11.126 20.023L366.12 861.97c-16.272 16.272-42.654 16.272-58.926 0s-16.272-42.654 0-58.926L611.767 498.47 307.241 193.944c-16.272-16.272-16.272-42.654 0-58.926 16.271-16.272 42.653-16.272 58.925 0L700.078 468.93c10.606 10.606 14.299 25.508 11.078 39.105z" />
                                </svg>
                            </div>
                        </div>

                        <!-- Amount -->
                        <div class="flex items-center justify-between pb-1.5">
                            <div class="text-[#e8e8e8]">Số lượng nhận</div>
                            <div class="flex items-center gap-0.5">
                                <p>{{ tx.amount }}</p>
                            </div>
                        </div>

                        <div v-if="tx.convertedAmount" class="flex items-center justify-between pb-1.5">
                            <div class="text-[#e8e8e8]">Số tiền nhận được</div>
                            <div class="flex items-center gap-0.5">
                                <p>{{ tx.convertedAmount }}</p>
                            </div>
                        </div>

                        <!-- Date & Status -->
                        <div class="flex items-center justify-between">
                            <span class="text-[#e8e8e8]">{{ tx.date }}</span>
                            <div class="flex items-center gap-0.5">
                                <p class="text-default">{{ tx.status }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center text-gray-300 pt-1.5 pb-3">
                    <p class="text-[0.32rem] text-center text-[#757575]">Không còn dữ liệu</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Header } from '@/components/mobile';

import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const type = ref('deposit'); // default

onMounted(() => {
    type.value = route.query.type || 'deposit';

    const index = menus.value.findIndex((m) => m.to?.includes(`type=${type.value}`));
    if (index !== -1) activeIndex.value = index;
});

const menus = ref([
    {
        label: 'Nạp tài sản',
        to: '/tx-history?type=deposit',
    },
    {
        label: 'Rút tài sản',
        to: '/tx-history?type=withdrawal',
    },
    {
        label: 'Chi tiết giao dịch',
    },
]);

const activeIndex = ref(1);

const menusWithLink = computed(() => menus.value.map((menu, index) => ({ ...menu, index })).filter((menu) => menu.to));

const menusWithoutLink = computed(() =>
    menus.value.map((menu, index) => ({ ...menu, index })).filter((menu) => !menu.to)
);

const isActive = (index) => index === activeIndex.value;

const transactions = ref([
    {
        id: '65018696264',
        amount: '20.0000 USDT',
        status: 'Thành công',
        date: '2025-05-31 11:16:58',
        type: 'withdrawal',
        convertedAmount: '480,000 VNĐ',
    },
    {
        id: '16858633411',
        amount: '+11.5447 USDT',
        status: 'Thành công',
        date: '2025-05-30 21:54:18',
        type: 'deposit',
    },
    {
        id: '14576414469',
        amount: '+20.0000 USDT',
        status: 'Thành công',
        date: '2025-05-30 21:16:16',
        type: 'deposit',
    },
]);

const filteredTransactions = computed(() => transactions.value.filter((tx) => tx.type === type.value));
</script>
<style></style>
