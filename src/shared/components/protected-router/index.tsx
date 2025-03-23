import {Navigate, Outlet} from "react-router-dom";
import {FC} from "react";
import ERouterPath from "@/shared/common/enum/router";
import {AUTH_TOKEN_KEY} from "@/shared/config";
import {ERoleID} from "@/shared/type/auth";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";

interface IProtectedRouteProps {
    allowedRoles: ERoleID[];
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({allowedRoles}) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const {data: userProfile, isLoading} = useGetUserProfileUseCase();
    if (!token) {
        return <Navigate to={ERouterPath.SIGN_IN_PAGE} replace/>;
    } else if (isLoading) {
        return <div>Загрузка...</div>;
    } else if (!userProfile || !allowedRoles.includes(userProfile.role_id)) {
        return <Navigate to={ERouterPath.FORBIDDEN_PAGE} replace/>;
    }
    return <Outlet/>;
};

export default ProtectedRoute;