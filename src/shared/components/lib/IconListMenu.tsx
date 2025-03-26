// IconListMenu.tsx
import React from "react";
import {
    Menu,
    MenuItem,
    MenuButton,
} from "@szhsin/react-menu";
import { Icon } from "@iconify/react";

import "@szhsin/react-menu/dist/index.css";
import {
    menuButtonClass,
    menuClass,
    menuItemClass,
    iconClass,
} from "./style";

interface IMenuItem {
    label: string;
    icon?: string;
    onClick?: () => void;
}

interface IListIconMenuProps {
    items: IMenuItem[];
}

const IconListMenu: React.FC<IListIconMenuProps> = ({ items }) => {
    return (
        <Menu
            menuButton={
                <MenuButton className={menuButtonClass}>
                    <Icon icon="material-symbols:more-vert" className="w-6 h-6" />
                </MenuButton>
            }
            align="end"
            direction="bottom"
            transition
            viewScroll="auto"
            menuClassName={menuClass}>
            {items.map((item) => (
                <MenuItem
                    key={item.label}
                    onClick={item.onClick}
                    className={menuItemClass}>
                    {item.icon && <Icon icon={item.icon} className={iconClass} />}
                    <span>{item.label}</span>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default IconListMenu;
