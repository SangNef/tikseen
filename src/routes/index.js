import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import Home from "@/views/Home/index.vue";
import Recharge from "@/views/Transaction/Recharge.vue";
import Account from "@/views/Account/index.vue";
import ChangePass from "@/views/Account/ChangePass.vue";
import Withdraw from "@/views/Transaction/Withdraw.vue";
import Order from "@/views/Account/Order.vue";
import History from "@/views/Transaction/History.vue";
import Trading from "@/views/Trading/index.vue"

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/recharge",
        name: "Recharge",
        component: Recharge,
        meta: {
            layout: "AccountLayout",
        },
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
        meta: {
            layout: "AccountLayout",
        },
    },
    {
        path: "/change-pass",
        name: "ChangePass",
        component: ChangePass,
        meta: {
            layout: "AccountLayout",
        },
    },
    {
        path: "/withdraw",
        name: "Withdraw",
        component: Withdraw,
        meta: {
            layout: "AccountLayout",
        },
    },
    {
        path: "/orders",
        name: "Order",
        component: Order,
        meta: {
            layout: "AccountLayout",
        },
    },
    {
        path: "/history",
        name: "History",
        component: History,
        meta: {
            layout: "AccountLayout",
        },
    },
    {
        path: "/trading/:id",
        name: "Trading",
        component: Trading,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
