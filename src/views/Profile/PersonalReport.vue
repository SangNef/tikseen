<template>
    <div>
        <nav class="h-11 bg-[#e72732] flex justify-between p-3 items-center fixed top-0 left-0 right-0 z-50">
            <button type="button" class="text-white" style="outline: none; border: 0px" @click="goBack">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    size="24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
            </button>
            <p class="p text-white" style="margin-bottom: 0px; font-size: 18px">Báo cáo</p>
            <div class="flex items-center" @click="toggleFilter">
                <span class="text-xs text-white pl-2 leading-5">{{ selectedFilter }}</span>
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    size="20"
                    height="20"
                    width="20"
                    class="text-white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
            </div>
        </nav>
        <div v-if="showFilter" class="p-4 border border-[#0000002d] mt-11">
            <hr class="hr-text" data-content="Ngày" />
            <button
                v-for="(filter, index) in filters"
                :key="index"
                @click="selectFilter(filter)"
                :class="[
                    'btn btn-outline-secondary btn-sm',
                    { 'theme-background-color': selectedFilter === filter, 'color-gray': selectedFilter !== filter },
                ]"
                style="width: 30%; margin: 1.3%">
                {{ filter }}
            </button>
        </div>
        <div class="mt-11 overflow-y-auto h-screen">
            <div class="userface">
                <div class="DataTotal" :style="{ backgroundImage: `url(${backdropBg})` }">
                    <dl>
                        <dt style="font-weight: unset">
                            <span class="text-2xl align-top">₫</span> <span id="todayProfit">0</span>
                        </dt>
                        <dd>Lãi lỗ cá nhân (₫)</dd>
                        <dd style="width: 65%; margin: 0px auto">
                            <br />Công thức tính toán lãi lỗ: Trúng thưởng-đặt lệnh-hoàn trả-tổng tiền thưởng hoạt động
                            (báo cáo chỉ tính số liệu đã quyết toán)
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="content-block DataTotal-sub" style="margin-top: -50px">
                <h3 style="border-bottom: none">{{ contentBlocks[0].title }}</h3>
                <div class="DataTotal-box h-43">
                    <dl v-for="item in contentBlocks[0].data" :key="item.id" class="col-4" :idvalue="item.id">
                        <dt class="red" style="font-weight: unset">
                            <span class="text-xs align-top">₫</span> <span :id="item.id">{{ item.value }}</span>
                        </dt>
                        <dd>{{ item.label }}</dd>
                    </dl>
                </div>
            </div>
            <div class="content-block DataTotal-sub">
                <h3 style="border-bottom: none">{{ contentBlocks[1].title }}</h3>
                <div class="DataTotal-box h-43">
                    <dl v-for="item in contentBlocks[1].data" :key="item.id" class="col-4" :idvalue="item.id">
                        <dt class="blue" style="font-weight: unset">
                            <span class="text-xs align-top">₫</span> <span :id="item.id">{{ item.value }}</span>
                        </dt>
                        <dd>{{ item.label }}</dd>
                    </dl>
                </div>
            </div>
            <div class="content-block DataTotal-sub">
                <h3 style="border-bottom: none">{{ contentBlocks[2].title }}</h3>
                <div class="DataTotal-box h-43">
                    <dl v-for="item in contentBlocks[2].data" :key="item.id" class="col-4" :idvalue="item.id">
                        <dt class="green" style="font-weight: unset">
                            <span class="text-xs align-top">₫</span> <span :id="item.id">{{ item.value }}</span>
                        </dt>
                        <dd>{{ item.label }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import backdropBg from "@client/assets/images/bg/backdrop-bg.png";

const router = useRouter();

const goBack = () => {
    router.go(-1);
};

const showFilter = ref(false);
const selectedFilter = ref("Hôm Qua");
const filters = ref(["Hôm Nay", "Hôm Qua", "Tuần Này", "Tuần Trước", "Tháng Này", "Tháng Trước"]);

const contentBlocks = ref([
    {
        title: "Đặt lệnh của tôi",
        data: [
            { id: "betMoney", label: "Số tiền đặt lệnh", value: 0 },
            { id: "totalValidAmount", label: "Lệnh hợp lệ", value: 0 },
            { id: "awardMoney", label: "Số tiền thắng", value: 0 },
            { id: "rebateMoney", label: "Khuyến khích lệnh", value: 0 },
        ],
    },
    {
        title: "Tiền vốn của tôi",
        data: [
            { id: "depositAmount", label: "Số tiền nạp", value: 0 },
            { id: "withdrawAmount", label: "Số tiền rút", value: 0 },
            { id: "totalBonus", label: "Tổng tiền thưởng hoạt động", value: 0 },
            { id: "transferAmount", label: "Số tiền chuyển khoản", value: 0 },
            { id: "receivedAmount", label: "Số tiền nhận được", value: 0 },
        ],
    },
    {
        title: "Hồng bao của tôi",
        data: [
            { id: "redEnvelopeCollected", label: "Bộ sưu tập hồng bao", value: 0 },
            { id: "redEnvelopeDistributed", label: "Phân phát hồng bao", value: 0 },
            { id: "redEnvelopeRefunded", label: "Hồng bao trả lại", value: 0 },
        ],
    },
]);

const toggleFilter = () => {
    showFilter.value = !showFilter.value;
};

const selectFilter = (filter) => {
    selectedFilter.value = filter;
    showFilter.value = false; // Ẩn filter sau khi chọn
};
</script>

<style scoped>
.hr-text {
    position: relative;
    height: 1.5em;
    font-size: 12px;
    line-height: 1em;
    color: #000;
    text-align: center;
    border: 0;
    outline: 0;
    opacity: 0.5;
}

.hr-text:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    content: " ";
    background: linear-gradient(90deg, transparent, #818078, transparent);
}

.hr-text:after {
    position: relative;
    display: inline-block;
    padding: 0 0.5em;
    line-height: 1.5em;
    color: #000;
    content: attr(data-content);
    background-color: #fcfcfa;
}

.theme-background-color {
    background: #e72732 !important;
    font-size: 12px;
    color: white !important;
}

.btn-outline-secondary {
    color: #f1ebe9;
    border: 1px solid #f1ebe9;
}

.btn-group-sm > .btn,
.btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
}

