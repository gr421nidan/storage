import {
    headerContainerStyles,
    iconContainerStyles,
    titleStyles
} from "./style";
import icon from "@/assets/icon.svg";
import React from "react";
import ThemeSwitcher from "@/shared/components/theme-switcher";
import {cn} from "@/shared/utils/cn";
import BurgerMenu from "@/shared/components/burger-menu";

interface IHeaderWidgetProps {
    toggleNavbar: () => void;
}

const HeaderWidget: React.FC<IHeaderWidgetProps> = ({toggleNavbar}) => {
    return (
        <header className={cn(headerContainerStyles)}>
            <div className={iconContainerStyles}>
                <BurgerMenu toggleNavbar={toggleNavbar} />
                <div className={titleStyles}>
                    <img src={icon} width="47" alt="Иконка облачного хранилища"/>
                    <h3>Облачное хранилище</h3>
                </div>
            </div>
            <ThemeSwitcher/>
        </header>
    );
};

export default HeaderWidget;