import React from "react";
import {navbarContainerStyles, navContainerStyles} from "@/widgets/navbar/style";
import {cn} from "@/shared/utils/cn";
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

const guestNavItems: INavItem[] = [
    {path: ERouterPath.SIGN_UP_PAGE, label: "Регистрация", icon: "mdi:account-key"},
    {path: ERouterPath.SIGN_IN_PAGE, label: "Авторизация", icon: "mdi:account-lock-open"},
];

const NavbarGuestWidget: React.FC<INavbarWidgetProps> = ({isOpen}) => {

    return (
        <div
            className={cn(navbarContainerStyles, isOpen ? "w-[281px] shadow-[0_0_250px_#0B0121]" : "w-[130px]")}>
            <nav className={navContainerStyles}>
                {guestNavItems.map(({path, label, icon}) => (
                    <NavItem key={path} path={path} label={label} icon={icon} isOpen={isOpen}/>
                ))}
            </nav>
        </div>
    );
};

export default NavbarGuestWidget;
