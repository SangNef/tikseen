<template>
    <div>
        <Header title="Đăng ký đối tác" />
        <div class="pt-6 pb-3.5">
            <div class="mt-1.5 mb-3">
                <img class="w-11/12 mx-auto" :src="bg" alt="" />
            </div>
            <h1 class="text-[0.48rem] font-semibold text-center flex items-center w-full justify-center">
                Đối tác kinh doanh
                <span class="text-default flex items-center"
                    >(Partner
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="seedling"
                        class="svg-inline--fa fa-seedling"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.63px"
                        height="20.63px"
                        viewBox="0 0 512 512">
                        <path
                            fill="currentColor"
                            d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"></path></svg
                    >)</span
                >
            </h1>
            <div class="mt-1.5 px-1.5">
                <p class="text-[0.32rem] text-gray-500 text-center">
                    Đối tác là người đại diện Coincex để hỗ trợ các khách hàng khi sử dụng Coincex. Khi trở thành đối
                    tác bạn sẽ nhận được các quyền lợi đặc biệt và chia sẻ lợi nhuận từ Coincex.
                </p>
                <p class="text-[0.34rem] mt-3.5 text-default font-semibold text-center active:opacity-30 duration-150">
                    Tìm hiểu thêm về chính sách ưu đãi
                </p>
            </div>
        </div>
        <div class="fixed bottom-3.5 w-full px-1.5">
            <button
                type="button"
                class="_btn-ripple_1fzeu_1 text-white font-medium w-full h-[46px] flex items-center justify-center gap-1 py-1.5 mt-2.5 rounded-sm bg-default active:opacity-30 duration-150">
                <span class="text-[0.32rem] font-semibold">Nâng cấp ngay</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { bg } from '@/assets/partner';
import { Header } from '@/components/mobile';
</script>

<style></style>
