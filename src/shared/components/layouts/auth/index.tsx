import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Outlet />
        </div>
    );
};

export default AuthLayout;