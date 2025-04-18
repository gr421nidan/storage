import React, {useState} from "react";
import NavbarWidget from "@/widgets/navbar";
import HeaderWidget from "@/widgets/header";
import SidebarWidget from "@/widgets/sidebar";
import {Outlet, useLocation, useMatch, useParams} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import useGetAvailableStoragesUseCase from "@/entities/cases/storage/get-available-storages/use-case";

const MainLayout: React.FC = () => {
    const location = useLocation();
    const { id_storage } = useParams<{ id_storage: string }>();
    const isStoragePage = useMatch("/storage/:id_storage");

    const { data } = useGetUserProfileUseCase();
    const { storages } = useGetAvailableStoragesUseCase();
    const pageTitles: Record<string, string> = {
        [ERouterPath.MAIN_PAGE]: data?.isAdmin ? "Общее хранилище" : "Мое хранилище",
        [ERouterPath.USER_PROFILE]: "Личные данные",
        [ERouterPath.STORAGE_TRASH]: "Корзина",
        [ERouterPath.USERS]: "Пользователи",
        [ERouterPath.STORAGE_SETTINGS]: "Настройки хранилища",
        [ERouterPath.AVAILABLE_STORAGES]: "Доступные хранилища",
    };

    const getDynamicTitle = () => {
        if (location.pathname.startsWith("/users/")) {
            return "Пользователи";
        }
        if (isStoragePage && id_storage) {
            return storages.find(item => item.id === id_storage)?.title;
        }
        return null;
    };

    const staticTitle = pageTitles[location.pathname];
    const dynamicTitle = getDynamicTitle();
    const title = staticTitle || dynamicTitle;

    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderWidget toggleNavbar={toggleNavbar} />
            <NavbarWidget isOpen={isNavbarOpen} />
            <main className="pl-[193px] pr-[430px] pt-[166px]">
                <h2>{title}</h2>
                <div className="h-1 mt-4 mb-[40px] bg-purple"></div>
                <Outlet />
            </main>
            <SidebarWidget />
        </div>
    );
};

export default MainLayout;
