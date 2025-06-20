<template>
    <a-table :columns="columns" :data-source="[]" :pagination="false" class="h-[320px] overflow-auto">
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
    </a-table>
</template>

<script setup>
import { Table as ATable } from "ant-design-vue";

const columns = [
    { title: "Thời gian", dataIndex: "Time", key: "Time", width: 200 },
    { title: "Cặp", dataIndex: "pair", key: "pair", width: 170 },
    { title: "Bên", dataIndex: "side", key: "side", width: 60 },
    { title: "Kiểu", dataIndex: "type", key: "type", width: 100 },
    { title: "Giá", dataIndex: "price", key: "price", width: 100 },
    { title: "Khối lượng", dataIndex: "volume", key: "volume", width: 180 },
    { title: "Hoàn thành", dataIndex: "status", key: "status", width: 100 },
    { title: "Chốt lời/Cắt lỗ", dataIndex: "tpSl", key: "tpSl", width: 190 },
    { title: "Chi giảm", dataIndex: "reduceOnly", key: "reduceOnly", width: 120 },
    { title: "Chi giảm 2", dataIndex: "reduceOnly2", key: "reduceOnly2", width: 120 },
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
