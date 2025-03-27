import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@client/views/Auth/login.vue";
import SignupView from "@client/views/Auth/Signup.vue";
import ForgotPasswordView from "@client/views/Auth/ForgotPassword.vue";
import HomeView from "@client/views/Home/index.vue";
import ResultView from "@client/views/Result/index.vue";
import ContentView from "@client/views/Content/index.vue";
import ServiceView from "@client/views/Service/index.vue";
import ProfileView from "@client/views/Profile/index.vue";
import GameView from "@client/views/Game/index.vue";
import BankView from "@client/views/Profile/Bank.vue";
import TransactionRecordView from "@client/views/Profile/TransactionRecord.vue";
import BettingRecordView from "@client/views/Profile/BettingRecord.vue";
import PersonalReportView from "@client/views/Profile/PersonalReport.vue";
import InfoView from "@client/views/Profile/Info.vue";
import AccountLevelView from "@client/views/Profile/AccountLevel.vue";
import ChangePasswordView from "@client/views/Profile/ChangePassword.vue";
import DetailView from "@client/views/Profile/Detail.vue";
import CustomColorView from "@client/views/Profile/CustomColor.vue";
import CustomBetView from "@client/views/Profile/CustomBet.vue";
import CustomNotificationView from "@client/views/Profile/CustomNotification.vue";
import LanguageView from "@client/views/Profile/Language.vue";
import MessageView from "@client/views/Profile/Message.vue";
import AboutUsView from "@client/views/Profile/AboutUs.vue";
import GameRulesView from "@client/views/GameRule/index.vue"
import AwardDescriptionView from "../views/GameRule/AwardDescription.vue";
import GameHistoryView from "../views/GameRule/GameHistory.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/signup",
        name: "Signup",
        component: SignupView,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPasswordView,
        meta: {
            layout: "AuthLayout",
        },
    },
    {
        path: "/result",
        name: "Result",
        component: ResultView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/content",
        name: "Content",
        component: ContentView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/support",
        name: "Service",
        component: ServiceView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: ProfileView,
        meta: {
            layout: "DefaultLayout",
        },
    },
    {
        path: "/games",
        name: "Game",
        component: GameView,
    },
    {
        path: "/my-bank",
        name: "Bank",
        component: BankView,
    },
    {
        path: "/transaction-record-page",
        name: "TransactionRecord",
        component: TransactionRecordView,
    },
    {
        path: "/betting-record-page",
        name: "BettingRecord",
        component: BettingRecordView,
    },
    {
        path: "/personal-report-page",
        name: "PersonalReport",
        component: PersonalReportView,
    },
    {
        path: "/my-account-info",
        name: "Info",
        component: InfoView,
    },
    {
        path: "/my-account-info-level",
        name: "AccountLevel",
        component: AccountLevelView,
    },
    {
        path: "/my-account-info-password",
        name: "ChangePassword",
        component: ChangePasswordView
    },
    {
        path: "/my-account-info-detail",
        name: "Detail",
        component: DetailView
    },
    {
        path: "/customColor",
        name: "CustomColor",
        component: CustomColorView
    },
    {
        path: "/custom-bet-values",
        name: "CustomBet",
        component: CustomBetView
    },
    {
        path: "/custom-notifications",
        name: "CustomNotification",
        component: CustomNotificationView
    },
    {
        path: "/language-switch",
        name: "Language",
        component: LanguageView
    },
    {
        path: "/message",
        name: "Message",
        component: MessageView
    },
    {
        path: "/docDetail",
        name: "AboutUs",
        component: AboutUsView
    },
    {
        path: "/gameRules",
        name: "GameRules",
        component: GameRulesView
    },
    {
        path: "/gaiaAwardDescriptionPage",
        name: "AwardDescription",
        component: AwardDescriptionView
    },
    {
        path: "/games-history",
        name: "GameHistory",
        component: GameHistoryView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
