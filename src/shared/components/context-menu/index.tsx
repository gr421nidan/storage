import React from "react";
import { Menu, MenuItem, MenuDivider, MenuButton } from "@szhsin/react-menu";
import { Icon } from "@iconify/react";
import "@szhsin/react-menu/dist/index.css";

import {
    menuItemsStyle, menuItemStyle, iconStyle, menuDividerStyle, menuStyle,
} from "./style";
import {cn} from "@/shared/utils/cn";

interface IMenuItem {
    label: string;
    icon?: string;
    onClick?: () => void;
}

interface IContextMenuProps {
    items: IMenuItem[];
    withSeparator?: boolean;
    iconSize?: string;
    menuClassName?: string;
}

const ContextMenu: React.FC<IContextMenuProps> = ({ items, withSeparator = false, iconSize = "w-[20px] h-[32px]",  menuClassName}) => {
    const itemPadding = withSeparator ? "px-7" : "px-4";
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
            menuClassName={cn(menuStyle, menuClassName)}
        >
            <div className={menuItemsStyle}>
                {items.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <MenuItem onClick={item.onClick} className={cn(menuItemStyle, itemPadding)}>
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
