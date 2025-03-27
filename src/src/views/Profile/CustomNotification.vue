<template>
    <div>
        <Header title="Cửa sổ nhắc nhở cá lệnh" />
        <div class="page-content">
            <div class="content-block-title pt0">Thời gian hiển thị cửa sổ nhắc nhở đặt lệnh</div>
            <div class="list-block" style="display: block; margin: 0px">
                <div class="item-content" style="padding-right: 16px; display: block">
                    <div
                        class="d-flex justify-content-between"
                        style="flex-direction: row; padding: 10px 0px; border-bottom: 1px solid rgb(244, 244, 244)">
                        <div
                            style="
                                font-size: 16px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                padding-top: 6px;
                            ">
                            3 giây tự động tắt máy
                        </div>
                        <div style="font-size: 16px; white-space: nowrap; padding-top: 5px">
                            <label class="container2" style="padding-right: 0px"
                                ><input type="radio" name="radio" value="3" /><span class="checkmark"></span
                            ></label>
                        </div>
                    </div>
                </div>
                <div class="item-content" style="padding-right: 16px; display: block">
                    <div
                        class="d-flex justify-content-between"
                        style="flex-direction: row; padding: 10px 0px; border-bottom: 1px solid rgb(244, 244, 244)">
                        <div
                            style="
                                font-size: 16px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                padding-top: 6px;
                            ">
                            5 giây để tự động tắt (mặc định)
                        </div>
                        <div style="font-size: 16px; white-space: nowrap; padding-top: 5px">
                            <label class="container2" style="padding-right: 0px"
                                ><input type="radio" name="radio" value="5" checked="" /><span class="checkmark"></span
                            ></label>
                        </div>
                    </div>
                </div>
                <div class="item-content" style="padding-right: 16px; display: block">
                    <div
                        class="d-flex justify-content-between"
                        style="flex-direction: row; padding: 10px 0px; border-bottom: 1px solid rgb(244, 244, 244)">
                        <div
                            style="
                                font-size: 16px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                padding-top: 6px;
                            ">
                            10 giây tự động tắt máy
                        </div>
                        <div style="font-size: 16px; white-space: nowrap; padding-top: 5px">
                            <label class="container2" style="padding-right: 0px"
                                ><input type="radio" name="radio" value="10" /><span class="checkmark"></span
                            ></label>
                        </div>
                    </div>
                </div>
                <div class="item-content" style="padding-right: 16px; display: block">
                    <div
                        class="d-flex justify-content-between"
                        style="flex-direction: row; padding: 10px 0px; border-bottom: 1px solid rgb(244, 244, 244)">
                        <div
                            style="
                                font-size: 16px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                padding-top: 6px;
                            ">
                            Tắt thủ công
                        </div>
                        <div style="font-size: 16px; white-space: nowrap; padding-top: 5px">
                            <label class="container2" style="padding-right: 0px"
                                ><input type="radio" name="radio" value="0" /><span
                                    class="checkmark theme-background-color"></span
                            ></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style scoped>
.content-block-title {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 1;
    margin: 16px;
    line-height: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.54);
    margin: 14px 16px;
}

.list-block .item-content {
    box-sizing: border-box;
    height: 51px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 16px;
}

.justify-content-between {
    justify-content: space-between !important;
}

.d-flex {
    display: flex !important;
}

.container2 {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    user-select: none;
}

.theme-background-color {
    background: #e72732 !important;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
}

.container2 input:checked~.checkmark:after {
    display: block;
}

.container2 .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
}

.checkmark:after {
    content: "";
    position: absolute;
}
</style>
