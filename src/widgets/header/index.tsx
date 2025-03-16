import {
    burgerMenuStyles,
    headerContainerStyles,
    iconContainerStyles,
    menuIconLineStyles, titleStyles
} from "./style";
import icon from "@/assets/icon.svg";
import React from "react";
import ThemeSwitcher from "@/shared/components/theme-switcher";
import {cn} from "@/shared/utils/cn";

interface IHeaderWidgetProps {
    toggleNavbar: () => void;
    className?: string;
}

const HeaderWidget: React.FC<IHeaderWidgetProps> = ({ toggleNavbar, className }) => {
    return (
        <header className={cn(headerContainerStyles,  className)}>
            <div className={iconContainerStyles}>
                <div className={burgerMenuStyles} onClick={toggleNavbar}>
                    <div className={cn(menuIconLineStyles, "ml-auto")}></div>
                    <div className={cn(menuIconLineStyles, "w-[44px]")}></div>
                    <div className={menuIconLineStyles}></div>
                </div>
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