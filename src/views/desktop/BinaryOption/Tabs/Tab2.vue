<template>
    <div class="filter-order flex items-center gap-3 flex-wrap py-3">
        <span class="text-[#515c70] font-semibold text-xs">Cặp</span>
        <a-select v-model:value="pair" style="width: 120px" :options="pairOptions" placeholder="Tất cả" size="small" />
        <span class="text-[#515c70] font-semibold text-xs">Bên</span>
        <a-select v-model:value="type" style="width: 120px" :options="typeOptions" placeholder="Tất cả" size="small" />
        <span class="text-[#515c70] font-semibold text-xs">Trạng thái</span>
        <a-select
            v-model:value="status"
            style="width: 120px"
            :options="statusOptions"
            placeholder="Tất cả"
            size="small" />

        <span class="text-[#515c70] font-semibold text-xs">Ngày tháng</span>
        <a-range-picker
            v-model:value="dateRange"
            style="width: 240px"
            size="small"
            format="DD/MM/YYYY"
            :placeholder="['Ngày bắt đầu', 'Ngày kết thúc']" />
    </div>
    <a-table :columns="columns" :data-source="dataSource" :pagination="false" class="h-[320px] overflow-auto relative">
        <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'pair'">
                <div class="flex items-center">
                    <div class="relative mr-2 w-[22px] h-[22px]">
                        <img
                            class="w-[18px] h-[18px] absolute left-0 top-0 opacity-90 z-10"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
                            alt="BTC" />
                        <img
                            class="w-[18px] h-[18px] absolute left-2 top-1 opacity-90 z-0"
                            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png"
                            alt="USDT" />
                    </div>
                    <span class="">{{ record.pair }}</span>
                </div>
            </template>
            <template v-else-if="column.dataIndex === 'result'">
                <div
                    class="flex items-center font-medium capitalize"
                    :class="record.result === 'Short' ? 'text-red-500' : 'text-green-500'">
                    <span class="min-w-[35px]">{{ record.result }}</span>
                    <svg
                        v-if="record.result === 'Short'"
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20">
                        <path d="m7 10 5 5 5-5z" fill="currentColor"></path>
                    </svg>
                    <svg
                        v-else
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20">
                        <path d="m7 14 5-5 5 5z" fill="currentColor"></path>
                    </svg>
                </div>
            </template>
            <template v-else-if="column.dataIndex === 'position'">
                <div
                    class="flex items-center font-medium capitalize"
                    :class="record.position === 'Short' ? 'text-red-500' : 'text-green-500'">
                    <span class="min-w-[36px]">{{ record.position }}</span>
                    <svg
                        v-if="record.position === 'Short'"
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20">
                        <path d="m7 10 5 5 5-5z" fill="currentColor"></path>
                    </svg>
                    <svg
                        v-else
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20">
                        <path d="m7 14 5-5 5 5z" fill="currentColor"></path>
                    </svg>
                </div>
            </template>
            <template v-else-if="column.dataIndex === 'totalProfit'">
                <span :class="record.totalProfit.startsWith('+') ? 'text-green-500' : 'text-red-500'">
                    {{ record.totalProfit }}
                </span>
            </template>
        </template>
        <template #emptyText>
            <div class="flex flex-col gap-3 items-center justify-center mt-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="68" viewBox="0 0 54 68" fill="none">
                    <path
                        d="M13.6654 54H40.332V47.3333H13.6654V54ZM13.6654 40.6666H40.332V34H13.6654V40.6666ZM6.9987 67.3333C5.16536 67.3333 3.59648 66.6811 2.29203 65.3766C0.985364 64.07 0.332031 62.5 0.332031 60.6666V7.33329C0.332031 5.49996 0.985364 3.92996 2.29203 2.62329C3.59648 1.31885 5.16536 0.666626 6.9987 0.666626H33.6654L53.6654 20.6666V60.6666C53.6654 62.5 53.0131 64.07 51.7087 65.3766C50.402 66.6811 48.832 67.3333 46.9987 67.3333H6.9987ZM30.332 24H46.9987L30.332 7.33329V24Z"
                        fill="#2E3342"></path>
                </svg>
                <span class="text-gray-600 text-xs font-bold">Bạn không có vị thế nào</span>
            </div>
        </template>
        <!--  -->
    </a-table>
