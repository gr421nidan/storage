import {buttonContainerStyle, headerContainerStyles, iconContainerStyles, titleStyles} from "./style";
import icon from "@/assets/icon.svg";
import React from "react";
import ThemeSwitcher from "@/shared/components/theme-switcher";
import BurgerMenu from "@/shared/components/burger-menu";
import ProfileLink from "@/shared/components/profile-link";

interface IHeaderWidgetProps {
    toggleNavbar: () => void;
}

const HeaderWidget: React.FC<IHeaderWidgetProps> = ({toggleNavbar}) => {
    return (
        <header className={headerContainerStyles}>
            <div className={iconContainerStyles}>
                <BurgerMenu toggleNavbar={toggleNavbar} />
                <div className={titleStyles}>
                    <img src={icon} width="47" alt="Иконка облачного хранилища"/>
                    <h3>Облачное хранилище</h3>
                </div>
            </div>
            <div className={buttonContainerStyle}>
                <ThemeSwitcher/>
                <ProfileLink/>
            </div>
        </header>
    );
};

export default HeaderWidget;