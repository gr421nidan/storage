import React from "react";
import {
    Menu,
    MenuItem,
    MenuDivider,
    MenuButton,
} from "@szhsin/react-menu";
import {Icon} from "@iconify/react";

import "@szhsin/react-menu/dist/index.css";
import {
    menuButtonClass,
    menuClass,
    menuItemClass,
    iconClass,
    menuDividerClass,
    menuItemSolidHover,
} from "./style";

interface IMenuItem {
    label: string;
    icon?: string;
    onClick?: () => void;
}

interface IDividerListMenuProps {
    items: IMenuItem[];
}

const DividerListMenu: React.FC<IDividerListMenuProps> = ({items}) => {
    return (
        <Menu
            menuButton={
                <MenuButton className={menuButtonClass}>
                    <Icon icon="material-symbols:more-vert" className="w-6 h-6"/>
                </MenuButton>
            }
            align="end"
            direction="bottom"
            transition
            viewScroll="auto"
            menuClassName={menuClass}>
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <React.Fragment key={item.label}>
                        <MenuItem
                            onClick={item.onClick}
                            className={`${menuItemClass} ${menuItemSolidHover}`}
                        >
                            {item.icon && <Icon icon={item.icon} className={iconClass}/>}
                            <span>{item.label}</span>
                        </MenuItem>
                        {!isLast && <MenuDivider className={menuDividerClass}/>}
                    </React.Fragment>
                );
            })}
        </Menu>
    );
};

export default DividerListMenu;
