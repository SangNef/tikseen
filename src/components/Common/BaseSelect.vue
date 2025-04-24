<script setup>
import { watch, onMounted } from 'vue';

const props = defineProps({
    modelValue: [String, Number],
    label: String,
    id: String,
    required: { type: Boolean, default: false },
    options: { type: Array, default: () => [] },
    labelClass: { type: String, default: '' },
    selectClass: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);

function handleChange(event) {
    emit('update:modelValue', event.target.value);
}

// Set mặc định ngay khi options có dữ liệu
function setDefault() {
    if ((props.modelValue === null || props.modelValue === '' || props.modelValue === undefined) && props.options.length > 0) {
        emit('update:modelValue', props.options[0].value);
    }
}

onMounted(() => {
    setDefault();
});

watch(
    () => props.options,
    () => {
        setDefault();
    },
    { immediate: true }  // chạy ngay khi watch khởi tạo, kể cả options đã có giá trị.
);
</script>

<template>
    <div class="flex flex-col mt-4">
        <label v-if="label" :for="id" :class="['text-[16px] leading-[24px] text-black mb-0', labelClass]">
            {{ label }}
            <span v-if="required" class="text-red-500 ml-1">(*)</span>
        </label>
        <select
            :id="id"
            :value="modelValue"
            @change="handleChange"
            :required="required"
            :class="['w-full h-11 px-[13px] border border-[#ababb1] rounded-lg outline-none', selectClass]"
        >
            <option
                v-for="(item, index) in options"
                :key="index"
                :value="item.value"
            >
                {{ item.label }}
            </option>
        </select>
    </div>
</template>
