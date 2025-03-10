<template>
    <div class="h-screen bg-white font-helvetica">
        <div class="pt-[16px] border-b border-[#e7e7e7]"></div>
        <div class="flex-1">
            <div class="px-5 py-[15px] border-b border-[#f4f7f6]">
                <div class="px-[calc(1.5rem * 0.5)]">
                    <div class="pl-2.5">
                        <h6 class="mb-2" style="font-size: 20px; color: green;line-height: 1.2;">
                            {{ type === 1 ? "Giáo viên" : type === 2 ? "Trợ lý" : "Admin" }}
                        </h6>
                        <small class="js-id-select" style="color:blue; font-size: 0.875em">CSKH</small>
                    </div>
                </div>
            </div>
            <div class="h-[65vh] p-2.5"></div>
            <div class="p-2.5 flex flex-wrap items-stretch w-full">
                <div class="h-10.5"> 
                    <span class="h-full flex items-center px-3 py-1.5 text-[1rem] font-normal [line-height:1.5] text-center bg-[#f8f9fa] border border-[#dee2e6] rounded-[0.375rem]">
                        <i class="fa fa-image"></i>
                    </span>
                </div>
                <div class="h-10.5"> 
                    <span class="h-full flex items-center px-3 py-1.5 text-[1rem] font-normal [line-height:1.5] text-center bg-[#f8f9fa] border border-[#dee2e6] rounded-[0.375rem]">
                        <i class="fa fa-send"></i>
                    </span>
                </div>
                <textarea name="text" id="text" placeholder="Enter text here..." class="flex-1 h-10.5 block text-[1rem] font-normal [line-height:1.5] text-[#212529] appearance-none bg-white bg-clip-padding border border-[#dee2e6] rounded-[0.375rem] px-3 py-1.5"></textarea>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const type = computed(() => Number(route.query.type) || 0);
</script>

<style></style>
