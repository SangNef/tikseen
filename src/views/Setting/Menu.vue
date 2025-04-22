<template>
  <div
    class="w-full md:w-80 md:h-[calc(var(--vh)-var(--header-height))] bg-white md:border-r border-gray-200 overflow-y-auto">
    <div class="sticky top-0 bg-white z-10 p-3 sm:p-4 border-b border-gray-200 flex items-center">
      <h2 class="text-lg sm:text-xl font-semibold text-gray-800">Cài đặt</h2>
      <div v-if="isMobile" class="ml-auto">
        <button @click="closeMenu" class="p-1 rounded-md hover:bg-gray-100">
          <XMarkIcon class="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>

    <div class="p-3 sm:p-4 space-y-1">
      <template v-for="(item, index) in menuItems" :key="index">
        <div v-if="item.type === 'divider'" class="menu-divider my-2"></div>
        <div
          v-else-if="item.type === 'header'"
          class="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
          {{ item.label }}
        </div>
        <div
          v-else
          :class="[
            'flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors text-sm',
            item.id === activeItem ? 'bg-gray-100 text-gray-800 font-medium' : 'text-gray-600 hover:bg-gray-50',
          ]"
          @click="setActiveItem(item.id)">
          <div :class="['w-5 h-5 mr-3', item.id === activeItem ? 'text-blue-600' : 'text-gray-500']">
            <component :is="item.icon" class="w-full h-full" />
          </div>
          {{ item.label }}
          <div v-if="item.status" class="ml-auto px-2 py-0.5 text-xs rounded-full" :class="item.status.class">
            {{ item.status.label }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  ChatBubbleLeftRightIcon,
  InboxIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  ClockIcon,
  UserIcon,
  DocumentTextIcon,
  DocumentCheckIcon,
  CogIcon,
  CodeBracketIcon,
  PencilIcon,
  ChatBubbleBottomCenterTextIcon,
  ShieldCheckIcon,
  TagIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowPathIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import useResponsive from '@/composables/useResponsive';

const { isMobile, settingMobileView, setSettingMobileView } = useResponsive();
const emit = defineEmits(['change-menu']);

const activeItem = ref('website-widget');

const menuItems = [
  // {
  //   type: 'header',
  //   label: 'Kênh trò chuyện',
  // },
  // {
  //   id: 'apple-messages',
  //   label: 'Apple Messages',
  //   icon: ChatBubbleLeftRightIcon,
  //   status: { label: 'OFF', class: 'bg-gray-100 text-gray-500' },
  // },
  // {
  //   id: 'facebook-messenger',
  //   label: 'Facebook Messenger',
  //   icon: ChatBubbleOvalLeftEllipsisIcon,
  //   status: { label: 'OFF', class: 'bg-gray-100 text-gray-500' },
  // },
  // {
  //   id: 'email-helpdesk',
  //   label: 'Email by HelpDesk',
  //   icon: InboxIcon,
  //   status: { label: 'OFF', class: 'bg-gray-100 text-gray-500' },
  // },
  // {
  //   id: 'divider-1',
  //   type: 'divider',
  // },
  {
    type: 'header',
    label: 'Cấu hình Widget',
  },
  {
    id: 'website-widget',
    label: 'Website Widget',
    icon: GlobeAltIcon,
  },
  {
    id: 'pre-chat-form',
    label: 'Biểu mẫu trước chat',
    icon: DocumentTextIcon,
  },
  {
    id: 'widget-config',
    label: 'Cấu hình thông tin',
    icon: CogIcon,
  },
  {
    id: 'greeting-config',
    label: 'Cấu hình lời chào',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 'widget-script',
    label: 'Mã nhúng widget',
    icon: CodeBracketIcon,
  },
  {
    id: 'divider-2',
    type: 'divider',
  },
  {
    type: 'header',
    label: 'Tùy chỉnh & Quản lý',
  },
  {
    id: 'engagement',
    label: 'Tương tác khách hàng',
    icon: DocumentCheckIcon,
  },
  {
    id: 'tags',
    label: 'Quản lý tags',
    icon: TagIcon,
  },
  {
    id: 'chat-settings',
    label: 'Cài đặt chat',
    icon: PaintBrushIcon,
  },
  {
    id: 'security',
    label: 'Bảo mật',
    icon: ShieldCheckIcon,
  },
  {
    id: 'divider-3',
    type: 'divider',
  },
  {
    type: 'header',
    label: 'Hỗ trợ',
  },
  {
    id: 'help-center',
    label: 'Trung tâm trợ giúp',
    icon: QuestionMarkCircleIcon,
  },
  {
    id: 'updates',
    label: 'Cập nhật phiên bản',
    icon: ArrowPathIcon,
    status: { label: 'MỚI', class: 'bg-blue-100 text-blue-700' },
  },
];

function setActiveItem(id) {
  activeItem.value = id;
  emit('change-menu', id);
}

function closeMenu() {
  setSettingMobileView('detail');
}

onMounted(() => {
  if (isMobile.value) {
    setSettingMobileView('menu');
  }
});
</script>

<style>
.menu-divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 8px 0;
}
</style>
