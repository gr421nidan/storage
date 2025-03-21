import { Navigate, Outlet } from "react-router-dom";
import { FC } from "react";
import ERouterPath from "@/shared/common/enum/router";
import {AUTH_TOKEN_KEY} from "@/shared/config";

const ProtectedRoute: FC = () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) {
        return <Navigate to={ERouterPath.SIGN_IN_PAGE} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;