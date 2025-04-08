import {createBrowserRouter} from "react-router-dom";
import {
    LazyAvailableStoragePage,
    LazyAvailableStoragesPage, LazyConnectingStoragePage, LazyForbiddenPage,
    LazyMainPage, LazyNotFoundPage,
    LazyResetPage,
    LazySignInPage,
    LazySignUpPage, LazyStorageSettingsPage, LazyStorageTrashPage,
    LazyStorageUsersPage,
    LazyUserLogsPage, LazyUserProfilePage
} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import AuthLayout from "@/shared/components/layouts/auth";
import MainLayout from "@/shared/components/layouts/main";
import ProtectedRoute from "@/shared/components/protected-router";
import ConnectingStorageLayout from "../../shared/components/layouts/main-secondary";
import {ERoleID} from "@/shared/enum/auth";

const router = createBrowserRouter([
    {
        element: <AuthLayout/>,
        children: [
            {
                path: ERouterPath.SIGN_IN_PAGE,
                element: <LazySignInPage/>,
            },
            {
                path: ERouterPath.SIGN_UP_PAGE,
                element: <LazySignUpPage/>,
            },
            {
                path: ERouterPath.RESET_PAGE,
                element: <LazyResetPage/>,
            },
        ],
    },
    {
        element: <ProtectedRoute allowedRoles={[ERoleID.USER, ERoleID.ADMIN]}/>,
        children: [
            {
                element: <MainLayout/>,
                children: [
                    {
                        path: ERouterPath.MAIN_PAGE,
                        element: <LazyMainPage/>,
                    },
                    {
                        path: ERouterPath.USER_PROFILE,
                        element: <LazyUserProfilePage/>,
                    },
                    {
                        path: ERouterPath.STORAGE_TRASH,
                        element: <LazyStorageTrashPage/>,
                    },
                ],
            },
        ],
    },
    {
        element: <ProtectedRoute allowedRoles={[ERoleID.ADMIN]}/>,
        children: [
            {
                element: <MainLayout/>,
                children: [
                    {
                        path: ERouterPath.USERS,
                        element: <LazyStorageUsersPage/>,
                    },
                    {
                        path: ERouterPath.USER_LOGS,
                        element: <LazyUserLogsPage/>,
                    },
                    {
                        path: ERouterPath.STORAGE_SETTINGS,
                        element: <LazyStorageSettingsPage/>,
                    },
                ],
            },
        ],
    },
    {
        element: <ProtectedRoute allowedRoles={[ERoleID.USER]}/>,
        children: [
            {
                element: <MainLayout/>,
                children: [
                    {
                        path: ERouterPath.AVAILABLE_STORAGES,
                        element: <LazyAvailableStoragesPage/>,
                    },
                    {
                        path: ERouterPath.STORAGE,
                        element: <LazyAvailableStoragePage/>,
                    },
                ],
            },
            {
                element: <ConnectingStorageLayout/>,
                children: [
                    {
                        path: ERouterPath.CONNECTING_STORAGE,
                        element: <LazyConnectingStoragePage/>,
                    },
                ],
            },
        ],
    },
    {
        path: ERouterPath.FORBIDDEN_PAGE,
        element: <LazyForbiddenPage/>,
    },
    {
        path: "*",
        element: <LazyNotFoundPage/>,
    },

])
export default router
