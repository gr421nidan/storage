import React from "react";
import { Menu, MenuItem, MenuDivider, MenuButton } from "@szhsin/react-menu";
import { Icon } from "@iconify/react";
import "@szhsin/react-menu/dist/index.css";

import {
    menuItemsStyle, menuItemStyle, iconStyle, menuDividerStyle, menuStyle,
} from "./style";

interface IMenuItem {
    label: string;
    icon?: string;
    onClick?: () => void;
}

interface IContextMenuProps {
    items: IMenuItem[];
    withSeparator?: boolean;
    iconSize?: string;
}

const ContextMenu: React.FC<IContextMenuProps> = ({ items, withSeparator = false, iconSize = "w-[20px] h-[32px]" }) => {
    return (
        <Menu
            menuButton={
                <MenuButton>
                    <Icon icon="material-symbols:more-vert" className={`text-black dark:text-white ${iconSize}`} />
                </MenuButton>
            }
            align="end"
            direction="bottom"
            transition
            viewScroll="auto"
            menuClassName={menuStyle}
        >
            <div className={menuItemsStyle}>
                {items.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <MenuItem onClick={item.onClick} className={menuItemStyle}>
                            {item.icon && <Icon icon={item.icon} className={iconStyle} />}
                            <span>{item.label}</span>
                        </MenuItem>
                        {withSeparator && index !== items.length - 1 && <MenuDivider className={menuDividerStyle} />}
                    </React.Fragment>
                ))}
            </div>
        </Menu>
    );
};

export default ContextMenu;