.color-gray {
    color: #9e9e9e;
}

.userface {
    background: #e72732;
    color: #fff;
    margin: 0;
}

.DataTotal {
    padding: 16px 16px 48px;
    background-size: 100% 100%;
    position: relative;
}

.DataTotal dl {
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 1;
}

.DataTotal dt {
    margin: 0;
    padding: 0;
    font-size: 34px;
}

.DataTotal dd {
    margin: 6px 0 0;
    padding: 0;
    font-size: 14px;
}

.DataTotal-sub {
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
    margin: 16px;
    padding: 0;
    border-radius: 8px 8px 0 0;
}

.content-block {
    box-sizing: border-box;
    height: auto;
}

.DataTotal-sub h3 {
    padding: 12px 16px;
    font-size: 14px;
    line-height: 1;
    font-weight: 700;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
}

.DataTotal-sub dl.col-4 {
    width: 33.33%;
    float: left;
}

.DataTotal-sub dl {
    margin: 0;
    padding: 0 0 32px;
    text-align: center;
    line-height: 1;
}

.DataTotal-sub dt {
    margin: 0;
    padding: 0;
    font-size: 18px;
}

.red {
    color: #f44336;
}

.blue {
    color: #2196f3;
}

.green {
    color: #4caf50;
}

.DataTotal-sub dd {
    margin: 6px 0 0;
    padding: 0;
    font-size: 12px;
    color: #999;
    height: 30px;
}
</style>
