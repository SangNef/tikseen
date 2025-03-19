import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("user");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    return <>{children}</>;
};

export default ProtectedRoute;
