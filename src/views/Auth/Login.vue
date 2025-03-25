<template>
    <div>
        <Header title="Đăng nhập tài khoản" />
        <div class="login-content page-content-44-new" style="overflow-x: hidden" :style="{ backgroundImage: `url(${vlbg})` }">
            <div
                class="react-swipeable-view-container"
                style="
                    height: 800px;
                    flex-direction: row;
                    transition: all;
                    transform: translate(0%, 0px);
                    direction: ltr;
                    display: flex;
                    will-change: transform;
                ">
                <div
                    aria-hidden="false"
                    data-swipeable="true"
                    style="width: 100%; flex-shrink: 0; overflow: auto hidden">
                    <div style="margin: 16px 0px; height: 100%; overflow: auto">
                        <div style="padding: 0px; margin: 0px; position: relative">
                            <div
                                style="
                                    margin-top: 10px;
                                    padding: 0px 30px;
                                    min-height: 48px;
                                    display: flex;
                                    justify-content: space-between;
                                    position: relative;
                                ">
                                <div style="align-self: flex-end; min-height: 36px; margin-bottom: 6px; padding: 0px">
                                    <div
                                        class="icon-user"
                                        style="
                                            display: inline-block;
                                            vertical-align: middle;
                                            position: relative;
                                            font-size: 27px;
                                        "></div>
                                </div>
                                <div
                                    style="
                                        display: block;
                                        margin-bottom: 4px;
                                        padding-bottom: 0px;
                                        margin-left: 20px;
                                        padding-right: 16px;
                                        position: relative;
                                        width: 100%;
                                        background: transparent;
                                    ">
                                    <div
                                        style="
                                            width: 100%;
                                            position: relative;
                                            margin-bottom: 4px;
                                            min-height: 36px;
                                            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                                        ">
                                        <input
                                            type="text"
                                            inputmode="search"
                                            placeholder="Tài khoản / Di động / Hộp thư"
                                            id="username"
                                            name="username"
                                            class="inputType1"
                                            value="mrl9999"
                                            style="
                                                border: none;
                                                display: block;
                                                padding: 0px;
                                                margin: 0px;
                                                height: 36px;
                                                font-size: 14px;
                                                width: 100%;
                                                background: transparent;
                                            " />
                                    </div>
                                </div>
                            </div>
                            <div
                                style="
                                    padding: 0px 30px;
                                    min-height: 48px;
                                    display: flex;
                                    justify-content: space-between;
                                    position: relative;
                                ">
                                <div style="align-self: flex-end; min-height: 36px; margin-bottom: 6px; padding: 0px">
                                    <div
                                        class="icon-password"
                                        style="
                                            display: inline-block;
                                            vertical-align: middle;
                                            position: relative;
                                            font-size: 27px;
                                        "></div>
                                </div>
                                <div
                                    style="
                                        display: block;
                                        margin-bottom: 4px;
                                        padding-bottom: 0px;
                                        margin-left: 20px;
                                        padding-right: 16px;
                                        position: relative;
                                        width: 100%;
                                        background: transparent;
                                    ">
                                    <div
                                        style="
                                            width: 100%;
                                            position: relative;
                                            margin-bottom: 4px;
                                            min-height: 36px;
                                            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                                            display: inline-block;
                                        ">
                                        <img
                                            alt=""
                                            src="./static/media/eye-close.858fffa6.png"
                                            class="icon-eye" /><input
                                            type="password"
                                            placeholder="Mật khẩu"
                                            name="password"
                                            class="inputPType1"
                                            value="1234567D"
                                            style="
                                                border: none;
                                                display: block;
                                                padding: 0px;
                                                margin: 0px;
                                                height: 36px;
                                                font-size: 14px;
                                                width: 100%;
                                                background: transparent;
                                            " />
                                    </div>
                                </div>
                            </div>
                            <div class="store-data list-block" style="margin: 0px; padding: 0px 30px">
                                <ul>
                                    <li>
                                        <div style="display: inline-flex; width: 90%">
                                            <label
                                                class="label-checkbox item-content"
                                                style="
                                                    margin-left: 3px;
                                                    padding-left: 45px;
                                                    padding-right: 60px;
                                                    min-height: unset;
                                                    width: 100%;
                                                "
                                                ><input
                                                    type="checkbox"
                                                    name="agree"
                                                    id="rememberpassword"
                                                    value="Books"
                                                    checked=""
                                                    style="margin-top: 17px; height: 0px; width: 0px" />
                                                <div class="item-media" style="line-height: 18px">
                                                    <i
                                                        class="icon icon-form-checkbox"
                                                        style="float: left; margin-right: 5px"></i
                                                    ><span
                                                        style="font-size: 12px; color: rgb(153, 153, 153); width: 100%"
                                                        >Nhớ mật khẩu</span
                                                    >
                                                </div></label
                                            >
                                            <div
                                                style="
                                                    float: right;
                                                    font-size: 12px;
                                                    width: 100%;
                                                    text-align: right;
                                                    line-height: 32px;
                                                ">
                                                Quên mật khẩu
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div style="margin: 16px 0px; padding: 0px 30px">
                                <div
                                    class="theme-background-color"
                                    style="
                                        margin-top: 45px;
                                        height: 40px;
                                        border-radius: 8px;
                                        line-height: 40px;
                                        color: rgb(255, 255, 255);
                                        text-align: center;
                                    ">
                                    Đăng nhập
                                </div>
                            </div>
                            <div style="margin: 16px 0px; padding: 0px 30px; justify-content: center">
                                <div>
                                    <div>
                                        <router-link 
                                            to="/signup"
                                            class="theme-background-color"
                                            style="
                                                display: block;
                                                margin-top: 20px;
                                                height: 40px;
                                                border-radius: 8px;
                                                line-height: 40px;
                                                color: rgb(255, 255, 255);
                                                text-align: center;
                                            ">
                                            Đăng ký tài khoản
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
import vlbg from "@/assets/images/bg/vlbg.png";
</script>

<style>
.page-content-44-new {
    background-position: center 5%;
    background-size: 330px 380px;
    height: calc(100vh - env(safe-area-inset-bottom) - 44px);
    background-image: url(${vlbg});
    background-repeat: no-repeat;
}

.theme-background-color {
    background: #e72732 !important;
}
</style>
