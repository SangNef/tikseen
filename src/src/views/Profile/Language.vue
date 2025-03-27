<template>
    <div>
        <Header title="Ngôn ngữ" />

        <div class="page-content-44" :style="{ backgroundImage: `url(${vlbg})` }">
            <div class="list-block" style="display: block; margin: 0px">
                <div class="item-content" lang="vi" style="padding-right: 16px; display: block">
                    <div
                        class="d-flex justify-content-between"
                        style="flex-direction: row; padding: 10px 0px; border-bottom: 1px solid rgb(244, 244, 244)">
                        <div
                            class="flex items-center"
                            style="
                                font-size: 16px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                padding-top: 6px;
                            ">
                            <img :src="viFlag" alt="" style="border-radius: 10%; height: 50px; max-width: 75px" /><span
                                style="padding: 20px; color: red"
                                >VI</span
                            >
                        </div>
                        <div style="font-size: 16px; white-space: nowrap; padding-top: 10px; color: rgb(153, 153, 153)">
                            Đã chọn
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
import vlbg from "@/assets/images/bg/vlbg.png";
import viFlag from "@/assets/images/profile/vi_flag.png";
</script>

<style scoped>
.page-content-44,
.page-content-44-new {
    height: calc(100vh - env(safe-area-inset-bottom) - 44px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-repeat: no-repeat;
    background-position: center 40%;
    background-size: 300px 350px;
}

.list-block .item-content {
    box-sizing: border-box;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 16px;
}

.d-flex {
    display: flex !important;
}

.justify-content-between {
    justify-content: space-between !important;
}

img, svg {
    vertical-align: middle;
}
</style>
