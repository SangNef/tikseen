import { createRouter, createWebHistory } from 'vue-router';

const ChatPage = () => import('@/views/BubbleChat/ChatPage.vue');

const routes = [
  {
    path: '/chat-page/:id',
    name: 'ChatPage',
    component: ChatPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
