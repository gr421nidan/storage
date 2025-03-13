import {createBrowserRouter} from "react-router-dom";
import {LazyMainPage, LazyResetPage, LazySignInPage, LazySignUpPage} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import AuthLayout from "@/shared/components/layouts/auth";

const router = createBrowserRouter([
    {
        element: <LazyMainPage/>,
        path: ERouterPath.MAIN_PAGE
    },
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
])
export default router
