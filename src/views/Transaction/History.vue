<template>
    <div class="pt-6 px-[15px] pb-9 max-md:w-[calc(100vw)]">
        <div
            class="bg-white rounded-[10px] px-[15px] py-5"
            style="box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.1)">
            <div class="flex items-center p-2.5 gap-2">
                <div class="flex justify-center items-center px-3 py-1.5 bg-[#ececec] rounded-sm">
                    <ChevronLeftIcon class="w-5 h-5 stroke-2" />
                </div>
                <div class="flex justify-center items-center px-3 py-1.5 bg-[#ececec] rounded-sm">
                    <ChevronRightIcon class="w-5 h-5 stroke-2" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

</script>

<style></style>
