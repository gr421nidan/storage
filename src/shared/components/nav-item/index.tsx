import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
    iconLinkStyle,
    navCircleStyle,
    navLinkBlockStyles,
    navLinkStyles,
    activeNavItemStyle,
} from "./style";

interface INavItemProps {
    path: string;
    label: string;
    icon: string;
    isOpen: boolean;
}

const NavItem: React.FC<INavItemProps> = ({ path, label, icon, isOpen }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <div className={`${navLinkStyles} ${isActive ? activeNavItemStyle : "p-[12px]"}`}>
            <div className={navCircleStyle}>
                <Link to={path} className={navLinkBlockStyles}>
                    <Icon icon={icon} width="26" height="26" className={iconLinkStyle}/>
                </Link>
            </div>
            {isOpen && <Link to={path} >{label}</Link>}
        </div>
    );
};

export default NavItem;
