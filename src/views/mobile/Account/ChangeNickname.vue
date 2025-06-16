<template>
    <div>
        <Header title="Biệt danh" />
        <div class="px-1.5 pt-10">
            <form>
                <div class="relative mb-2">
                    <div
                        class="w-full text-[0.34rem] font-medium ml-0.5 mb-0.5 ant-flex css-1v613y0 ant-flex-align-center ant-flex-justify-start">
                        Thay đổi biệt danh
                    </div>
                    <div class="relative">
                        <input
                            name="nikname"
                            type="text"
                            step=""
                            class="w-full bg-primary rounded-[0.28rem] p-1.5 text-md min-h-[46px] border border-secondary focus:border-primary focus:duration-150 caret-default form-group-custom"
                            placeholder="Nhập biệt danh của bạn"
                            spellcheck="false"
                            value="" />
                    </div>
                </div>
                <button
                    type="submit"
                    class="_btn-ripple_1fzeu_1 text-white font-medium w-full flex items-center justify-center gap-1 py-1 mt-5 h-[46px] rounded-full bg-default">
                    <p class="text-[0.32rem] font-medium">Thay đổi</p>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { Header } from '@/components/mobile';
</script>

<style></style>
