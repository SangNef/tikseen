import { ref, computed, onMounted, onUnmounted } from 'vue';

const WIDTH_MOBILE = 768;
const WIDTH_TABLET = 1124;

// Tạo một reactive state được chia sẻ giữa tất cả các instances
const mobileView = ref('chat-list'); // 'chat-list', 'chat-detail', 'chat-info'
const settingMobileView = ref('menu'); // 'menu', 'detail'

export default function useResponsive() {
  const windowWidth = ref(window.innerWidth);
  const isMobile = computed(() => windowWidth.value < WIDTH_TABLET);
  // const isTablet = computed(() => windowWidth.value >= WIDTH_TABLET && windowWidth.value < WIDTH_TABLET);
  const isTablet = isMobile.value;
  const isDesktop = computed(() => windowWidth.value >= WIDTH_TABLET);

  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth);
  });

  const setMobileView = (view) => {
    console.log('useResponsive: setting mobileView to', view);
    mobileView.value = view;
  };

  const setSettingMobileView = (view) => {
    settingMobileView.value = view;
  };

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
    mobileView,
    setMobileView,
    settingMobileView,
    setSettingMobileView,
  };
}
