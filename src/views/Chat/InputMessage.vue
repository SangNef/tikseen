<template>
  <div class="p-2 flex flex-col gap-2 relative bg-white">
    <!-- Fast Message buttons -->
    <!-- <div class="flex gap-2">
      <div
        v-for="item in fastMsg.slice(0, 2)"
        :key="item.id"
        @click="addFastMsg(item.msg)"
        class="p-2 bg-gray-100 rounded-custom shadow-custom text-sm cursor-pointer hover:bg-gray-200 transition-colors duration-200">
        {{ item.msg.length > 20 ? item.msg.slice(0, 20) + '...' : item.msg }}
      </div>
    </div> -->

    <!-- Input & Icon area -->
    <div class="p-2 rounded-custom border border-gray-300 hover:border-primary transition-colors duration-200 relative">
      <textarea
        v-model="message"
        placeholder="Enter message here..."
        class="border-none outline-none w-full resize-none"
        @keydown.enter.prevent="sendMessage" />

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <!-- Fast Message Dropdown Trigger -->
          <div ref="fastDropdownRef" class="relative">
            <!-- <div
              class="flex gap-2 items-center pr-2 border-r-2 border-gray-300 cursor-pointer hover:text-primary transition-colors duration-200"
              @click="toggleFastDropdown">
              <ChatBubbleOvalLeftIcon class="w-6 h-6" />
              <span class="text-sm font-semibold">Message</span>
              <ChevronDownIcon class="w-5 h-5 stroke-[2.5]" />
            </div> -->

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
              class="absolute bottom-full mb-2 left-0 bg-white border border-gray-300 rounded-custom shadow-custom w-60 z-50 min-h-80 max-h-80 overflow-y-auto">
              <div class="sticky top-0 bg-white border-b border-gray-200">
                <div class="p-2">
                  <input
                    type="text"
                    v-model="shortcutSearch"
                    placeholder="#Type shortcut..."
                    class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div class="px-2 pb-1 text-xs text-gray-500">
                  <div class="flex justify-between items-center">
                    <button
                      @click="toggleCannedResponseModal"
                      class="flex items-center gap-1 text-primary text-xs hover:text-primary-dark transition-colors duration-200">
                      <PlusIcon class="w-3 h-3" />
                      <span>Create canned</span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                v-for="item in filteredShortcuts"
                :key="item.id"
                @click="addShortcut(item.text)"
                class="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer transition-colors duration-200 flex justify-between items-center">
                <span>{{ item.tag }}</span>
                <span class="text-gray-500">{{ item.count }}</span>
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

        <!-- Send button -->
        <button
          @click="sendMessage"
          :disabled="!message.trim()"
          :class="[
            'px-4 py-1.5 rounded-lg text-white flex items-center gap-1 transition-colors duration-200',
            message.trim() ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-300 cursor-not-allowed',
          ]">
          <span>Send</span>
          <svg
            v-if="sendStatus === 'sending'"
            class="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Thêm nút Create Canned Response -->
    <!-- <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 ml-2 cursor-pointer hover:text-primary transition-colors duration-200">
        <div class="flex items-center" @click="toggleCannedResponseModal">
          <DocumentPlusIcon class="w-5 h-5 stroke-2" />
          <span class="text-sm font-semibold">Create canned</span>
        </div>
      </div>
    </div> -->

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

    <!-- Canned Response Modal -->
    <div v-if="showCannedResponseModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-xl p-6 w-[480px] relative max-w-[95vw]">
        <h2 class="text-lg font-semibold mb-4">Create canned response</h2>

        <div class="flex mb-4 border-b pb-2">
          <button
            @click="responseType = 'shared'"
            :class="[
              'flex-1 p-2 rounded-lg flex items-center justify-center gap-2',
              responseType === 'shared' ? 'bg-gray-100' : 'hover:bg-gray-50',
            ]">
            <UsersIcon class="w-5 h-5" />
            <span>Shared</span>
          </button>
          <button
            @click="responseType = 'private'"
            :class="[
              'flex-1 p-2 rounded-lg flex items-center justify-center gap-2',
              responseType === 'private' ? 'bg-gray-100' : 'hover:bg-gray-50',
            ]">
            <UserIcon class="w-5 h-5" />
            <span>Private</span>
          </button>
        </div>

        <div class="text-sm text-gray-500 mb-4">
          {{
            responseType === 'shared'
              ? 'All group members will have access to this canned response'
              : 'Only you will have access to this canned response'
          }}
        </div>

        <div class="mb-4">
          <p class="font-medium mb-2">Response text</p>
          <textarea
            v-model="cannedResponseText"
            placeholder="Frequently used response..."
            class="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
          <div v-if="!cannedResponseText.trim()" class="text-red-500 text-xs mt-1">Enter your response.</div>
        </div>

        <div class="mb-4">
          <p class="font-medium mb-2 flex items-center">
            Shortcuts
            <span class="ml-1 w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs"
              >?</span
            >
          </p>
          <input
            type="text"
            placeholder="#Type shortcut..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
          <div class="text-gray-500 text-xs mt-1">Hit enter to add a new one</div>
        </div>

        <div class="flex justify-end gap-2 mt-6">
          <button
            @click="showCannedResponseModal = false"
            class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Cancel
          </button>
          <button
            @click="saveCannedResponse"
            :disabled="!cannedResponseText.trim()"
            :class="[
              'px-4 py-2 rounded-lg text-white',
              cannedResponseText.trim() ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-300 cursor-not-allowed',
            ]">
            Save
          </button>
        </div>

        <button
          @click="showCannedResponseModal = false"
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
  UserIcon,
  UsersIcon,
  DocumentPlusIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline';
