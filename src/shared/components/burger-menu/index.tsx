import React from "react";
import { cn } from "@/shared/utils/cn";
import {burgerMenuStyles, menuIconLineStyles} from "./style";

interface IBurgerMenuProps {
    toggleNavbar: () => void;
}

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ toggleNavbar }) => {
    return (
        <div className={burgerMenuStyles} onClick={toggleNavbar}>
            <div className={cn(menuIconLineStyles, "ml-auto")}></div>
            <div className={cn(menuIconLineStyles, "w-[44px]")}></div>
            <div className={menuIconLineStyles}></div>
        </div>
    );
};

export default BurgerMenu;
