<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="Tài khoản thanh toán" />
        <div class="my-4 p-4 bg-linear-to-l from-[#b39773] to-[#5b442d] rounded-xl relative">
            <p class="text-white block text-sm font-semibold uppercase">JACK SPARROW</p>
            <p class="mt-1 text-lg font-bold text-white relative">
                <span class="inline-block text-sm font-medium text-gray-400 w-20">Số dư</span>{{ formattedBalance }}
                <span class="absolute text-sm text-gray-400 font-medium pl-2">VND</span>
            </p>
            <img :src="logo2" width="80" height="80" class="absolute top-0 right-2 w-20 h-auto" alt="logo2" />
        </div>
        <div class="">
            <p class="text-white font-bold">Lịch sử giao dịch</p>
            <div class="w-full flex items-center bg-[#2b2b2b] p-0.75 rounded-lg mt-2 mb-4">
                <!-- <div class=" bg-linear-to-l from-[#b39773] to-[#5b442d] rounded-lg px-5 py-1 text-white">Toàn bộ</div> -->
                <div
                    v-for="item in menuItems"
                    :key="item.id"
                    @click="activeMenu = item.id"
                    :class="activeMenu === item.id ? 'bg-linear-to-l from-[#b39773] to-[#5b442d]' : 'bg-[#2b2b2b]'"
                    class="rounded-lg px-6 py-1 text-white text-sm">
                    {{ item.name }}
                </div>
            </div>
            <div v-for="(transaction, index) in filteredTransactions" :key="index" class="mt-2 border-b border-[#333] pb-2">
                <p class="text-gray-400 text-xs">{{ transaction.date }}</p>
                <div class="flex justify-between items-center">
                    <p class="text-white text-sm">{{ truncateText(transaction.description, 23) }}</p>
                    <p :class="transaction.amount > 0 ? 'text-[#d2c3ae]' : 'text-[#d75953]'" class="flex items-start gap-1">
                        {{ transaction.amount > 0 ? "+" : "-"
                        }}{{ Math.abs(transaction.amount).toLocaleString("en-US") }} <span class="text-xs font-light">VND</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import logo2 from "@/assets/images/logo2.png";
import Header from "@/components/Header.vue";

const balance = ref(12345678);
const formattedBalance = balance.value.toLocaleString("en-US");

const activeMenu = ref(0);
const menuItems = [
    { id: 0, name: "Toàn bộ" },
    { id: 1, name: "Tiền vào" },
    { id: 2, name: "Tiền ra" },
];

const transactions = ref([
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: 250000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: -120000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: 200000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: -80000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: 250000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: -120000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: 200000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: -80000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: 250000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: -120000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: 200000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: -80000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: 250000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: -120000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: 200000 },
    { date: "01/04/2025", description: "POS.12345678.123123.323231231", amount: -80000 },
]);

const filteredTransactions = computed(() => {
    if (activeMenu.value === 1) {
        return transactions.value.filter((t) => t.amount > 0);
    } else if (activeMenu.value === 2) {
        return transactions.value.filter((t) => t.amount < 0);
    }
    return transactions.value;
});

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

</script>

<style scoped>

</style>
