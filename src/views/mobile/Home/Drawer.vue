<template>
    <a-drawer
        v-model:visible="visible"
        placement="bottom"
        :closable="false"
        height="auto"
        :body-style="{
            padding: '16px 12px',
            background: '#121212',
            borderRadius: '25px 25px 0 0',
            borderTop: '2px solid rgba(1, 188, 141, 0.3)',
            maxWidth: '10rem',
            margin: '0 auto',
            color: '#fff',
        }">
        <div class="text-[0.46rem] font-bold !mb-1.5 flex items-center justify-center" style="gap: 12px">
            <span role="img" aria-label="warning" class="anticon anticon-warning text-red-500"
                ><svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="warning"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path></svg
            ></span>
            <span>Cảnh báo an toàn thông tin</span>
            <span role="img" aria-label="warning" class="anticon anticon-warning text-red-500"
                ><svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="warning"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path></svg
            ></span>
        </div>

        <p class="px-2.5 text-center font-semibold !mb-2">
            Tuyệt đối không
            <span class="text-default">chuyển tiền</span> hoặc gửi <span class="text-default">mã OTP</span> cho bất kỳ
            ai trong bất cứ trường hợp nào, kể cả người tự xưng là nhân viên hay đối tác của CoinCEX.
        </p>

        <img class="w-20 mx-auto !mb-1.5" :src="Passkey" alt="" />

        <div class="px-2.5 !mb-2">
            <p class="font-semibold text-[0.34rem] !mb-1">Các hình thức lừa đảo phổ biến:</p>
            <div class="text-[0.32rem] font-medium space-y-[0.1rem]">
                <p>– Lôi kéo giao dịch riêng (1:1).</p>
                <p>– Mua bán cấp độ VIP, mã quà tặng (CODE).</p>
                <p>– Mua bán tài khoản TikTok Lite, dụ dỗ tham gia ứng dụng cờ bạc (xanh đỏ, tài xỉu,...).</p>
                <p class="text-red-500 font-semibold">👉 Tất cả các hình thức trên đều là hành vi lừa đảo.</p>
                <p class="mt-1">
                    <strong>Coin<span class="text-default">CEX</span></strong> tuyệt đối không yêu cầu người dùng cung
                    cấp mã OTP hoặc chuyển tiền qua bất kỳ kênh không chính thức nào.
                </p>
            </div>
        </div>

        <div class="px-2.5 mt-2.5 !mb-1">
            <a-button
                block
                type="primary"
                class="!bg-[#00c189] !text-white font-medium h-[48px] rounded-full"
                :disabled="buttonDisabled"
                @click="visible = false">
                <span class="!text-invalid !font-bold">
                    {{ buttonDisabled ? `Đã hiểu (${countdown}s)` : 'Đã hiểu' }}
                </span>
            </a-button>
        </div>
    </a-drawer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Passkey } from '@/assets/home';

const visible = ref(true);
const countdown = ref(3); // bộ đếm 3 giây
const buttonDisabled = ref(true);

onMounted(() => {
    const timer = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            buttonDisabled.value = false;
            clearInterval(timer);
        }
    }, 1000);
});
</script>

<style>
body .ant-drawer-wrapper-body {
    background-color: #121212 !important;
}

.ant-drawer-content {
    background-color: unset !important;
}
</style>
