<template>
    <div>
        <Header title="Tài khoản của tôi" />
        <div class="page-content myaccountinfo">
            <div class="list-block">
                <ul>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">Đăng nhập tài khoản</div>
                                <div class="item-after"><span class="text-[#757575] text-sm">mrl9999</span></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title">Kiểu người dùng</div>
                                <div class="item-after"><span class="text-[#757575] text-sm">Đại lý</span></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <RouterLink to="/my-account-info-level" class="item-link">
                            <div class="item-content">
                                <div class="item-inner">
                                    <div class="item-title">Đặc quyền cấp</div>
                                    <ChevronRightIcon class="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li>
                        <RouterLink to="/my-account-info-password" class="item-link">
                            <div class="item-content">
                                <div class="item-inner">
                                    <div class="item-title">Quản lý mật khẩu</div>
                                    <ChevronRightIcon class="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/my-account-info-detail" class="item-link">
                            <div class="item-content">
                                <div class="item-inner">
                                    <div class="item-title">Tư liệu hoàn chỉnh</div>
                                    <ChevronRightIcon class="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="list-block">
                <ul>
                    <li>
                        <RouterLink to="/my-account-info-service" class="item-link">
                            <div class="item-content">
                                <div class="item-inner">
                                    <div class="item-title">Dịch vụ khách hàng của tôi</div>
                                    <ChevronRightIcon class="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="content-block">
                <button class="f7-button button-fill loginOut text-white" @click="logout()">Đăng xuất khỏi tài khoản hiện tại</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import Header from "./Header.vue";

const router = useRouter();

const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
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

.list-block .item-inner {
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

.content-block {
    margin: 15px 0;
    padding: 0 16px;
    box-sizing: border-box;
    height: auto;
}

.f7-button {
    width: 100%;
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
