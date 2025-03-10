<template>
    <div class="fixed z-99999999 pointer-events-none !top-3 left-1/2 transform -translate-x-1/2">
        <div v-if="message" :class="toastClass" aria-live="assertive" class="toast !top-0">
            <div>{{ message }}</div>
        </div>
    </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";

const props = defineProps({
    type: {
        type: String,
        required: true,
        validator: (value) => ['error', 'success'].includes(value)
    },
    message: {
        type: String,
        required: true
    }
});

const toastClass = computed(() => ({
    "toast-error": props.type === "error",
    "toast-success": props.type === "success",
}));

// log toast if change
watchEffect(() => {
    console.log("toast", props.message);
    console.log("toast", props.type);
});
</script>

<style scoped>
.toast {
    padding: 8px 8px 8px 50px;
    width: 18em;
    position: relative;
    pointer-events: auto;
    margin: 0 0 6px;
    border-radius: 3px;
    background-position: 15px center;
    background-repeat: no-repeat;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 0 12px #999;
    opacity: 0.8;
}

.toast-error {
    background-image: url('@client/assets/icons/toast-err.png');
    background-color: #BD362F;
    color: white;
}

.toast-success {
    background-image: url('@client/assets/icons/toast-scs.png');
    background-color: #51A351;
    color: white;
}
</style>
