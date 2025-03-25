import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface IMenuItem {
    label: string;
    icon?: string;
    onClick?: () => void;
}

interface IOptionMenuProps {
    items: IMenuItem[];
    // Можешь добавить пропы типа position ("left" | "right"), className, и т.д.
}

const OptionMenu: React.FC<IOptionMenuProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // Закрываем меню при клике вне
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleItemClick = (onClick?: () => void) => {
        if (onClick) onClick();
        setIsOpen(false); // закрываем меню
    };

    return (
        <div className="relative inline-block" ref={menuRef}>
            {/* Кнопка (три точки) */}
            <button
                type="button"
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-purple-light/20 transition"
            >
                <Icon icon="material-symbols:more-vert" className="w-6 h-6 text-purple" />
            </button>

            {/* Выпадающее меню */}
            {isOpen && (
                <div
                    className="
            absolute top-full right-0 mt-2
            w-48
            bg-white dark:bg-gray
            border border-purple-light
            rounded-xl
            shadow-lg
            z-50
          "
                >
                    {items.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            onClick={() => handleItemClick(item.onClick)}
                            className="
                w-full px-4 py-2 flex items-center gap-2
                text-left hover:bg-purple-light/10
                dark:text-white
              "
                        >
                            {item.icon && <Icon icon={item.icon} className="w-5 h-5 text-purple-light" />}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OptionMenu;
