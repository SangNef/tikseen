import { createApp } from 'vue';
import App from './views/BubbleChat/ChatPage.vue';
import router from './routes/chat-page.js';
import './style.css';
import './styles/theme.css';

// Thêm hàm điều chỉnh viewport height để tối ưu trên mobile
function setCustomViewportHeight() {
  // // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // Get the viewport height and set the value in the --vh custom property to the root of the document
  // document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  // document.documentElement.style.setProperty('--vh', `${window.visualViewport.height}px`);
}

// Gọi hàm một lần khi app khởi động
setCustomViewportHeight();

// Thêm event listener cho resize và orientationchange
window.addEventListener('resize', setCustomViewportHeight);
window.addEventListener('orientationchange', setCustomViewportHeight);

const app = createApp(App);

app.use(router);
app.mount('#vippromax-chat-page');
