<template>
    <div>
        <Header title="Đăng ký" />
        <div
            style="
                background-color: #fff;
                padding: 10px;
                font-size: 0;
                justify-content: center;
                text-transform: uppercase;
            ">
            <ul style="margin: 0; padding: 0; display: flex; width: 100%; vertical-align: middle">
                <li style="display: inline-block; width: 100%; font-size: 11px">
                    <a style="color: red; display: flex; padding: 10px; transition: color 0.5s; justify-content: center"
                        >Đăng ký tài khoản</a
                    >
                    <div class="w-full bg-[#e72732] h-[3px]"></div>
                </li>
            </ul>
        </div>
        <div
            style="background-position: center 5%; background-repeat: no-repeat; background-size: 330px 380px"
            :style="`background-image: url(${vlbg})`">
            <div
                class=""
                style="
                    height: 757px;
                    flex-direction: row;
                    transition: all;
                    transform: translate(0%, 0px);
                    direction: ltr;
                    display: flex;
                    will-change: transform;
                ">
                <div class="" style="width: 100%; flex-shrink: 0; overflow: auto hidden">
                    <form id="regForm">
                        <div style="height: calc(-87px + 100vh); overflow: auto">
                            <div class="list-block inputs-list" style="margin-bottom: 0px">
                                <ul class="form-ul">
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media"><span>Mã mời</span></div>
                                            <div class="item-inner">
                                                <div class="item-input item-input-field">
                                                    <input
                                                        type="text"
                                                        class="input-field keyCookieInput"
                                                        placeholder="Người giới thiệu,Không bắt buộc,Chỉ chấp nhận chữ và số"
                                                        name="keyCookie"
                                                        id="regKeyInput"
                                                        value="" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">
                                                <b class="text-danger">*</b><span>Tài Khoản</span>
                                            </div>
                                            <div class="item-inner">
                                                <div class="item-input item-input-field">
                                                    <input
                                                        type="text"
                                                        class="input-field"
                                                        placeholder="6-14 ký tự, chỉ có thể nhập chữ thường hoặc số"
                                                        maxlength="14"
                                                        id="regusername"
                                                        name="loginName" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">
                                                <b class="text-danger">*</b><span>Mật khẩu</span>
                                            </div>
                                            <div class="item-inner">
                                                <div class="item-input item-input-field" style="display: inline-block">
                                                    <img
                                                        alt=""
                                                        :src="showPassword ? eyeOpen : eyeClose"
                                                        @click="toggleShowPassword()"
                                                        class="icon-eye"
                                                        style="right: 0px" /><input
                                                        :type="showPassword ? 'text' : 'password'"
                                                        class="input-field"
                                                        placeholder="6-16 Kết hợp chữ và số"
                                                        maxlength="16"
                                                        id="loginPwd"
                                                        name="loginPwd" />
                                                </div>
                                                <div class="item-title warning" style="display: none"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">
                                                <b class="text-danger">*</b><span>Xác nhận mật khẩu</span>
                                            </div>
                                            <div class="item-inner">
                                                <div class="item-input item-input-field" style="display: inline-block">
                                                    <img
                                                        alt=""
                                                        :src="showConfirmPassword ? eyeOpen : eyeClose"
                                                        @click="toggleShowConfirmPassword()"
                                                        class="icon-eye"
                                                        style="right: 0px" /><input
                                                        :type="showConfirmPassword ? 'text' : 'password'"
                                                        class="input-field"
                                                        placeholder="Gõ lại mật khẩu"
                                                        maxlength="16"
                                                        id="checkLoginPwd"
                                                        name="confirmLoginPwd" />
                                                </div>
                                                <div class="item-title warning" style="display: none"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">
                                                <b class="text-danger">*</b><span>Mã xác nhận</span>
                                            </div>
                                            <div class="item-inner">
                                                <div class="item-input item-input-field item-code">
                                                    <input
                                                        type="text"
                                                        maxlength="6"
                                                        class="input-field"
                                                        id="validCode"
                                                        name="validCode" /><span class="phone-email-validcode-span"
                                                        >|</span
                                                    ><a class="phone-email-validcode-a emailSend" id="getValidCode"
                                                        >Lấy mã xác minh</a
                                                    ><img src="" alt="" id="validCodeImg" style="display: none" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="list-block inputs-list" style="margin-top: 0px"><ul class="form-ul"></ul></div>
                            <div class="store-data list-block">
                                <ul></ul>
                                <div class="content-block" style="margin-bottom: 30px; color: white">
                                    <a class="f7-button button-fill register-button" style="color: white">Xác nhận</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
import { ref } from "vue";
import vlbg from "@client/assets/images/bg/vlbg.png";

import eyeClose from "@client/assets/images/login/eye-close.png";
import eyeOpen from "@client/assets/images/login/eye-open.png";

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
};

const toggleShowConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
};
</script>

<style scoped>
.list-block {
    margin: 5px 0;
}

.list-block ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
}

.list-block .item-content {
    box-sizing: border-box;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 16px;
}

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

.register-modal .item-media {
    text-align: right;
    min-width: 60px !important;
}

.list-block .item-media span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
}

.list-block.inputs-list .item-inner {
    display: block;
    margin-bottom: 4px;
    padding-bottom: 0;
}

.list-block .item-media + .item-inner {
    margin-left: 16px;
}

.list-block .item-inner {
    padding-right: 16px;
    position: relative;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    min-height: 48px;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    min-width: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}

.list-block .item-input {
    width: 100%;
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex-shrink: 1;
    -ms-flex: 0 1 auto;
    flex-shrink: 1;
    font-size: 0;
    position: relative;
    margin-bottom: 4px;
    min-height: 36px;
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
}

.text-danger {
    color: #f44336;
}

.phone-email-validcode-span {
    position: absolute;
    bottom: 0;
    font-size: 14px;
    line-height: 36px;
}

.phone-email-validcode-span {
    right: 150px;
    color: rgba(0, 0, 0, 0.3);
}

.phone-email-validcode-a {
    right: 0;
    color: grey !important;
    width: 150px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

.phone-email-validcode-a,
.phone-email-validcode-span {
    position: absolute;
    bottom: 0;
    font-size: 14px;
    line-height: 36px;
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

.register-button {
    line-height: 40px !important;
    height: 40px !important;
    border-radius: 7px !important;
}

.icon-eye {
    height: 27px;
    width: 27px;
    left: auto;
    right: 10px;
    position: absolute;
    z-index: 1;
    bottom: auto;
    top: 5px;
}
</style>
