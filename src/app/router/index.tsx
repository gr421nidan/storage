import {createBrowserRouter} from "react-router-dom";
import {LazyMainPage, LazyResetPage, LazySignInPage, LazySignUpPage, LazyStorageUsersPage} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import AuthLayout from "@/shared/components/layouts/auth";
import MainLayout from "@/shared/components/layouts/main";
import ProtectedRoute from "@/shared/components/protected-router";

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: ERouterPath.SIGN_IN_PAGE,
                element: <LazySignInPage />,
            },
            {
                path: ERouterPath.SIGN_UP_PAGE,
                element: <LazySignUpPage />,
            },
            {
                path: ERouterPath.RESET_PAGE,
                element: <LazyResetPage />,
            },
        ],
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: ERouterPath.MAIN_PAGE,
                        element: <LazyMainPage />,
                    },
                    {
                        path: ERouterPath.USERS,
                        element: <LazyStorageUsersPage />,
                    },
                ],
            },
        ],
    },
])
export default router
