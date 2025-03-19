import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bigLogo from "~/assets/logo-big.webp";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (username.length < 6) {
            setError("아이디는 6자 이상 20자 이하로 입력해주세요.");
            setTimeout(() => setError(""), 5000);
        }
    }, [username]);
    
    useEffect(() => {
        if (password.length < 6) {
            setError("비밀번호는 6자 이상 20자 이하로 입력해주세요.");
            setTimeout(() => setError(""), 5000);
        }
    }, [password]);

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (username.length < 6) {
            setError("아이디는 6자 이상 20자 이하로 입력해주세요.");
            setTimeout(() => setError(""), 5000);
            return;
        }
        if (password.length < 6) {
            setError("비밀번호는 6자 이상 20자 이하로 입력해주세요.");
            setTimeout(() => setError(""), 5000);
            return;
        }
        setLoading(true);
        if (username === "mang01" && password === "aaa123") {
            localStorage.setItem("user", username);
            navigate("/");
        }
    }

    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center px-5 overflow-hidden">
            <div className="rounded-xl border bg-white text-card-foreground shadow grid grid-cols-2 border-[#4492bfb3] w-full px-5 gap-y-3 gap-x-3 py-5 justify-center items-center">
                <div className="col-span-2 text-center text-[#4492bf] font-bold">로그인</div>
                <input
                    className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 col-span-2 border-[#4492bfb3]"
                    placeholder="아이디를 입력해주세요."
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 col-span-2 border-[#4492bfb3]"
                    placeholder="비밀번호를 입력해주세요."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="col-span-2 text-xs text-red-400 font-bold" >
                    {error}
                </div>
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-[#4492bfb3] hover:bg-[#4492bf1b] text-white hover:text-[#4492bfb3]"
                    type="button"
                    onClick={(e) => handleLogin(e)}>
                    로그인
                </button>
                <Link
                    to="/signup"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-white hover:bg-[#4492bf95] text-[#4492bfb3] hover:text-white"
                    type="button">
                    회원가입
                </Link>
            </div>
            <img
                alt=""
                loading="lazy"
                width={1200}
                height={500}
                decoding="async"
                data-nimg={1}
                className="opacity-25 scale-[1.6] absolute z-[-1] -rotate-45"
                src={bigLogo}
                style={{ color: "transparent" }}
            />
        </div>
    );
};

export default Login;
