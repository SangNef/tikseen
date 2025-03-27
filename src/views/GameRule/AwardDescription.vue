<template>
    <div>
        <Header title="5D - Mô tả giải thưởng" />
        <RulesMethod v-model:activeTab="activeTab" v-model:activeMethod="activeMethod" />

        <div class="p-3 page-content-94" style="background-color: rgb(235, 235, 235)">
            <div class="text-gray-500 text-sm p-4 bg-white">
                Lưu ý * Nếu người chơi sử dụng “10cent” làm đơn vị đặt lệnh, Thanh toán tối đa/ Đặt lệnh* 0.1; nếu người
                chơi sử dụng “cent” làm đơn vị cá lệnh, Thanh toán tối đa/ Đặt lệnh * 0.01
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import RulesMethod from "./RulesMethod.vue";

const activeTab = ref(0);
const activeMethod = ref(0);
</script>

<style></style>
