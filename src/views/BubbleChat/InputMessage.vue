<template>
  <div class="p-4 border-t border-gray-200 bg-white md:pb-4 pb-6">
    <!-- File upload preview section -->
    <div v-if="selectedFile" class="mt-3 mb-2">
      <div class="rounded-md border border-gray-200 overflow-hidden">
        <div class="flex items-center justify-between bg-gray-50 px-3 py-2">
          <div class="flex items-center">
            <span class="text-green-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <span class="text-sm font-medium">1 của 1 đã tải lên</span>
          </div>
          <button @click="togglePreview" class="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
              v-if="showPreview">
              <path
                fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" v-else>
              <path
                fill-rule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31 5.03 16.28a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div v-if="showPreview" class="relative">
          <div class="relative aspect-auto">
            <img v-if="filePreview" :src="filePreview" class="max-h-32 w-full object-contain" alt="Preview" />
            <div class="absolute top-2 right-2">
              <span class="bg-green-600 p-1 rounded-full inline-flex text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
          <div class="px-3 py-2 text-sm text-gray-600 bg-white border-t border-gray-200">
            {{ selectedFile.name }}
          </div>
        </div>
      </div>

      <button
        @click="sendFile"
        class="mt-2 w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
        Gửi file
      </button>
    </div>

    <!-- Input message -->
    <div class="flex items-center gap-2">
      <div class="flex-grow relative">
        <input
          v-model="msg"
          type="text"
          placeholder="Nhập tin nhắn..."
          class="w-full border border-gray-300 rounded-full py-2.5 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          @keyup.enter="handleSend" />

        <!-- File button inside input -->
        <button
          type="button"
          class="absolute right-[10px] bg-gray-100 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0"
          @click="openFilePicker">
          <PhotoIcon class="w-4 h-4" />
        </button>
      </div>

      <button
        type="button"
        class="p-2 text-white rounded-full flex items-center justify-center focus:outline-none flex-shrink-0"
        :style="{ backgroundColor: widgetSettings.themeColor }"
        @click="handleSend"
        :disabled="!msg.trim() && !selectedFile">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>

      <input type="file" ref="fileInputRef" accept="image/*" class="hidden" @change="handleFileChange" />
    </div>

    <!-- Language selector -->
    <div v-if="widgetSettings.autoTranslate" class="mt-2 text-xs text-gray-500 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3.5 w-3.5 inline-block mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <select v-model="selectedLanguage" class="text-xs border-none bg-transparent focus:outline-none">
        <option value="vi">Tiếng Việt</option>
        <option value="en">Tiếng Anh</option>
        <option value="ja">Tiếng Nhật</option>
        <option value="ko">Tiếng Hàn</option>
        <option value="zh">Tiếng Trung</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { PhotoIcon } from '@heroicons/vue/24/outline';
// import EmojiPicker from 'vue3-emoji-picker';
// import 'vue3-emoji-picker/css';

const props = defineProps({
  widgetSettings: {
    type: Object,
    default: () => ({
      themeColor: '#3b82f6',
      autoTranslate: false,
      language: 'vi',
    }),
  },
});

const emit = defineEmits(['send-message']);
const msg = ref('');
const fileInputRef = ref(null);
const selectedLanguage = ref(props.widgetSettings.language || 'vi');
const selectedFile = ref(null);
const filePreview = ref(null);
const showPreview = ref(true);

function handleSend() {
  if (!msg.value.trim() && !selectedFile.value) {
    return;
  }

  if (msg.value.trim()) {
    emit('send-message', msg.value, selectedFile.value);
    msg.value = '';
    clearSelectedFile();
  } else if (selectedFile.value) {
    sendFile();
  }
}

function sendFile() {
  emit('send-message', '', selectedFile.value);
  clearSelectedFile();
}

function togglePreview() {
  showPreview.value = !showPreview.value;
}

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;

    // Tạo preview cho file
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        filePreview.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}

function clearSelectedFile() {
  selectedFile.value = null;
  filePreview.value = null;
  if (fileInputRef.value) {
    fileInputRef.value.value = '';
  }
}

function openFilePicker() {
  if (fileInputRef.value) {
    fileInputRef.value.click();
  }
}
</script>

<style scoped>
.language_selector {
  margin-top: 8px;
  text-align: center;
}

.language_select {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: var(--rounded-md);
  border: 1px solid var(--border-light);
  background-color: var(--bg-light);
  color: var(--text-gray);
}
</style>
