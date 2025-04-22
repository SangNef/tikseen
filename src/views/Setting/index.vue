<template>
  <div class="flex flex-nowrap h-[calc(100vh-var(--header-height))]">
    <!-- Menu button cho mobile -->
    <div
      v-if="isMobile && settingMobileView === 'detail'"
      class="fixed top-[calc(var(--header-height)+0.5rem)] left-3 z-30">
      <button
        @click="showMobileMenu"
        class="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
        aria-label="Menu">
        <Bars3Icon class="w-5 h-5 text-gray-700" />
      </button>
    </div>

    <!-- Menu chỉ hiển thị trên desktop hoặc mobile với chế độ menu -->
    <Menu v-if="!isMobile || (isMobile && settingMobileView === 'menu')" @change-menu="handleChangeMenu" />

    <!-- Component nội dung chỉ hiển thị trên desktop hoặc mobile với chế độ detail -->
    <component v-if="!isMobile || (isMobile && settingMobileView === 'detail')" :is="currentComponent" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Menu from './Menu.vue';
import AppleMessages from './AppleMessages.vue';
import WebsiteWidget from './WebsiteWidget.vue';
import PreChatForm from './PreChatForm.vue';
import WidgetConfig from './WidgetConfig.vue';
import GreetingConfig from './GreetingConfig.vue';
import WidgetScript from './WidgetScript.vue';
import ComingSoon from './ComingSoon.vue';
import useResponsive from '@/composables/useResponsive';
import { Bars3Icon } from '@heroicons/vue/24/outline';

const { isMobile, settingMobileView, setSettingMobileView } = useResponsive();
const activeMenu = ref('website-widget');

const componentMap = {
  'apple-messages': AppleMessages,
  'facebook-messenger': ComingSoon,
  'email-helpdesk': ComingSoon,
  'website-widget': WebsiteWidget,
  'pre-chat-form': PreChatForm,
  'widget-config': WidgetConfig,
  'greeting-config': GreetingConfig,
  'widget-script': WidgetScript,
  engagement: ComingSoon,
  tags: ComingSoon,
  'chat-settings': ComingSoon,
  security: ComingSoon,
  'help-center': ComingSoon,
  updates: ComingSoon,
};

const currentComponent = computed(() => {
  return componentMap[activeMenu.value] || WebsiteWidget;
});

function handleChangeMenu(menuId) {
  activeMenu.value = menuId;

  // Khi ở mobile, chuyển sang màn hình detail
  if (isMobile.value) {
    setSettingMobileView('detail');
  }
}

function showMobileMenu() {
  setSettingMobileView('menu');
}
</script>

<style scoped>
@media (max-width: 768px) {
  .menu-button-mobile {
    position: fixed;
    top: var(--header-height);
    left: 0.75rem;
    z-index: 30;
  }
}
</style>
