import React from "react";
import {iconNavStyles, navbarContainerStyles, navContainerStyles} from "./style";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import useLogout from "@/entities/cases/user/logout";
import {cn} from "@/shared/utils/cn";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import NavItem from "@/shared/components/nav-item";
import ERouterPath from "@/shared/common/enum/router";

interface INavbarWidgetProps {
    isOpen: boolean;
}

interface INavItem {
    path: ERouterPath;
    label: string;
    icon: string;
}

const adminNavItems: INavItem[] = [
    {path: ERouterPath.USERS, label: "Пользователи", icon: "octicon:people-24"},
    {path: ERouterPath.STORAGE_SETTINGS, label: "Настройки хранилища", icon: "lsicon:setting-outline"},
    {path: ERouterPath.MAIN_PAGE, label: "Общее хранилище", icon: "bi:clouds"},
    {path: ERouterPath.STORAGE_TRASH, label: "Корзина", icon: "lucide:trash"}
];

const userNavItems: INavItem[] = [
    {path: ERouterPath.MAIN_PAGE, label: "Моё хранилище", icon: "ion:cloud-upload-outline"},
    {path: ERouterPath.AVAILABLE_STORAGES, label: "Доступные хранилища", icon: "bi:clouds"},
    {path: ERouterPath.STORAGE_TRASH, label: "Корзина", icon: "lucide:trash"}
];

const NavbarWidget: React.FC<INavbarWidgetProps> = ({isOpen}) => {
    const logout = useLogout();
    const {data} = useGetUserProfileUseCase();
    const navItems = data?.isAdmin ? adminNavItems : userNavItems;

    return (
        <div
            className={cn(navbarContainerStyles, isOpen ? "w-[281px] shadow-[0_0_250px_#0B0121]" : "w-[130px]")}>
            <nav className={navContainerStyles}>
                {navItems.map(({path, label, icon}) => (
                    <NavItem key={path} path={path} label={label} icon={icon} isOpen={isOpen}/>
                ))}
            </nav>
            <div className={cn("flex items-end gap-2", {"ml-30": isOpen})}>
                {isOpen && <span onClick={logout} className="text-2xl cursor-pointer">Выход</span>}
                <ButtonIcon onClick={logout} className={iconNavStyles} icon="material-symbols-light:logout"/>
            </div>
        </div>
    );
};

export default NavbarWidget;
