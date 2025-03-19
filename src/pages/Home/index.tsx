import React from "react";
import banner01 from "~/assets/banners/001.png";
import banner02 from "~/assets/banners/002.png";
import banner03 from "~/assets/banners/003.png";
import Carousel from "./Carousel";
import ListItem from "./ListItem";

const Home = () => {
    return (
        <>
            <div className="h-[5%] w-full flex flex-row items-center">
                <hr className="w-full border-[1px] border-[#e5e7eb]" />
                <p className="whitespace-nowrap px-3 font-bold opacity-50">온리원 이벤트</p>
                <hr className="w-full border-[1px] border-[#e5e7eb]" />
            </div>
            <Carousel />
            <div className="h-[5%] w-full flex flex-row items-center">
                <hr className="w-full border-[1px] border-[#e5e7eb]" />
                <p className="whitespace-nowrap px-3 font-bold opacity-50">전국 지명 순위</p>
                <hr className="w-full border-[1px] border-[#e5e7eb]" />
            </div>
            <ListItem />
        </>
    );
};

export default Home;
