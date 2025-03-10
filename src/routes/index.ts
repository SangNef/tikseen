import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Default from '~/views/Default/index.vue';
import LoginView from '~/views/Login/index.vue';
import RegisterView from '~/views/Login/Register.vue';
import HomeView from '~/views/Home/index.vue';
import ShopView from '~/views/Shop/index.vue';
import HistoryView from '~/views/History/index.vue';
import ProfileView from '~/views/Profile/index.vue';
import SettingView from '~/views/Profile/Setting.vue';
import WithDrawalView from '~/views/Profile/WithDrawal.vue';
import OrderView from '~/views/Profile/Order.vue';
import GroupChat from '~/views/Profile/GroupChat.vue';
import SupportView from '~/views/Profile/Support.vue';
import MessageView from '~/views/Profile/Message.vue';
import ChangPasswordView from '~/views/Profile/ChangePassword.vue';
import ChangeNameView from '~/views/Profile/ChangeName.vue';
import ChangePhoneView from '~/views/Profile/ChangePhone.vue';
import ChangeEmailView from '~/views/Profile/ChangeEmail.vue';
import ChangeBankView from '~/views/Profile/ChangeBank.vue';
import DepositView from '~/views/Profile/Deposit.vue';
import ShopType from '~/views/Shop/ShopType.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/default', component: Default, meta: { layout: "NoLayout" } },
    { path: '/login', component: LoginView, meta: { layout: "NoLayout" } },
    { path: '/register', component: RegisterView, meta: { layout: "NoLayout" } },
    {
        path: '/',
        component: HomeView,
        meta: { requiresAuth: true, layout: "DefaultLayout" }
    },
    {
        path: "/shop",
        component: ShopView,
        meta: { requiresAuth: true, layout: "DefaultLayout" }
    },
    {
        path: "/history",
        component: HistoryView,
        meta: { requiresAuth: true, layout: "DefaultLayout" }
    },
    {
        path: "/customer",
        component: ProfileView,
        meta: { requiresAuth: true, layout: "DefaultLayout" }
    },
    {
        path: "/setting",
        component: SettingView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/historywithdrawal",
        component: WithDrawalView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/historyplay",
        component: OrderView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/groupchat",
        component: GroupChat,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/groupcskh",
        component: SupportView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/support",
        component: MessageView,
        meta: { requiresAuth: true, layout: "MainLayout" }
    },
    {
        path: "/changepassword",
        component: ChangPasswordView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/changename",
        component: ChangeNameView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/changephone",
        component: ChangePhoneView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/changeemail",
        component: ChangeEmailView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/changebank",
        component: ChangeBankView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/deposit",
        component: DepositView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/withdraw",
        component: ChangeBankView,
        meta: { requiresAuth: true, layout: "NoLayout" }
    },
    {
        path: "/shopdt",
        component: ShopType,
        meta: { requiresAuth: true, layout: "NoLayout" }

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const isAuthenticated = (): boolean => !!localStorage.getItem('user');

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next('/default');
    } else {
        next();
    }
});

export default router;
