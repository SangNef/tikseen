// src/routes/desktop.js
import { Market } from "@/views/desktop/Market";
import { Login, Register } from "../views/desktop/Auth";
import { Home } from "../views/desktop/Home";
import { Future } from "@/views/desktop/Future";
import { BinaryOption } from "@/views/desktop/BinaryOption";
import { Asset, Setting } from "@/views/desktop/Account";

const DesktopRoutes = [
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
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            layout: "MainLayout",
            guest: true,
        },
    },
    {
        path: "/markets",
        name: "Markets",
        component: Market,
        meta: {
            layout: "MainLayout",
            guest: true,
        },
    },
    {
        path: "/futures",
        name: "Future",
        component: Future,
        meta: {
            layout: "MainLayout",
            guest: true,
        },
    },
    {
        path: "/binary-options",
        name: "BinaryOptions",
        component: BinaryOption,
        meta: {
            layout: "MainLayout",
            guest: true,
        },
    },
    {
        path: "/account/asset",
        name: "Asset",
        component: Asset,
        meta: {
            layout: "MainLayout",
            guest: true,
        },
    },
    {
        path: "/account/settings",
        name: "Setting",
        component: Setting,
        meta: {
            layout: "MainLayout",
            guest: true,
        },
    },
];

export default DesktopRoutes;
