<template>
    <div>
        <Header title="Quên mật khẩu" />
        <form>
            <div class="list-block inputs-list">
                <ul>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">Tài khoản thành viên</div>
                            <div class="item-input">
                                <input
                                    type="text"
                                    name="forgotpasswordusername"
                                    placeholder=""
                                    maxlength="12"
                                    style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)" />
                            </div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">Mã xác nhận</div>
                            <div class="item-input item-code">
                                <input
                                    type="number"
                                    name="validCode"
                                    placeholder=""
                                    maxlength="4"
                                    value=""
                                    style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)" /><img
                                    src=""
                                    id="forgotPasswordValidCode"
                                    style="display: none" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="content-block"><div href="#" class="f7-button button-fill register-button">Xác nhận</div></div>
            <div class="tip" style="background-color: white; padding: 10px 15px 0px; font-size: 12px">
                Lời nhắn: Sau khi kiểm tra chính xác tài khoản thành viên, hệ thống sẽ tự động gửi thư đến hộp thư
                E-MAIL đã đặt trong hồ sơ thành viên, hãy kiểm tra kỹ nhé!
            </div>
        </form>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style scope></style>
