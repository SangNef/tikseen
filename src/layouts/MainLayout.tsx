import React from "react";
import BottomTab from "~/components/BottomTab";
import Header from "~/components/Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex-col w-[100vw] h-[100dvh] flex justify-center items-center antialiased">
            <div className="w-[100vw] h-[100dvh] max-w-[480px]">
                <Header />
                <main className="px-3 overflow-hidden py-2 h-[calc(100%-130px)]">{children}</main>
                <BottomTab />
            </div>
        </div>
    );
};

export default MainLayout;
