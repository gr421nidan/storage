import React, {
    useState,
    useRef,
    useEffect,
} from "react";
import { Icon } from "@iconify/react";
import {
    menuContainer,
    menuItem,
    menuItemDivider,
    menuButton,
    iconClass,
} from "./style";

interface IMenuItem {
    label: string;
    icon?: string;
    onClick?: () => void;
}

/**
 * @param variant - "iconList" (прозрачный hover) или "dividerList" (сплошной hover + разделители)
 */
export interface IOptionMenuProps {
    items: IMenuItem[];
    variant?: "iconList" | "dividerList";
}

const OptionMenu: React.FC<IOptionMenuProps> = ({
                                                    items,
                                                    variant = "iconList",
                                                }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openTop, setOpenTop] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    /**
     * toggleMenu - переключает состояние видимости меню
     */
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    /**
     * Закрываем меню при клике вне
     */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    /**
     * handleItemClick - вызывается при клике на пункт меню
     * @param onClick - функция, которую нужно вызвать
     */
    const handleItemClick = (onClick?: () => void) => {
        if (onClick) onClick();
        setIsOpen(false);
    };

    /**
     * Определяем, открывать меню вверх или вниз
     */
    useEffect(() => {
        if (!isOpen) return;
        if (!menuRef.current || !buttonRef.current) return;

        const menuRect = menuRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();

        const windowHeight = window.innerHeight;
        const spaceBelow = windowHeight - buttonRect.bottom;
        if (spaceBelow < menuRect.height) {
            setOpenTop(true);
        } else {
            setOpenTop(false);
        }
    }, [isOpen]);

    return (
        <div className="relative inline-block">
            {/* Кнопка (три точки) */}
            <button
                ref={buttonRef}
                type="button"
                onClick={toggleMenu}
                className={menuButton}
            >
                <Icon icon="material-symbols:more-vert" className="w-6 h-6 text-purple" />
            </button>

            {/* Список */}
            {isOpen && (
                <div
                    ref={menuRef}
                    className={menuContainer({ variant, openTop })}
                    style={{
                        top: openTop ? "auto" : "100%",
                        bottom: openTop ? "100%" : "auto",
                        right: 0,
                    }}
                >
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        return (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => handleItemClick(item.onClick)}
                                // Сочетаем стили для пункта и разделителя
                                className={`
                  ${menuItem({ variant })}
                  ${
                                    variant === "dividerList" && !isLast
                                        ? menuItemDivider({ show: true })
                                        : ""
                                }
                `}
                            >
                                {/* Иконки доступны и в iconList, и в dividerList */}
                                {item.icon && <Icon icon={item.icon} className={iconClass} />}
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default OptionMenu;
