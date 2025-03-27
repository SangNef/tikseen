<template>
    <div>
        <Header title="Màu chủ đề" />
        <div class="page-content" style="display: block; margin: 0px; background: white; filter: grayscale(100%)">
            <div style="display: block; margin: 0px; background: white; padding-bottom: 20px">
                <div class="item-inner" style="justify-content: space-between; display: flex; padding: 20px 20px 0px">
                    <div class="item-title">
                        Màu chủ đề tùy chỉnh<br /><small style="color: rgba(128, 128, 128, 0.81)"
                            >Chọn màu chủ đề giao diện trò chơi</small
                        >
                    </div>
                    <div
                        class="switch-customSetting"
                        style="
                            position: relative;
                            display: inline-block;
                            text-align: left;
                            opacity: 1;
                            direction: ltr;
                            border-radius: 13px;
                            transition: opacity 0.25s;
                            touch-action: none;
                            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                            user-select: none;
                        ">
                        <div
                            class="react-switch-bg"
                            style="
                                height: 26px;
                                width: 75px;
                                margin: 0px;
                                position: relative;
                                background: rgb(204, 204, 204);
                                border-radius: 13px;
                                cursor: pointer;
                                transition: background 0.25s;
                            ">
                            <div
                                style="
                                    height: 26px;
                                    width: 39px;
                                    position: relative;
                                    opacity: 0;
                                    pointer-events: none;
                                    transition: opacity 0.25s;
                                ">
                                <div class="toggleOnOff" style="padding-left: 6px">Tùy chỉnh</div>
                            </div>
                            <div
                                style="
                                    height: 26px;
                                    width: 39px;
                                    position: absolute;
                                    opacity: 1;
                                    right: 0px;
                                    top: 0px;
                                    pointer-events: none;
                                    transition: opacity 0.25s;
                                ">
                                <div class="toggleOnOff">Mặc định</div>
                            </div>
                        </div>
                        <div
                            class="react-switch-handle"
                            style="
                                height: 24px;
                                width: 24px;
                                background: rgb(255, 255, 255);
                                display: inline-block;
                                cursor: pointer;
                                border-radius: 50%;
                                position: absolute;
                                transform: translateX(1px);
                                top: 1px;
                                outline: 0px;
                                border: 0px;
                                transition: background-color 0.25s, transform 0.25s, box-shadow 0.15s;
                            "></div>
                        <input
                            type="checkbox"
                            role="switch"
                            style="
                                border: 0px;
                                clip: rect(0px, 0px, 0px, 0px);
                                height: 1px;
                                margin: -1px;
                                overflow: hidden;
                                padding: 0px;
                                position: absolute;
                                width: 1px;
                            " />
                    </div>
                </div>
                <div style="text-align: center; margin-top: 15px">
                    <img alt="" usemap="#image-map" :src="color" /><map name="image-map"
                        ><area alt="#2196f3" id="blue" coords="74,20,99,16,100,48,84,50" shape="poly" /><area
                            alt="#03a9f4"
                            id="lightblue"
                            coords="100,16,125,20,115,50,100,48"
                            shape="poly" /><area
                            alt="#00bcd4"
                            id="cyan"
                            coords="125,20,148,32,130,59,115,50"
                            shape="poly" /><area
                            alt="#009688"
                            id="teal"
                            coords="130,58,149,32,167,50,141,70"
                            shape="poly" /><area
                            alt="#4caf50"
                            id="green"
                            coords="141,70,167,50,180,74,148,85"
                            shape="poly" /><area
                            alt="#8bc34a"
                            id="lightgreen"
                            coords="148,86,180,75,183,99,149,99"
                            shape="poly" /><area
                            alt="#cddc39"
                            id="lime"
                            coords="149,100,183,100,179,126,146,115"
                            shape="poly" /><area
                            alt="#ffeb3b"
                            id="yellow"
                            coords="146,115,139,128,168,149,179,127"
                            shape="poly" /><area
                            alt="#ffc107"
                            id="amber"
                            coords="139,129,128,139,149,168,168,149"
                            shape="poly" /><area
                            alt="#ff9800"
                            id="orange"
                            coords="128,140,115,146,126,179,149,168"
                            shape="poly" /><area
                            alt="#ff5722"
                            id="deeporange"
                            coords="115,147,100,149,100,184,126,179"
                            shape="poly" /><area
                            alt="#795548"
                            id="brown"
                            coords="85,147,99,149,99,183,74,179"
                            shape="poly" /><area
                            alt="#9e9e9e"
                            id="gray"
                            coords="70,140,85,147,73,179,51,167"
                            shape="poly" /><area
                            alt="#607d8b"
                            id="bluegray"
                            coords="59,130,33,149,50,167,70,140"
                            shape="poly" /><area
                            alt="#000000"
                            id="black"
                            coords="21,126,51,116,59,130,33,149"
                            shape="poly" /><area
                            alt="#D9534F"
                            id="red"
                            coords="16,101,49,100,51,116,21,126"
                            shape="poly" /><area
                            alt="#e91e63"
                            id="pink"
                            coords="21,74,50,84,49,100,16,100"
                            shape="poly" /><area
                            alt="#9c27b0"
                            id="purple"
                            coords="21,73,32,51,57,68,51,84"
                            shape="poly" /><area
                            alt="#673ab7"
                            id="deeppurple"
                            coords="32,51,51,32,70,56,58,69"
                            shape="poly" /><area
                            alt="#3f51b5"
                            id="indigo"
                            coords="51,32,74,21,85,50,69,57"
                            shape="poly" /></map
                    ><br /><button
                        href="#"
                        id="conColour"
                        class="bg-font-color"
                        disabled=""
                        style="
                            border-radius: 25px;
                            border: none;
                            min-width: 105px;
                            font-size: 14px;
                            height: 36px;
                            color: white;
                        ">
                        Quyết định
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
import color from "@client/assets/images/profile/color.png";
</script>

<style scoped>
.toggleOnOff {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 10px;
    color: #fff;
    padding-right: 2;
    font-family: Verdana, sans-serif;
}
</style>
