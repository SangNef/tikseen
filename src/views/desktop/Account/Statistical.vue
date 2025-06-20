<template>
    <div class="flex-1 bg-[#171b25] col-span-9 min-h-[820px] shadow-xl border border-[#212125] rounded-lg">
        <div class="flex items-center justify-between p-5">
            <h3 class="font-semibold text-lg">Dữ liệu giao dịch</h3>
        </div>
        <a-divider style="background: rgb(29, 36, 51); margin: 0" />
        <div class="pt-36 flex justify-center text-gray-700">
            <a-empty description="Không có dữ liệu">
                <template #image>
                    <img alt="empty" :src="empty" style="width: 120px" />
                </template>
            </a-empty>
        </div>
    </div>
</template>

<script setup>
import { empty } from "@/assets/desktop/icon";
</script>
