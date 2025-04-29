import {headerContainerStyles, iconContainerStyles, titleStyles} from "@/widgets/header/style";
import icon from "@/assets/icon.svg";
import React from "react";
import BurgerMenu from "@/shared/components/burger-menu";

interface IHeaderWidgetProps {
    toggleNavbar: () => void;
}

const HeaderGuestWidget: React.FC<IHeaderWidgetProps> = ({toggleNavbar}) => {
    return (
        <header className={headerContainerStyles}>
            <div className={iconContainerStyles}>
                <BurgerMenu toggleNavbar={toggleNavbar} />
                <div className={titleStyles}>
                    <img src={icon} width="47" alt="Иконка облачного хранилища"/>
                    <h3>Облачное хранилище</h3>
                </div>
            </div>
        </header>
    );
};

export default HeaderGuestWidget;