import { Navigate, Outlet } from "react-router-dom";
import { FC } from "react";
import { userStore } from "@/app/store";

import ERouterPath from "@/shared/common/enum/router";
import {AUTH_TOKEN_KEY} from "@/shared/config";
import {ERoleID} from "@/shared/type/auth";

interface ProtectedRouteProps {
    allowedRoles: ERoleID[]; // Массив допустимых числовых значений ролей
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({ allowedRoles }) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY); // Токен из глобального store
    const userRole = userStore.state.role_id; // Роль пользователя из global store

    // Если нет токена или роль не входит в список допустимых, перенаправляем на страницу авторизации
    if (!token || userRole === null || !allowedRoles.includes(userRole)) {
        return <Navigate to={ERouterPath.SIGN_IN_PAGE} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;