import React from "react";
import {
    iconLinkStyle,
    iconNavStyles,
    navbarContainerStyles,
    navCircleStyle,
    navContainerStyles,
    navLinkBlockStyles,
    navLinkStyles
} from "./style";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import useLogout from "../../entities/cases/user/logout";
import {cn} from "@/shared/utils/cn";
import {Link} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {Icon} from "@iconify/react";
import {userStore} from "@/app/store";
import {ERoleID} from "@/shared/type/auth";


interface INavbarWidgetProps {
    isOpen: boolean;
    className?: string;
}

const NavbarWidget: React.FC<INavbarWidgetProps> = ({isOpen, className}) => {
    const logout = useLogout();
    const userRole = userStore.state.role_id;
    return (
        <div
            className={cn(navbarContainerStyles, className, isOpen ? "w-[281px] shadow-[0_0_250px_#0B0121]" : "w-[139px]")}>
            <nav className={navContainerStyles}>
                {userRole === ERoleID.ADMIN && (
                    <>
                        <div className={navLinkStyles}>
                            <div className={navCircleStyle}>
                                <Link to={ERouterPath.USERS} className={navLinkBlockStyles}>
                                    <Icon icon="lets-icons:user-light" width="26" height="26"
                                          className={iconLinkStyle}/>
                                </Link>
                            </div>
                            {isOpen && <Link to={ERouterPath.USERS}>Пользователи</Link>}
                        </div>
                        <div className={navLinkStyles}>

                            <div className={navCircleStyle}>
                                <Link to={ERouterPath.MAIN_PAGE} className={navLinkBlockStyles}>
                                    <Icon icon="solar:settings-outline" width="26" height="26"
                                          className={iconLinkStyle}/>
                                </Link>
                            </div>
                            {isOpen && <Link to={ERouterPath.MAIN_PAGE}>Настройки хранилища</Link>}
                        </div>
                        <div className={navLinkStyles}>

                            <div className={navCircleStyle}>
                                <Link to={ERouterPath.MAIN_PAGE} className={navLinkBlockStyles}>
                                    <Icon icon="material-symbols-light:cloud-lock-outline" width="26" height="26"
                                          className={iconLinkStyle}/>
                                </Link>
                            </div>
                            {isOpen && <Link to={ERouterPath.MAIN_PAGE}>Общее хранилище</Link>}
                        </div>
                        <div className={navLinkStyles}>

                            <div className={navCircleStyle}>
                                <Link to={ERouterPath.MAIN_PAGE} className={navLinkBlockStyles}>
                                    <Icon icon="lucide:trash" width="26" height="26" className={iconLinkStyle}/>
                                </Link>

                            </div>
                            {isOpen && <Link to={ERouterPath.MAIN_PAGE}>Корзина</Link>}
                        </div>
                    </>

                )}
                {userRole === ERoleID.USER && (
                    <>
                        <div className={navLinkStyles}>
                            <div className={navCircleStyle}>
                                <Link to={ERouterPath.MAIN_PAGE} className={navLinkBlockStyles}>
                                    <Icon icon="iconamoon:cloud-upload-thin" width="26" height="26"
                                          className={iconLinkStyle}/>
                                </Link>
                            </div>
                            {isOpen && <Link to={ERouterPath.MAIN_PAGE}>Моё хранилище</Link>}
                        </div>
                        <div className={navLinkStyles}>

                            <div className={navCircleStyle}>
                                <Link to={ERouterPath.MAIN_PAGE} className={navLinkBlockStyles}>
                                    <Icon icon="iconamoon:cloud-thin" width="26" height="26" className={iconLinkStyle}/>
                                </Link>
                            </div>
                            {isOpen && <Link to={ERouterPath.MAIN_PAGE}>Доступные хранилища</Link>}
                        </div>
                        <div className={navLinkStyles}>

                            <div className={navCircleStyle}>
                                <Link to={ERouterPath.MAIN_PAGE} className={navLinkBlockStyles}>
                                    <Icon icon="lucide:trash" width="26" height="26" className={iconLinkStyle}/>
                                </Link>

                            </div>
                            {isOpen && <Link to={ERouterPath.MAIN_PAGE}>Корзина</Link>}
                        </div>
                    </>

                )}
            </nav>
            <div className={`flex items-end gap-2 ${isOpen ? 'ml-30' : ''}`}>
                {isOpen && <span onClick={logout} className="text-2xl">Выход</span>}
                <ButtonIcon onClick={logout} className={iconNavStyles} icon="material-symbols-light:logout"/>
            </div>

        </div>
    );
};

export default NavbarWidget;