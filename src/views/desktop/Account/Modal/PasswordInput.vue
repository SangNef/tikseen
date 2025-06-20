<template>
    <div class="!mb-3.5">
        <p class="text-[#7b8798] !mb-1.5">{{ label }}</p>
        <div class="relative">
            <input
                :type="show ? 'text' : 'password'"
                class="w-full bg-[#090d17] focus:ring-4 ring-[#01bc8d]/30 border border-transparent hover:border-[#01bc8d]/80 focus:border-[#01bc8d]/80 duration-100 rounded-md p-3 outline-none pr-20"
                :placeholder="placeholder"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" />
            <div class="absolute right-3.5 top-2.5 cursor-pointer" @click="toggle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="22"
                    height="22"
                    class="text-[#7b8798]">
                    <path
                        v-if="show"
                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" />
                    <path
                        v-else
                        d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps(["label", "placeholder", "modelValue"]);
defineEmits(["update:modelValue"]);

const show = ref(false);
const toggle = () => {
    show.value = !show.value;
};
</script>
