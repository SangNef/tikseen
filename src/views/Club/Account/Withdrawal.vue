<template>
    <div class="w-full min-h-screen custom-gradient p-4 pb-20">
        <Header title="RÚT TIỀN" titleColor="text-[#d9c8ab]" />
        <div class="px-3 py-2 rounded-lg text-white border border-[#dea94f] bg-[#393530] mt-6">
            <div class="text-white font-semibold">hoangnam999</div>
            <div class="text-white font-semibold">Số dư: 0 VND</div>
            <div class="w-9/12 h-0.5 my-4 mx-auto bg-[#dea94f]"></div>
            <table class="table-auto w-full">
                <tbody>
                    <tr>
                        <th class="text-left">Hình thức:</th>
                        <td>Internet Banking</td>
                    </tr>
                    <tr>
                        <th class="text-left">Số tiền rút:</th>
                        <td>
                            <input
                                type="number"
                                class="outline-none border focus:outline-none rounded-lg border-[#dea94f] h-10 my-1 flex-1 bg-transparent placeholder:text-neutral-400 text-white px-3 py-2" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div
                class="w-9/12 cursor-pointer hover:opacity-50 my-4 mx-auto border border-[#dea94f] font-semibold rounded-lg h-12 flex items-center justify-center bg-[#695626]">
                Xác nhận rút tiền
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@landing/components/Header.vue";
</script>

<style></style>
