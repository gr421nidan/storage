import { Navigate, Outlet } from "react-router-dom";
import {AUTH_TOKEN_KEY} from "@/shared/config";
import ERouterPath from "@/shared/common/enum/router";

const ProtectedRoute = () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (!token) {
        return <Navigate to={ERouterPath.SIGN_IN_PAGE} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;