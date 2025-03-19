import MainLayout from "~/layouts/MainLayout";
import PublicRouter from "./PublicRouter";
import Home from "~/pages/Home";
import Event from "~/pages/Event";
import Review from "~/pages/Review";
import Profile from "~/pages/Profile";
import Signup from "~/pages/Profile/Signup";
import History from "~/pages/Profile/History";
import Bind from "~/pages/Profile/Bind";

const routes = [
    {
        path: "/",
        Component: Home,
        Layout: MainLayout,
        type: PublicRouter,
    },
    {
        path: "/event",
        Component: Event,
        Layout: MainLayout,
        type: PublicRouter,
    },
    {
        path: "/review",
        Component: Review,
        Layout: MainLayout,
        type: PublicRouter,
    },
    {
        path: "/mypage",
        Component: Profile,
        Layout: MainLayout,
        type: PublicRouter,
    },
    {
        path: "/signup",
        Component: Signup,
        Layout: MainLayout,
        type: PublicRouter,
    },
    {
        path: "/history",
        Component: History,
        Layout: MainLayout,
        type: PublicRouter,
    },
    {
        path: "/mypage/bind",
        Component: Bind,
        Layout: MainLayout,
        type: PublicRouter,
    }
]

export default routes;