<template>
    <div>
        <Header title="Đổi mật khẩu" />
        <div class="page-content">
            <form>
                <div class="list-block ptb12 inputs-list">
                    <div class="item-content">
                        <div class="item-media col-3">Mật khẩu cũ</div>
                        <div class="col-8" style="position: relative; display: inline-block">
                            <img
                                alt=""
                                :src="showOldPassword ? eyeOpen : eyeClose"
                                @click="toggleOldPassword"
                                class="icon-eye"
                                style="right: 20px" /><input
                                class="input-inline"
                                :type="showOldPassword ? 'text' : 'password'"
                                id="oldPassword"
                                name="oldPassword"
                                maxlength="16"
                                minlength="6"
                                value="" />
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
                <div class="list-block ptb12 inputs-list">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media col-3">Mật khẩu mới</div>
                                <div class="col-8" style="position: relative; display: inline-block">
                                    <img
                                        alt=""
                                        :src="showNewPassword ? eyeOpen : eyeClose"
                                        @click="toggleNewPassword"
                                        class="icon-eye"
                                        style="right: 20px" /><input
                                        class="input-inline"
                                        :type="showNewPassword ? 'text' : 'password'"
                                        id="newPassword"
                                        name="newPassword"
                                        maxlength="16"
                                        minlength="6"
                                        value="" />
                                </div>
                                <div class="col"></div>
                            </div>
                        </li>
                        <li>
                            <div class="item-content">
                                <div class="item-media col-3">Xác nhận mật khẩu</div>
                                <div class="col-8" style="position: relative; display: inline-block">
                                    <img
                                        alt=""
                                        :src="showSurePassword ? eyeOpen : eyeClose"
                                        @click="toggleSurePassword"
                                        class="icon-eye"
                                        style="right: 20px" /><input
                                        class="input-inline"
                                        :type="showSurePassword ? 'text' : 'password'"
                                        id="surePassword"
                                        name="surePassword"
                                        maxlength="16"
                                        minlength="6"
                                        value="" />
                                </div>
                                <div class="col"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="content-block pt10">
                    <a class="f7-button button-fill" style="color: rgb(255, 255, 255)">Quyết định</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import eyeClose from "@client/assets/images/login/eye-close.png";
import eyeOpen from "@client/assets/images/login/eye-open.png";

const showOldPassword = ref(false);
const showNewPassword = ref(false);
const showSurePassword = ref(false);

const toggleOldPassword = () => {
    showOldPassword.value = !showOldPassword.value;
};

const toggleNewPassword = () => {
    showNewPassword.value = !showNewPassword.value;
};

const toggleSurePassword = () => {
    showSurePassword.value = !showSurePassword.value;
};
</script>

<style scope>

.list-block.ptb12 {
    padding: 12px 0;
}

.list-block {
    margin: 5px 0;
}

.list-block .item-content {
    box-sizing: border-box;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 16px;
}

.list-block .input-item .item-media,
.list-block.inputs-list .item-media {
    align-self: flex-end;
    min-height: 36px;
    margin-bottom: 8px;
    padding: 0;
}

.list-block .item-media {
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
    font-size: 14px;
}

.col-3 {
    flex: 0 0 auto;
    width: 25%;
}

.col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
}

input {
    -webkit-appearance: none;
    appearance: none;
    box-sizing: border-box;
    border: none;
    background: 0 0;
    border-radius: 0;
    box-shadow: none;
    display: block;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 36px;
    color: #212121;
    font-size: 14px;
    font-family: inherit;
    outline: none;
}

.input-inline {
    background-color: #eaeff2 !important;
    border-radius: 5px !important;
    padding-left: 10px !important;
}

.pt10 {
    padding-top: 15;
}

.content-block {
    margin: 15px 0;
    padding: 0 16px;
    box-sizing: border-box;
    height: auto;
}

.f7-button {
    text-decoration: none;
    text-align: center;
    display: block;
    border-radius: 6px;
    line-height: 36px;
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
    background: 0 0;
    margin: 0;
    height: 36px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    text-transform: uppercase;
    font-family: inherit;
    cursor: pointer;
    min-width: 64px;
    padding: 0 8px;
    position: relative;
    overflow: hidden;
    outline: 0;
    border: none;
    transition-duration: 0.3s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    background: #e72732;
    color: #fff;
}
</style>
