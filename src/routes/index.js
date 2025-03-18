import { createRouter, createWebHistory } from "vue-router";
import Default from "@client/views/Default/index.vue";
import LoginView from "@client/views/Login/index.vue";
import RegisterView from "@client/views/Login/Register.vue";
import HomeView from "@client/views/Home/index.vue";
import ShopView from "@client/views/Shop/index.vue";
import HistoryView from "@client/views/History/index.vue";
import ProfileView from "@client/views/Profile/index.vue";
import SettingView from "@client/views/Profile/Setting.vue";
import WithDrawalView from "@client/views/Profile/WithDrawal.vue";
import OrderView from "@client/views/Profile/Order.vue";
import GroupChat from "@client/views/Profile/GroupChat.vue";
import SupportView from "@client/views/Profile/Support.vue";
import MessageView from "@client/views/Profile/Message.vue";
import ChangPasswordView from "@client/views/Profile/ChangePassword.vue";
import ChangeNameView from "@client/views/Profile/ChangeName.vue";
import ChangePhoneView from "@client/views/Profile/ChangePhone.vue";
import ChangeEmailView from "@client/views/Profile/ChangeEmail.vue";
import ChangeBankView from "@client/views/Profile/ChangeBank.vue";
import DepositView from "@client/views/Profile/Deposit.vue";
import ShopType from "@client/views/Shop/ShopType.vue";

const routes = [
  { path: "/default", component: Default, meta: { layout: "NoLayout" } },
  { path: "/login", component: LoginView, meta: { layout: "NoLayout" } },
  { path: "/register", component: RegisterView, meta: { layout: "NoLayout" } },
  {
    path: "/",
    component: HomeView,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/shop",
    component: ShopView,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/history",
    component: HistoryView,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/customer",
    component: ProfileView,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/setting",
    component: SettingView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/historywithdrawal",
    component: WithDrawalView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/historyplay",
    component: OrderView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/groupchat",
    component: GroupChat,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/groupcskh",
    component: SupportView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/support",
    component: MessageView,
    meta: { layout: "MainLayout" },
  },
  {
    path: "/changepassword",
    component: ChangPasswordView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/changename",
    component: ChangeNameView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/changephone",
    component: ChangePhoneView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/changeemail",
    component: ChangeEmailView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/changebank",
    component: ChangeBankView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/deposit",
    component: DepositView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/withdraw",
    component: ChangeBankView,
    meta: { layout: "NoLayout" },
  },
  {
    path: "/shopdt",
    component: ShopType,
    meta: { layout: "NoLayout" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isAuthenticated = () => !!localStorage.getItem("user");

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/default");
  } else {
    next();
  }
});

export default router;