import { onBeforeUnmount, onMounted, ref, computed, nextTick, watch } from 'vue';
import EmojiPicker from 'vue3-emoji-picker';
import 'vue3-emoji-picker/css';

const props = defineProps({
  chat: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['send-message']);

const message = ref('');
const sendStatus = ref(''); // 'sending', 'sent', 'seen', ''

const showFastDropdown = ref(false);
const showTagDropdown = ref(false);
const fastDropdownRef = ref(null);
const tagDropdownRef = ref(null);
const fileInputRef = ref(null);
const emojiDropdownRef = ref(null);

const showEmojiPicker = ref(false);
const showTagModal = ref(false);
const showCannedResponseModal = ref(false);
const responseType = ref('shared');
const cannedResponseText = ref('');
const shortcutSearch = ref('');

// Mẫu shortcuts để demo
const shortcuts = [
  { id: 1, tag: 'anytime', text: 'Chúng tôi sẵn sàng phục vụ bạn bất cứ lúc nào!', count: 3 },
  { id: 2, tag: 'bye', text: 'Cảm ơn bạn đã liên hệ. Chúc bạn một ngày tốt lành!', count: 3 },
  { id: 3, tag: 'feedback', text: 'Cảm ơn phản hồi của bạn. Chúng tôi sẽ cải thiện dịch vụ!', count: 3 },
  { id: 4, tag: 'help', text: 'Tôi có thể giúp gì cho bạn?', count: 2 },
  { id: 5, tag: 'hi', text: 'Xin chào! Tôi có thể giúp gì cho bạn hôm nay?', count: 3 },
  { id: 6, tag: 'product', text: 'Sản phẩm của chúng tôi có nhiều tính năng hữu ích.', count: 2 },
  { id: 7, tag: 'sure', text: 'Chắc chắn rồi! Tôi sẽ hỗ trợ bạn ngay.', count: 3 },
  { id: 8, tag: 'ticket', text: 'Yêu cầu của bạn đã được ghi nhận. Mã ticket của bạn là #', count: 2 },
  { id: 9, tag: 'transfer', text: 'Tôi sẽ chuyển bạn đến bộ phận hỗ trợ chuyên nghiệp.', count: 2 },
  { id: 10, tag: 'wait', text: 'Vui lòng đợi trong giây lát.', count: 3 },
];

const filteredShortcuts = computed(() => {
  if (!shortcutSearch.value) return shortcuts;
  return shortcuts.filter((item) => item.tag.toLowerCase().includes(shortcutSearch.value.toLowerCase()));
});

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

function addShortcut(text) {
  message.value = message.value ? message.value.trim() + ' ' + text : text;
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

function toggleCannedResponseModal() {
  showCannedResponseModal.value = !showCannedResponseModal.value;
}

function saveCannedResponse() {
  console.log('Saved canned response:', {
    type: responseType.value,
    text: cannedResponseText.value,
  });
  showCannedResponseModal.value = false;
  cannedResponseText.value = '';
}

const sendMessage = () => {
  if (!message.value.trim()) return;

  sendStatus.value = 'sending';

  // Tạo đối tượng tin nhắn mới
  const newMessage = {
    id: Date.now(),
    text: message.value,
    sendBy: 'cskh',
    timestamp: new Date(),
    status: 'sent',
  };

  // Emit sự kiện lên component cha để xử lý
  emit('send-message', newMessage);

  message.value = '';
  sendStatus.value = 'sent';

  // Giả lập trạng thái đã xem sau 2 giây
  setTimeout(() => {
    sendStatus.value = '';

    // Trong thực tế, cần cập nhật trạng thái tin nhắn trong store
    if (props.chat && props.chat.messages && props.chat.messages.length > 0) {
      const lastMsg = props.chat.messages[props.chat.messages.length - 1];
      if (lastMsg.sendBy === 'cskh') {
        lastMsg.status = 'seen';
      }
    }
  }, 2000);
};

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

<style scoped>
.rounded-custom {
  border-radius: 0.5rem;
}
.shadow-custom {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
