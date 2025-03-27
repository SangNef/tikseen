<template>
    <div class="p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
        <p class="leading-[24px]">Chú ý</p>
        <p class="text-gray-600 text-sm leading-[24px]">Mã số 20250325-167 đã kết thúc,</p>
        <p class="text-gray-600 text-sm leading-[24px]">bây giờ tiến hành Vẽ số <span class="current-no">20250325-168</span></p>
        <p class="text-gray-600 text-sm leading-[24px]">Làm ơn hãy ghi chú lại</p>
        
        <!-- Button xác nhận -->
        <div 
            class="bg-red-600 px-2 py-1 cursor-pointer text-white rounded mt-2 text-sm"
            @click="closeModal"
        >
            Xác nhận ({{ countdown }})
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";

const countdown = ref(3);
const emit = defineEmits(["close"]);

const startCountdown = () => {
    const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
            clearInterval(timer);
            emit("close");
        }
    }, 1000);
};

const closeModal = () => {
    emit("close");
};

onMounted(startCountdown);
</script>
