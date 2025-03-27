<template>
    <div>
        <Header title="Tự liệu hoàn chỉnh" />
        <div
            class="page-content"
            style="
                height: calc((844px - 50px) - var(--safe-bottom));
                overflow-y: auto;
                display: block;
                padding-right: 15px;
            ">
            <form>
                <input type="hidden" id="isNaNname" name="isNaNname" value="0" /><input
                    type="hidden"
                    id="isNaNphone"
                    name="isNaNphone"
                    value="0" /><input type="hidden" id="isNaNemail" name="isNaNemail" value="0" />
                <div class="list-block ptb12">
                    <ul>
                        <li>
                            <a class="item-link item-content editlogoa"
                                ><div class="item-media">
                                    <img
                                        class="userImg detaileditImg"
                                        :src="userDefault"
                                        style="
                                            border-radius: 32px;
                                            width: 40px;
                                            height: 40px;
                                            vertical-align: middle;
                                            border: 2px solid rgba(255, 255, 255, 0.2);
                                        " />
                                </div>
                                <div class="item-inner" style="background-position: 100% 50%">
                                    <div class="item-after">
                                        Thay ảnh đại diện <ChevronRightIcon class="w-5 h-5" />
                                    </div></div
                            ></a>
                        </li>
                    </ul>
                </div>
                <div class="list-block ptb12 inputs-list">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Đăng nhập tài khoản</div>
                                <div class="col-9">
                                    <div>
                                        <div class="theme-color" style="font-size: 14px; text-align: right">
                                            mrl9999
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Kiểu người dùng</div>
                                <div class="col-9">
                                    <div>
                                        <div class="theme-color" style="font-size: 14px; text-align: right">Đại lý</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Tích phân</div>
                                <div class="col-9">
                                    <div>
                                        <div class="theme-color" style="font-size: 14px; text-align: right">0</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="list-block ptb12 inputs-list">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Biệt danh</div>
                                <div class="col-9">
                                    <div>
                                        <input
                                            type="text"
                                            class="input-inline"
                                            id="nickName"
                                            name="nickName"
                                            value="Vũ Thanh Thư" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Tên thật</div>
                                <div class="col-9">
                                    <div><input type="text" class="input-inline" name="realName" value="" /></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="list-block ptb12 inputs-list">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Hộp thư</div>
                                <div class="col-9">
                                    <div>
                                        <input
                                            type="email"
                                            class="input-inline"
                                            id="emailInfo"
                                            name="email"
                                            placeholder="Chọn điền"
                                            autocomplete="off"
                                            value="" />
                                    </div>
                                    <div class="item-title warning" style="display: none"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="list-block ptb12 inputs-list">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Quốc gia</div>
                                <div class="col-9">
                                    <div>
                                        <input
                                            type="text"
                                            class="input-inline"
                                            name="countries"
                                            readonly=""
                                            id="detailcountry"
                                            placeholder="Chọn điền"
                                            value="" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Thuộc về quận</div>
                                <div class="col-9">
                                    <div>
                                        <input type="hidden" name="province" id="detail_province" value="" /><input
                                            type="hidden"
                                            name="city"
                                            id="detail_city"
                                            value="" />
                                        <div style="display: flex">
                                            <input
                                                type="text"
                                                class="input-inline"
                                                name="province"
                                                id="province"
                                                placeholder="Tỉnh"
                                                value=""
                                                style="width: 45%" /><input
                                                type="text"
                                                class="input-inline"
                                                name="city"
                                                id="city"
                                                placeholder="Thành phố"
                                                value=""
                                                style="width: 45%; margin-left: 10px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Điện thoại di động</div>
                                <div class="col-9">
                                    <div>
                                        <input
                                            type="text"
                                            class="input-inline"
                                            id="phoneInfo"
                                            name="phone"
                                            ng-style="phoneStyle"
                                            placeholder="Chọn điền"
                                            readonly=""
                                            autocomplete="off"
                                            value="" />
                                        <div class="item-title warning" style="display: none"></div>
                                    </div>
                                    <div class="item-title warning" style="display: none"></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Sinh nhật</div>
                                <div class="col-9">
                                    <div>
                                        <div class="react-datepicker-wrapper">
                                            <div class="react-datepicker__input-container">
                                                <input type="text" class="input-field input-inline" value="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media col">Telegram</div>
                                <div class="col-9">
                                    <div class="item-input item-input-field">
                                        <input type="text" class="input-inline" name="telegram" value="" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
            <div class="content-block" style="padding-right: 0px">
                <a class="f7-button button-fill" style="color: rgb(255, 255, 255)">Quyết định</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import userDefault from "@/assets/images/profile/user-default.jpg";
</script>

<style scoped>

.list-block.ptb12 {
    padding: 12px 0;
}
.list-block {
    margin: 5px 0;
}

.list-block ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
}

.detail-edit-page .list-block .item-content {
    display: flex !important;
}

.list-block .item-link,
.list-block .list-button {
    transition-duration: 0.3s;
    display: block;
    color: inherit;
    position: relative;
    overflow: hidden;
    z-index: 0;
}
.list-block .item-content {
    box-sizing: border-box;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 16px;
}

.detail-edit-page .list-block .item-media {
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    flex-wrap: nowrap;
    align-items: center;
    box-sizing: border-box;
    padding-top: 8px;
    padding-bottom: 8px;
    min-width: 40px;
    font-size: 14px !important;
}

.list-block .item-after {
    white-space: nowrap;
    color: #757575;
    -webkit-box-flex: 0;
    flex-shrink: 0;
    margin-left: auto;
    padding-left: 8px;
    display: flex;
    max-height: 200px;
    font-size: 14px;
}

.theme-color {
    color: #e72732 !important;
}

.col-9 {
    flex: 0 0 auto;
    width: 75%;
}

.col {
    flex: 1 0;
}
</style>
