import React, { useState } from "react";
import NavbarWidget from "@/widgets/navbar";
import HeaderWidget from "@/widgets/header";
import SidebarWidget from "@/widgets/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";

const MainLayout: React.FC = () => {
    const { data } = useGetUserProfileUseCase();
    const pageTitles: Record<string, string> = {
        [ERouterPath.MAIN_PAGE]: data?.isAdmin ? "Общее хранилище" : "Мое хранилище",
        [ERouterPath.USER_PROFILE]: "Личные данные",
        [ERouterPath.STORAGE_TRASH]: "Корзина",
        [ERouterPath.USERS]: "Пользователи",
        [ERouterPath.STORAGE_SETTINGS]: "Настройки хранилища",
        [ERouterPath.AVAILABLE_STORAGES]: "Доступные хранилища",
    };

    const dynamicTitles: Record<string, (params: any) => string> = {
        [ERouterPath.USER_LOGS]: () => "Пользователи",
        [ERouterPath.STORAGE]: (params) => `Хранилище ${params.id_storage}`,
    };

    const getDynamicTitle = (pathname: string) => {
        const userLogsMatch = pathname.match(/\/users\/(?<id_user>[^/]+)/);
        const storageMatch = pathname.match(/\/storage\/(?<id_storage>[^/]+)/);
        if (userLogsMatch && userLogsMatch.groups) {
            return dynamicTitles[ERouterPath.USER_LOGS](userLogsMatch.groups);
        }
        if (storageMatch && storageMatch.groups) {
            return dynamicTitles[ERouterPath.STORAGE](storageMatch.groups);
        }
        return null;
    };

    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    const location = useLocation();
    const staticTitle = pageTitles[location.pathname];
    const dynamicTitle = getDynamicTitle(location.pathname);
    const title = staticTitle || dynamicTitle;

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