</template>

<script setup>
import { ref } from "vue";
import { Table as ATable, Select as ASelect, DatePicker as ADatePicker } from "ant-design-vue";

const { RangePicker: ARangePicker } = ADatePicker;

const pair = ref("");
const type = ref("");
const status = ref("");
const dateRange = ref();

const pairOptions = [
    { label: "Tất cả", value: "" },
    { label: "BTCUSDT", value: "BTCUSDT" },
    { label: "ETHUSDT", value: "ETHUSDT" },
    // Thêm các cặp khác nếu cần
];
const typeOptions = [
    { label: "Tất cả", value: "" },
    { label: "BTCUSDT", value: "BTCUSDT" },
    { label: "ETHUSDT", value: "ETHUSDT" },
    // Thêm các kiểu khác nếu cần
];
const statusOptions = [
    { label: "Tất cả", value: "" },
    { label: "BTCUSDT", value: "BTCUSDT" },
    { label: "ETHUSDT", value: "ETHUSDT" },
    // Thêm các trạng thái khác nếu cần
];

const columns = [
    {
        title: "Cặp giao dịch",
        dataIndex: "pair",
        key: "pair",
        width: 150,
    },
    {
        title: "Block",
        dataIndex: "block",
        key: "block",
        width: 100,
    },
    {
        title: "Giá mở cửa (USDT)",
        dataIndex: "openPrice",
        key: "openPrice",
        width: 150,
    },
    {
        title: "Giá đóng cửa (USDT)",
        dataIndex: "closePrice",
        key: "closePrice",
        width: 150,
    },
    {
        title: "Giá trị vị thế",
        dataIndex: "value",
        key: "value",
        width: 150,
    },
    {
        title: "Kết quả",
        dataIndex: "result",
        key: "result",
        width: 100,
    },
    {
        title: "Vị thế",
        dataIndex: "position",
        key: "position",
        width: 100,
    },
    {
        title: "Tổng lãi/lỗ (USDT)",
        dataIndex: "totalProfit",
        key: "totalProfit",
        width: 150,
    },
];

const dataSource = [
    {
        key: "20250617NK672HPE",
        pair: "BTCUSDT",
        block: "1950169245",
        openPrice: "108097.1094",
        closePrice: "108037.4609",
        value: "0.1",
        result: "Short",
        position: "Long",
        totalProfit: "+12.2070",
    },
    {
        key: "20250531N2ZH24X8",
        pair: "BTCUSDT",
        block: "1950157304",
        openPrice: "103771.3203",
        closePrice: "103745.4062",
        value: "12.5",
        result: "Short",
        position: "Long",
        totalProfit: "-0.1000",
    },
    // ...Thêm các dòng khác tương tự
];
</script>

<style scoped>
:deep(.ant-table) {
    color: #464f5f !important;
    background: #111419 !important;
}

:deep(.ant-table-thead > tr > th) {
    font-size: 0.8rem !important;
    font-weight: 600 !important;
    border-bottom: 1px solid #1d2433 !important;
    border-top: 1px solid #1d2433 !important;
    white-space: nowrap;
    color: #464f5f !important;
    background: #111419 !important;
}
</style>

<style>
.ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    width: 0 !important;
    background: transparent !important;
}

.ant-table-cell {
    border-bottom: unset !important;
}

.ant-table-tbody > tr > td {
    color: #464f5f !important;
    background: #111419 !important;
    border-bottom: 1px solid #1d2433 !important;
    border-top: 1px solid #1d2433 !important;
}
</style>
