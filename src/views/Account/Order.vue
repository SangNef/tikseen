<template>
    <div>
        <div
            class="py-3 px-[15px] flex items-center gap-2.5 mb-8 md:hidden"
            style="box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1)">
            <div class="w-12 h-12 border-3 border-black rounded-full flex items-center justify-center">
                <CheckIcon class="w-9 h-9 stroke-2" />
            </div>
            <div class="">
                <strong class="text-[17px] text-[#29cb97]">Xác minh tài khoản đã hoàn tất</strong>
                <p class="text-[12px] text-[#8f8f8f]">Giờ đây bạn có thể sử dụng tất cả các phương thức thanh toán</p>
            </div>
        </div>
        <div class="px-[15px] md:mt-8">
            <div
                class="bg-white rounded-[10px] px-[15px] py-5"
                style="box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.1)">
                <h4 class="text-[22px] font-bold text-center">Tổng quan giao dịch</h4>
                <div class="mt-2.5 mb-5">
                    <p class="text-[16px] text-[#8f8f8f]">Tổng tiền giao dịch</p>
                    <strong class="text-[24px]">VND 0</strong>
                </div>
                <div
                    v-for="(tx, i) in transactions"
                    :key="i"
                    class="bg-[#14161a] rounded-[2px] p-3 mb-5"
                    style="box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.05)">
                    <div class="flex rounded-lg items-center bg-white text-black p-3 text-sm gap-3">
                        <img :src="tx.img" alt="" class="w-6 h-6 rounded-full" />
                        <span>{{ tx.coin }}USDT</span>
                        <span class="text-[#29cb97]">Kết quả: {{ getResultText(tx.result, tx.vote) }}</span>
                    </div>
                    <div class="flex justify-between text-white text-[14px] items-center mt-3">
                        <span>Lệnh {{ getTypeText(tx.type) }}</span>
                        <span
                            :class="{
                                'text-[#29cb97]': (tx.result === 'pending') || (tx.result === tx.vote && (tx.result === 'up' || tx.result === 'down')),
                                'text-red-500':
                                    tx.result !== 'pending' &&
                                    tx.result !== tx.vote &&
                                    (tx.result === 'up' || tx.result === 'down'),
                            }">
                            {{ formatCurrency(tx.amount) }}
                        </span>
                        <span v-if="tx.result !== 'pending'">{{ formatCurrency(tx.profit) }}</span>
                    </div>
                    <div class="mt-3 text-white">
                        <span>Phiên: {{ tx.period }}</span>
                    </div>
                    <div class="mt-3 text-white">
                        <span>Mã lệnh: {{ tx.code }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/24/outline";
import transactions from "@/data/transaction";

const getResultText = (result, vote) => {
    if (result === "pending") return "Chờ";
    if ((result === "up" || result === "down") && result === vote) return "Thắng";
    if ((result === "up" || result === "down") && result !== vote) return "Thua";
    return "Không xác định";
};

function getTypeText(type) {
    switch (type) {
        case "buy":
            return "MUA";
        case "sell":
            return "BÁN";
        default:
            return "";
    }
}

function formatCurrency(value) {
    if (value === undefined || value === null || value === "") return "VND 0";

    const number = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(number)) return "VND 0";

    return "VND " + number.toLocaleString("en-US");
}
</script>

<style></style>
