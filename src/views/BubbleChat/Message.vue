<template>
  <div class="flex flex-col h-full bg-gray-50">
    <!-- Messages area -->
    <div class="flex-grow p-4 overflow-y-auto message-scroll-area" ref="messageContainer">
      <div class="flex flex-col gap-3">
        <div
          v-for="(item, index) in messages"
          :key="index"
          :class="['flex items-end gap-2 message-item', item.send_by === 'user' ? 'flex-row-reverse' : 'flex-row']">
          <!-- Avatar -->
          <div :class="['flex-shrink-0', item.send_by === 'user' ? 'ml-2' : 'mr-2']">
            <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <img
                :src="
                  item.send_by === 'user'
                    ? userAvatar
                    : widgetSettings.logo ||
                      'https://res.cloudinary.com/dx2o9ki2g/image/upload/v1743602309/d7sn8mtmxzgk2tpmoqnv.png'
                "
                alt="Avatar"
                class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Message bubble -->
          <div
            :class="[
              'max-w-[75%] p-3 rounded-lg text-sm break-words',
              item.send_by === 'user'
                ? 'text-white rounded-tr-none message-user'
                : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none message-support',
            ]"
            :style="item.send_by === 'user' ? { backgroundColor: widgetSettings.themeColor } : {}">
            {{ item.msg }}
            <div :class="['text-xs mt-1', item.send_by === 'user' ? 'text-white/70' : 'text-gray-400']">
              {{ formatTime(item.time || new Date()) }}
            </div>
          </div>
        </div>

        <!-- Typing indicator -->
        <div v-if="isTyping" class="flex items-end gap-2">
          <div class="flex-shrink-0 mr-2">
            <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <img
                :src="
                  widgetSettings.logo ||
                  'https://res.cloudinary.com/dx2o9ki2g/image/upload/v1743602309/d7sn8mtmxzgk2tpmoqnv.png'
                "
                alt="Avatar"
                class="w-full h-full object-cover" />
            </div>
          </div>
          <div
            class="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 inline-flex space-x-1 typing-indicator">
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce typing-dot" style="animation-delay: 0s"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce typing-dot" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce typing-dot" style="animation-delay: 0.4s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input message component -->
    <InputMessage :widgetSettings="widgetSettings" @send-message="handleSendMessage" />

    <!-- Operation hours display -->
    <div
      v-if="widgetSettings.showOperationHours"
      class="p-2 text-xs text-gray-500 text-center border-t border-gray-200 bg-white">
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{{ widgetSettings.operationHoursText }}</span>
    </div>
  </div>
</template>

<script setup>
import '@/styles/message.css';
import '@/styles/chat.css';
import InputMessage from './InputMessage.vue';
import { ref, onMounted, onUpdated, watch } from 'vue';
import user from '@/assets/images/ico/user.png';

const props = defineProps({
  widgetSettings: {
    type: Object,
    default: () => ({
      themeColor: '#3b82f6',
      showOperationHours: false,
      operationHoursText: 'Giờ làm việc: Thứ 2 - Thứ 6, 9:00 - 17:00',
    }),
  },
});

const messageContainer = ref(null);
const isTyping = ref(false);
const userAvatar = ref(user);

// Khởi tạo messages với tin nhắn chào mừng và thời gian
const messages = ref([
  {
    send_by: 'cskh',
    msg: 'Xin chào, tôi có thể giúp gì cho bạn?',
    time: new Date(Date.now() - 60000),
  },
  {
    send_by: 'user',
    msg: 'Tôi cần hỗ trợ về dịch vụ',
    time: new Date(),
  },
]);

// Format thời gian tin nhắn
function formatTime(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Tự động cuộn xuống khi có tin nhắn mới
function scrollToBottom() {
  if (messageContainer.value) {
    setTimeout(() => {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }, 50);
  }
}

// Xử lý gửi tin nhắn mới
function handleSendMessage(message, file) {
  if ((message && message.trim()) || file) {
    messages.value.push({
      send_by: 'user',
      msg: message || (file ? `Đã gửi một hình ảnh: ${file.name}` : ''),
      time: new Date(),
    });

    // Hiển thị đang nhập
    isTyping.value = true;

    // Mô phỏng phản hồi từ CSKH
    setTimeout(() => {
      isTyping.value = false;

      messages.value.push({
        send_by: 'cskh',
        msg: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ xử lý yêu cầu của bạn sớm nhất có thể.',
        time: new Date(),
      });
    }, 1500);
  }
}

// Tải avatar người dùng nếu đã đăng nhập
onMounted(() => {
  const savedUser = localStorage.getItem('user_livechat');
  if (savedUser) {
    try {
      const userData = JSON.parse(savedUser);
      if (userData.avatar) {
        userAvatar.value = userData.avatar;
      }
    } catch (e) {
      console.error('Lỗi khi phân tích dữ liệu người dùng:', e);
    }
  }

  // Cuộn xuống dưới khi khởi tạo
  scrollToBottom();
});

// Theo dõi thay đổi tin nhắn để cuộn xuống dưới
watch(messages, () => scrollToBottom());
onUpdated(scrollToBottom);
</script>

<style scoped>
.message-scroll-area {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.message-scroll-area::-webkit-scrollbar {
  width: 5px;
}

.message-scroll-area::-webkit-scrollbar-track {
  background: transparent;
}

.message-scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.operation_hours {
  padding: 8px;
  text-align: center;
  font-size: 12px;
  color: var(--text-gray);
  border-top: 1px solid var(--border-light);
  background-color: var(--bg-light);
}
</style>
