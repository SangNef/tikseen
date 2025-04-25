<template>
    <div class="w-105 h-full bg-[#151a20] max-xl:hidden">
        <div class="w-full bg-[#0f1216] py-[7px] px-[15px] flex items-center text-[#adadad] text-[10px] relative">
            <div class="w-1/6 text-start">CÔNG CỤ</div>
            <div class="w-1/3 text-center">TOÀN BỘ</div>
            <div class="w-1/3 text-center">SỰ KHÁC BIỆT</div>
            <div class="w-1/6 text-end">%</div>
        </div>
        <div v-for="(tool, index) in tools" :key="index"
            class="w-full py-[10px] px-[12px] flex items-center text-white text-[12px] border-t border-[#2c2f34]">
            <div class="w-1/6 text-start">{{ tool.coin }}</div>
            <div class="w-1/3 text-center flex items-center justify-center">
                <button class="border rounded-sm w-22 h-[30px] flex items-center justify-center font-bold" :class="{
                    'border-[#ed676f] text-[#fa3963] bg-[#351f2c]': parseFloat(tool.percent) < 0,
                    'border-[#33cc99] text-[#33cc99] bg-[#1f2c24]': parseFloat(tool.percent) >= 0,
                }">
                    {{ tool.total }}
                </button>
            </div>
            <div class="w-1/3 text-center flex items-center justify-center">
                <button class="border rounded-sm w-22 h-[30px] flex items-center justify-center font-bold" :class="{
                    'border-[#ed676f] text-[#fa3963] bg-[#351f2c]': parseFloat(tool.percent) < 0,
                    'border-[#33cc99] text-[#33cc99] bg-[#1f2c24]': parseFloat(tool.percent) >= 0,
                }">
                    {{ tool.diff }}
                </button>
            </div>
            <div class="w-1/6 text-end font-bold" :class="{
                'text-[#33cc99]': parseFloat(tool.percent) > 0,
                'text-[#fa3963]': parseFloat(tool.percent) < 0,
            }">
                {{ tool.percent }}
            </div>
        </div>
    </div>
</template>

<script setup>
import tools from "@/data/tool";
</script>

<style scoped></style>
