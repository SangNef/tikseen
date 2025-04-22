<template>
  <div class="p-2 flex flex-col gap-2 relative bg-white">
    <!-- Fast Message buttons -->
    <div class="flex gap-2">
      <div
        v-for="item in fastMsg.slice(0, 2)"
        :key="item.id"
        @click="addFastMsg(item.msg)"
        class="p-2 bg-gray-100 rounded-custom shadow-custom text-sm cursor-pointer hover:bg-gray-200 transition-colors duration-200">
        {{ item.msg.length > 20 ? item.msg.slice(0, 20) + '...' : item.msg }}
      </div>
    </div>

    <!-- Input & Icon area -->
    <div class="p-2 rounded-custom border border-gray-300 hover:border-primary transition-colors duration-200 relative">
      <textarea
        v-model="message"
        placeholder="Enter message here..."
        class="border-none outline-none w-full resize-none" />

      <div class="flex items-center gap-2">
        <!-- Fast Message Dropdown Trigger -->
        <div ref="fastDropdownRef" class="relative">
          <div
            class="flex gap-2 items-center pr-2 border-r-2 border-gray-300 cursor-pointer hover:text-primary transition-colors duration-200"
            @click="toggleFastDropdown">
            <ChatBubbleOvalLeftIcon class="w-6 h-6" />
            <span class="text-sm font-semibold">Message</span>
            <ChevronDownIcon class="w-5 h-5 stroke-[2.5]" />
          </div>

          <div
            v-if="showFastDropdown"
            class="absolute bottom-full mb-2 left-4 bg-white border border-gray-300 rounded-custom shadow-custom w-60 z-50">
            <div
              v-for="item in fastMsg"
              :key="item.id"
              @click="addFastMsg(item.msg)"
              class="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer transition-colors duration-200">
              {{ item.msg.length > 20 ? item.msg.slice(0, 20) + '...' : item.msg }}
            </div>
          </div>
        </div>

        <!-- Hashtag Dropdown Trigger -->
        <div ref="tagDropdownRef" class="relative cursor-pointer">
          <div @click="toggleTagDropdown" class="hover:text-primary transition-colors duration-200">
            <HashtagIcon class="w-5 h-5 stroke-2" />
          </div>

          <div
            v-if="showTagDropdown"
            class="absolute bottom-full mb-2 left-0 bg-white border border-gray-300 rounded-custom shadow-custom w-60 z-50">
            <div
              v-for="item in tags"
              :key="item.id"
              @click="addTag(item.tag)"
              class="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer transition-colors duration-200">
              {{ item.tag }}
            </div>
          </div>
        </div>

        <div class="cursor-pointer hover:text-primary transition-colors duration-200" @click="openFilePicker">
          <PaperClipIcon class="w-5 h-5 stroke-2" />
        </div>

        <div ref="emojiDropdownRef" class="relative cursor-pointer">
          <div @click="toggleEmojiPicker" class="hover:text-primary transition-colors duration-200">
            <FaceSmileIcon class="w-5 h-5 stroke-2" />
          </div>

          <div
            v-if="showEmojiPicker"
            :key="showEmojiPicker"
            class="absolute bottom-full mb-2 left-0 bg-white border border-gray-300 rounded-custom shadow-custom w-60 z-50">
            <EmojiPicker @select="addEmoji" />
          </div>
        </div>
      </div>
    </div>

    <!-- Tag Section -->
    <div
      class="flex items-center gap-2 ml-2 cursor-pointer hover:text-primary transition-colors duration-200"
      @click="toggleTagModal">
      <TagIcon class="w-5 h-5 stroke-2" />
      <span class="text-sm font-semibold">Add tag</span>
    </div>

    <input type="file" ref="fileInputRef" class="hidden" @change="handleFileChange" />

    <!-- Tag Modal -->
    <div v-if="showTagModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-xl p-6 w-96 relative">
        <h2 class="text-lg font-semibold mb-4">Add a Tag</h2>
        <div class="flex w-full gap-2 flex-nowrap mb-4">
          <input
            type="text"
            placeholder="Enter new tag"
            class="border border-gray-300 w-full rounded-lg px-3 py-1 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200" />
          <button
            class="bg-primary px-3 rounded-lg text-white hover:bg-primary-dark duration-300"
            @click="handleAddTag">
            Add
          </button>
        </div>

        <div class="flex flex-wrap gap-2">
          <div
            v-for="item in tags"
            :key="item.id"
            class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer text-sm w-max transition-colors duration-200">
            {{ item.tag }}
          </div>
        </div>

        <button
          @click="showTagModal = false"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import fastMsg from '@/data/fast';
import tags from '@/data/tag';
import {
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  FaceSmileIcon,
  HashtagIcon,
  PaperClipIcon,
  TagIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import EmojiPicker from 'vue3-emoji-picker';
import 'vue3-emoji-picker/css';

const message = ref('');

const showFastDropdown = ref(false);
const showTagDropdown = ref(false);
const fastDropdownRef = ref(null);
const tagDropdownRef = ref(null);
const fileInputRef = ref(null);
const emojiDropdownRef = ref(null);

const showEmojiPicker = ref(false);
const showTagModal = ref(false);

function toggleFastDropdown() {
  showFastDropdown.value = !showFastDropdown.value;
  showTagDropdown.value = false;
}

function toggleTagDropdown() {
  showTagDropdown.value = !showTagDropdown.value;
  showFastDropdown.value = false;
}

function addFastMsg(text) {
  message.value = message.value ? message.value.trim() + ' ' + text : text;
  showFastDropdown.value = false;
  showTagDropdown.value = false;
}

function addTag(tag) {
  message.value = message.value ? message.value.trim() + ' ' + tag : tag;
  showTagDropdown.value = false;
}

const handleClickOutside = (event) => {
  if (
    fastDropdownRef.value &&
    !fastDropdownRef.value.contains(event.target) &&
    tagDropdownRef.value &&
    !tagDropdownRef.value.contains(event.target) &&
    emojiDropdownRef.value &&
    !emojiDropdownRef.value.contains(event.target)
  ) {
    showFastDropdown.value = false;
    showTagDropdown.value = false;
    showEmojiPicker.value = false;
  }
};

function toggleTagModal() {
  showTagModal.value = !showTagModal.value;
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

function openFilePicker() {
  if (fileInputRef.value) {
    fileInputRef.value.click();
  }
}

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    console.log('Selected file:', file);
    // Xử lý upload ở đây
  }
}

function toggleEmojiPicker() {
  showEmojiPicker.value = !showEmojiPicker.value;
  showFastDropdown.value = false;
  showTagDropdown.value = false;
}

function addEmoji(emoji) {
  console.log('emoji: ', emoji);
  message.value = message.value ? message.value.trim() + ' ' + emoji.i : emoji.i;
  showEmojiPicker.value = false;
}

function handleAddTag() {
  console.log('add tag');
  toggleTagModal();
  // xử lý add tag
}
</script>

<style scoped></style>
