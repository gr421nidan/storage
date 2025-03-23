import {
    iconContainerStyles,
    titleStyles
} from "@/widgets/header/style";
import {headerContainerStyles} from "./style"
import icon from "@/assets/icon.svg";
import React from "react";
import ThemeSwitcher from "@/shared/components/theme-switcher";
import {cn} from "@/shared/utils/cn";
import BurgerMenu from "@/shared/components/burger-menu";
import ProfileLink from "@/shared/components/profile-link";

interface IHeaderWidgetProps {
    toggleNavbar: () => void;
}

const HeaderConnectingWidget: React.FC<IHeaderWidgetProps> = ({toggleNavbar}) => {
    return (
        <header className={cn(headerContainerStyles)}>
            <div className={iconContainerStyles}>
                <BurgerMenu toggleNavbar={toggleNavbar}/>
                <div className={titleStyles}>
                    <img src={icon} width="47" alt="Иконка облачного хранилища"/>
                    <h3>Облачное хранилище</h3>
                </div>
            </div>
            <div className="flex items-center gap-[74px] justify-center ">
                <ThemeSwitcher/>
                <ProfileLink activeColorClass="text-purple" />
            </div>
        </header>
    );
};

export default HeaderConnectingWidget;