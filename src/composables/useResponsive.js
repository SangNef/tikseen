import { ref, computed, onMounted, onUnmounted } from 'vue';

export default function useResponsive() {
  const windowWidth = ref(window.innerWidth);
  const isMobile = computed(() => windowWidth.value < 768);
  const isTablet = computed(() => windowWidth.value >= 768 && windowWidth.value < 1024);
  const isDesktop = computed(() => windowWidth.value >= 1024);
  const mobileView = ref('chat-list'); // 'chat-list', 'chat-detail', 'chat-info'

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
    mobileView.value = view;
  };

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
    mobileView,
    setMobileView,
  };
}
