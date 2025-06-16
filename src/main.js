import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import { createRouter, createWebHistory } from 'vue-router';
import { DesktopRoutes, MobileRoutes } from './routes';

function isMobile() {
    return window.innerWidth <= 768;
}

const routes = isMobile() ? MobileRoutes : DesktopRoutes;

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Optional: middleware auth check
router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('username');
    const requiresAuth = to.meta.requiresAuth;
    const guest = to.meta.guest;

    if (requiresAuth && !user) {
        next({ path: '/login' });
    } else if (requiresAuth === false && user) {
        next({ path: '/' });
    } else {
        next();
    }
});

const app = createApp(App);
app.use(Antd);
app.use(router);
app.mount('#app');
