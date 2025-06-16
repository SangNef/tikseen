// src/routes/desktop.js
import { Login } from '../views/desktop/Auth';
import { Home } from '../views/desktop/Home';

const DesktopRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            layout: 'AuthLayout',
            requiresAuth: false,
        },
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'MainLayout',
            guest: true,
        },
    },
];

export default DesktopRoutes;
