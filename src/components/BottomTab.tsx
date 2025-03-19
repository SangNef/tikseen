import React from "react";
import { Link } from "react-router-dom";

const BottomTab = () => {
    const items = [
        {
            name: "Home",
            href: "/",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-house">
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
            ),
        },
        {
            name: "event",
            href: "/event",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-tickets">
                    <path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" />
                    <path d="M6 10V8" />
                    <path d="M6 14v1" />
                    <path d="M6 19v2" />
                    <rect x={2} y={8} width={20} height={13} rx={2} />
                </svg>
            ),
        },
        {
            name: "review",
            href: "/review",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-heart">
                    <path d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7" />
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                </svg>
            ),
        },
        {
            name: "profile",
            href: "/mypage",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                </svg>
            ),
        },
    ];

    return (
        <div className="h-[70px] max-w-[480px] py-3 flex flex-row justify-around items-center w-full bg-white fixed bottom-0 z-50 shadow-lg">
            {items.map((item, index) => (
                <Link
                    to={item.href}
                    key={index}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow px-4 py-2 bg-white h-full aspect-square hover:bg-[#4492bfcf] text-[#4492bfcf] hover:text-white border !border-[#4492bf98]">
                    {item.icon}
                    {/* <span className="text-xs">{item.name}</span> */}
                </Link>
            ))}
        </div>
    );
};

export default BottomTab;
