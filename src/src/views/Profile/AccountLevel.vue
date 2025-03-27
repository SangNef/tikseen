<template>
    <div>
        <Header title="Đặc quyền cấp" />
        <div
            class="h-[calc(100vh-env(safe-area-inset-bottom)-44px)] overflow-auto bg-no-repeat"
            :style="{ backgroundImage: `url(${vlbg})` }"
            style="background-position: center 40%; background-size: 300px 350px"
        >
            <table class="table_1">
                <thead>
                    <tr>
                        <th>Đẳng cấp</th>
                        <th>Ký hiệu</th>
                        <th>Giá trị tăng trưởng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(level, index) in levels" :key="index">
                        <td>{{ level.name }}</td>
                        <td><img :src="level.img" :alt="level.name" class="mx-auto" /></td>
                        <td><span>{{ level.value }}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
import vlbg from "@client/assets/images/bg/vlbg.png";
import vip0 from "@client/assets/images/profile/vip0.png";
import vip1 from "@client/assets/images/profile/vip1.png";
import vip2 from "@client/assets/images/profile/vip2.png";
import vip3 from "@client/assets/images/profile/vip3.png";
import vip4 from "@client/assets/images/profile/vip4.png";
import vip5 from "@client/assets/images/profile/vip5.png";
import vip6 from "@client/assets/images/profile/vip6.png";
import vip7 from "@client/assets/images/profile/vip7.png";
import vip8 from "@client/assets/images/profile/vip8.png";
import vip9 from "@client/assets/images/profile/vip9.png";
import vip10 from "@client/assets/images/profile/vip10.png";

const levels = [
    { name: "Cấp độ 0", img: vip0, value: "0" },
    { name: "Cấp 1", img: vip1, value: "50,000" },
    { name: "Cấp 2", img: vip2, value: "300,000" },
    { name: "Cấp 3", img: vip3, value: "600,000" },
    { name: "Cấp 4", img: vip4, value: "3,000,000" },
    { name: "Cấp 5", img: vip5, value: "30,000,000" },
    { name: "Cấp 6", img: vip6, value: "150,000,000" },
    { name: "Cấp 7", img: vip7, value: "600,000,000" },
    { name: "Cấp 8", img: vip8, value: "3,000,000,000" },
    { name: "Cấp 9", img: vip9, value: "15,000,000,000" },
    { name: "Cấp 10", img: vip10, value: "50,000,000,000" },
];
</script>

<style scoped>
.table_1 {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    height: 40px;
    border-bottom: 1px solid #eaeaea;
    width: 33.33%;
    border-right: 1px solid #eaeaea;
    font-size: 14px;
}

img {
    display: block;
    width: 75px;
    height: auto;
}
</style>
