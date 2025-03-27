<template>
    <div>
        <Header title="Cài Đặt Chip" />
        <div class="page-content">
            <div class="list-block">
                <div class="item-content" style="padding-right: 16px">
                    <div class="slideDown" style="border-bottom: 1px solid rgb(244, 244, 244); padding-left: 6px">
                        <dl class="item-title">
                            Chip
                            <dd style="color: rgb(153, 153, 153); font-size: 12px; white-space: break-spaces">
                                Bật cài đặt tùy chỉnh
                            </dd>
                        </dl>
                        <div
                            class="switch-is-off switch-customSetting"
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
                                    <div class="toggleOnOff" style="font-size: 11px; line-height: 12px"></div>
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
                                    <div class="toggleOnOff" style="font-size: 11px; line-height: 12px"></div>
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
                </div>
                <div class="item-content customBet myBtn" style="padding-right: 16px" disabled="">
                    <div
                        class="slideDown"
                        id="betContent1"
                        style="border-bottom: 1px solid rgb(244, 244, 244); padding-left: 6px">
                        <div class="item-title">Chip 1</div>
                        <div class="item-after"><div>1</div></div>
                    </div>
                </div>
                <div class="item-content customBet myBtn" style="padding-right: 16px" disabled="">
                    <div
                        class="slideDown"
                        id="betContent2"
                        style="border-bottom: 1px solid rgb(244, 244, 244); padding-left: 6px">
                        <div class="item-title">Chip 2</div>
                        <div class="item-after"><div>5</div></div>
                    </div>
                </div>
                <div class="item-content customBet myBtn" style="padding-right: 16px" disabled="">
                    <div
                        class="slideDown"
                        id="betContent3"
                        style="border-bottom: 1px solid rgb(244, 244, 244); padding-left: 6px">
                        <div class="item-title">Chip 3</div>
                        <div class="item-after"><div>10</div></div>
                    </div>
                </div>
                <div class="item-content customBet myBtn" style="padding-right: 16px" disabled="">
                    <div
                        class="slideDown"
                        id="betContent4"
                        style="border-bottom: 1px solid rgb(244, 244, 244); padding-left: 6px">
                        <div class="item-title">Chip 4</div>
                        <div class="item-after"><div>15</div></div>
                    </div>
                </div>
                <div class="item-content customBet myBtn" style="padding-right: 16px" disabled="">
                    <div
                        class="slideDown"
                        id="betContent5"
                        style="border-bottom: 1px solid rgb(244, 244, 244); padding-left: 6px">
                        <div class="item-title">Chip 5</div>
                        <div class="item-after"><div>20</div></div>
                    </div>
                </div>
                <div class="item-content customBet myBtn" style="padding-right: 16px" disabled="">
                    <div
                        class="slideDown"
                        id="betContent6"
                        style="border-bottom: 1px solid rgb(244, 244, 244); padding-left: 6px">
                        <div class="item-title">Chip 6</div>
                        <div class="item-after"><div>50</div></div>
                    </div>
                </div>
                <div class="item-content customBet myBtn" style="padding-right: 16px" disabled="">
                    <div
                        class="slideDown"
                        id="betContent7"
                        style="border-bottom: 1px solid rgb(244, 244, 244); padding-left: 6px">
                        <div class="item-title">Chip 7</div>
                        <div class="item-after"><div>100</div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style scope>


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

.slideDown {
    padding-right: 16px;
    position: relative;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    min-height: 48px;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    min-width: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}

.list-block .item-title {
    min-width: 0;
    -webkit-box-flex: 1;
    flex-shrink: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    font-size: 14px !important;
}

dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}

dd {
    margin-bottom: .5rem;
    margin-left: 0;
}
</style>
