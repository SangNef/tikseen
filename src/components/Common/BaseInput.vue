<script setup>
import { ref } from 'vue';
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
    modelValue: [String, Number],
    label: String,
    id: String,
    type: { type: String, default: 'text' },
    placeholder: String,
    required: { type: Boolean, default: false },
    customClass: { type: String, default: '' },
    labelClass: { type: String, default: '' },
    inputClass: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);
const isPasswordVisible = ref(false);

function handleInput(event) {
    emit('update:modelValue', event.target.value);
}

function togglePasswordVisibility() {
    isPasswordVisible.value = !isPasswordVisible.value;
}
</script>

<template>
    <div class="flex flex-col mt-4" :class="customClass">
        <label v-if="label" :for="id" class="text-[16px] leading-[24px] text-black mb-0" :class="labelClass">
            <slot name="label">{{ label }}</slot>
            <span v-if="required" class="text-red-500 ml-1">(*)</span>
        </label>
        <div class="relative">
            <input
                :type="isPasswordVisible && type === 'password' ? 'text' : type"
                :id="id"
                :placeholder="placeholder"
                :value="modelValue"
                :required="required"
                @input="handleInput"
                class="w-full h-11 p-[13px] border border-[#ababb1] rounded-lg outline-none"
                :class="inputClass"
            />
            <div
                v-if="type === 'password'"
                @click="togglePasswordVisibility"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
                <EyeSlashIcon v-if="!isPasswordVisible" class="w-6 h-6 text-gray-600" />
                <EyeIcon v-if="isPasswordVisible" class="w-6 h-6 text-gray-600" />
            </div>
        </div>
    </div>
</template>
