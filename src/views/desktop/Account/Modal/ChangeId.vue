<template>
    <a-modal v-model:open="visible" :footer="null" :closable="false" width="465px" centered class="custom-verify-modal">
        <!-- Header -->
        <template #title>
            <div class="flex items-center justify-between px-5 py-3 text-white shadow-lg bg-[#171b25]">
                <h3 class="font-semibold text-base">Xác minh danh tính</h3>
                <div
                    class="w-6 h-6 flex items-center justify-center hover:bg-gray-700 rounded-full duration-150 cursor-pointer"
                    @click="visible = false">
                    <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        data-testid="CloseIcon">
                        <path
                            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </div>
            </div>
        </template>

        <!-- Body -->
        <div class="max-h-[520px] 3xl:max-h-[580px] overflow-auto text-white font-medium p-5">
            <!-- Steps -->
            <div class="flex items-center justify-between px-3 relative mb-12">
                <div
                    class="absolute left-1/2 -translate-x-1/2 w-4/6 overflow-hidden border border-dashed border-amber-800/30"></div>
                <div class="relative flex flex-col items-center">
                    <div class="w-fit relative z-10 border-8 border-amber-600/10 rounded-full">
                        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-orange-800">
                            <span class="font-semibold text-base">1</span>
                        </div>
                    </div>
                    <span class="absolute -bottom-5 text-xs text-[#01bc8d]">Hình ảnh</span>
                </div>
                <div class="relative flex flex-col items-center">
                    <div class="w-fit relative z-10 border-8 border-amber-600/10 rounded-full">
                        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-orange-600/50">
                            <span class="font-semibold text-base">2</span>
                        </div>
                    </div>
                    <span class="absolute -bottom-5 text-xs text-[#7b8798]">Thông tin</span>
                </div>
                <div class="relative flex flex-col items-center">
                    <div class="w-fit relative z-10 border-8 border-amber-600/10 rounded-full">
                        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-orange-600/50">
                            <span class="font-semibold text-base">3</span>
                        </div>
                    </div>
                    <span class="absolute -bottom-5 text-xs text-[#7b8798]">Xét duyệt</span>
                </div>
            </div>

            <!-- Instructions -->
            <div class="!mb-6 font-normal">
                <p class="text-[#7b8798] !mb-3">
                    1. Hãy đảm bảo rằng ảnh chụp toàn vẹn và rõ ràng, có định dạng JPG, PNG, JPEG.
                </p>
                <p class="text-[#7b8798]">
                    2. Hãy chụp ảnh Chứng minh thư/Hộ chiếu của bạn. Ảnh cần sáng và rõ ràng, không bị mất góc.
                </p>
            </div>

            <!-- Upload Front Image -->
            <div class="flex flex-col items-center justify-center mb-8">
                <div class="relative">
                    <img
                        class="w-[320px] h-[164.8px] rounded-sm border border-double p-1 border-[#01bc8d]"
                        src="https://i.imgur.com/FF9s3cY.png"
                        alt="" />
                    <input
                        type="file"
                        name="front_image"
                        class="opacity-0 absolute inset-0 overflow-hidden"
                        accept=".jpg,.jpeg,.png" />
                </div>
                <p class="mt-3">Tải lên ảnh mặt trước giấy tờ tuỳ thân</p>
            </div>

            <!-- Upload Face Image -->
            <div class="flex flex-col items-center justify-center mb-3.5">
                <div class="relative">
                    <img
                        class="w-[320px] h-[164.8px] rounded-sm border border-double p-1 border-[#01bc8d]"
                        src="https://i.imgur.com/n2YYsnb.png"
                        alt="" />
                    <input
                        type="file"
                        name="footprint_image"
                        class="opacity-0 absolute inset-0 overflow-hidden"
                        accept=".jpg,.jpeg,.png" />
                </div>
                <p class="mt-3">Tải lên khuân mặt</p>
            </div>

            <!-- Notice -->
            <p class="text-[#7b8798] font-normal mt-5">
                Lưu ý: Sau khi liên kết không thể thay đổi. Nếu bạn cần thay đổi, vui lòng liên hệ với bộ phận chăm sóc
                khách hàng
            </p>
        </div>

        <a-divider style="margin: 0; background: rgb(29, 36, 51)" />

        <!-- Footer -->
        <div class="flex items-center gap-3 p-5">
            <button
                class="w-full bg-[#01bc8d] hover:opacity-80 border border-[#01bc8d] flex items-center justify-center gap-3 px-5 py-2 rounded-md duration-75">
                <span class="text-sm font-medium whitespace-nowrap text-white">Tiếp theo</span>
            </button>
        </div>
    </a-modal>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    open: Boolean,
});

const emit = defineEmits(["update:open"]);

const visible = computed({
    get: () => props.open,
    set: (val) => emit("update:open", val),
});
</script>

<style scoped>
.custom-verify-modal .ant-modal-content {
    background-color: #171b25;
    color: white;
}
</style>
