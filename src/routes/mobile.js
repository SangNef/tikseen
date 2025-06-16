// src/routes/mobile.js
import ForgotPassword from "@/views/mobile/Auth/ForgotPassword.vue";
import { Login, Register } from "@/views/mobile/Auth";
import {
    Earn,
    Envelope,
    Event,
    EventDetail,
    Exchange,
    Home,
    Invite,
    InviteReward,
    Partner,
    Vip,
} from "@/views/mobile/Home";
import { Explore } from "@/views/mobile/Explore";
import { Deposit, Future, MainWallet, Transaction, Wallet, Withdraw } from "@/views/mobile/Wallet";
import { Account, Setting } from "@/views/mobile/Account";
import { Trade } from "@/views/mobile/Trade";
import { FutureScreen } from "@/views/mobile/Futute";

const MobileRoutes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            layout: "AuthLayout",
            requiresAuth: false,
        },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            layout: "AuthLayout",
            requiresAuth: false,
        },
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: {
            layout: "AuthLayout",
            guest: false,
        },
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            layout: "MainLayout",
            guest: true,
        },
    },
    {
        path: "/explore",
        name: "Explore",
        component: Explore,
        meta: {
            layout: "MainLayout",
            requiresAuth: true,
        },
    },
    {
        path: "/wallet",
        name: "Wallet",
        component: Wallet,
        meta: {
            layout: "MainLayout",
            requiresAuth: true,
        },
    },
    {
        path: "/trade",
        name: "Trade",
        component: Trade,
        meta: {
            layout: "MainLayout",
            requiresAuth: true,
        },
    },
    {
        path: "/futures",
        name: "FutureScreen",
        component: FutureScreen,
        meta: {
            layout: "MainLayout",
            requiresAuth: true,
        },
    },
    {
        path: "/account-settings/center",
        name: "Account",
        component: Account,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/account-settings/acc-info",
        name: "Setting",
        component: Setting,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/withdrawal",
        name: "Withdraw",
        component: Withdraw,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/deposit",
        name: "Deposit",
        component: Deposit,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/tx-history",
        name: "Transaction",
        component: Transaction,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/main-wallet",
        name: "MainWallet",
        component: MainWallet,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/future-wallet",
        name: "FutureWallet",
        component: Future,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/events",
        name: "Events",
        component: Event,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/events/:id",
        name: "EventDetail",
        component: EventDetail,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/red-envelope",
        name: "Envelop",
        component: Envelope,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/exchange",
        name: "Exchange",
        component: Exchange,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/vip",
        name: "Vip",
        component: Vip,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/invite",
        name: "Invite",
        component: Invite,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/invite-reward",
        name: "InviteReward",
        component: InviteReward,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/partner",
        name: "Partner",
        component: Partner,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/overnight-interest",
        name: "Earn",
        component: Earn,
        meta: {
            requiresAuth: true,
        },
    },
];

export default MobileRoutes;
