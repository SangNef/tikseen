import React from "react";
import logo from "~/assets/logo.png";

const Header = () => {
    return (
        <div className="h-[60px] px-3 pt-3 w-full flex flex-row justify-between items-center">
            <img
                src={logo}
                alt="onlyone"
                loading="lazy"
                width="160"
                height="280"
                decoding="async"
                style={{ color: "transparent" }}
                className="object-contain"
            />
        </div>
    );
};

export default Header;
