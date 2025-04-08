import {createBrowserRouter} from "react-router-dom";
import {
    LazyAvailableStoragePage, LazyAvailableStoragesPage, LazyForbiddenPage, LazyMainPage, LazyNotFoundPage,
    LazyStorageTrashPage, LazyUserProfilePage
} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import MainLayout from "@/shared/components/layouts/main";
import ProtectedRoute from "@/shared/components/protected-router";
import {ERoleID} from "@/shared/enum/auth";

const router = createBrowserRouter([
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
