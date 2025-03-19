import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bigLogo from "~/assets/logo-big.webp";

const Signup = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        inviteCode: "",
    });
    const [error, setError] = useState("");

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(""), 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (form.username.length < 6) return "아이디는 6자 이상 20자 이하로 입력해주세요.";
        if (form.password.length < 6) return "비밀번호는 6자 이상 20자 이하로 입력해주세요.";
        if (form.password !== form.confirmPassword) return "비밀번호가 일치하지 않습니다.";
        return "";
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errorMsg = validate();
        if (errorMsg) return setError(errorMsg);
        console.log("Form submitted", form);
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center px-5">
            <form
                onSubmit={handleSubmit}
                className="rounded-xl border bg-white shadow grid grid-cols-2 border-[#4492bfb3] w-full px-5 gap-y-3 gap-x-3 py-5">
                <div className="col-span-2 text-center text-[#4492bf] font-bold">회원가입</div>
                {(["username", "password", "confirmPassword", "inviteCode"] as Array<keyof typeof form>).map(
                    (field, index) => (
                        <input
                            key={index}
                            className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 col-span-2 border-[#4492bfb3]"
                            placeholder={`${
                                field === "confirmPassword"
                                    ? "비밀번호를 다시 입력해주세요."
                                    : field === "inviteCode"
                                    ? "초대 코드를 입력해주세요."
                                    : "아이디를 입력해주세요."
                            }`}
                            type={field.includes("password") ? "password" : "text"}
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                        />
                    )
                )}
                <div className="col-span-2 text-xs text-red-400 font-bold">{error}</div>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-[#4492bfb3] hover:bg-[#4492bf1b] text-white hover:text-[#4492bfb3]">
                    회원가입
                </button>
                <Link
                    to="/mypage"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-white hover:bg-[#4492bf95] text-[#4492bfb3] hover:text-white">
                    뒤로가기
                </Link>
            </form>
            <img alt="" src={bigLogo} className="opacity-25 scale-[1.3] absolute z-[-1] -rotate-45" />
        </div>
    );
};

export default Signup;
