import { cva } from "class-variance-authority";

/**
 * Общий контейнер меню.
 * Для обеих вариаций фон непрозрачный (bg-white / dark:bg-gray).
 */
export const menuContainer = cva(
    "absolute border border-purple-light rounded-xl shadow-lg z-50 " +
    "transition-transform origin-top-right " +
    "bg-white dark:bg-gray text-black dark:text-white " +
    "overflow-hidden",
    {
        variants: {
            variant: {
                iconList: "",
                dividerList: "",
            },
            openTop: {
                true: "origin-bottom-right",
                false: "origin-top-right",
            },
        },
        defaultVariants: {
            variant: "iconList",
            openTop: false,
        },
    }
);

/**
 * Базовый стиль пункта меню.
 * variant=iconList: классический hover со слабой прозрачностью
 * variant=dividerList: сплошной hover, без прозрачности
 */
export const menuItem = cva(
    "w-full px-4 py-2 text-left flex items-center gap-2 relative", // relative нужно для разделителей
    {
        variants: {
            variant: {
                iconList:
                    "hover:bg-purple-light/10 transition-colors",
                dividerList:
                    "hover:bg-purple-light transition-colors",
            },
        },
        defaultVariants: {
            variant: "iconList",
        },
    }
);

/**
 * Разделитель (горизонтальная линия) между пунктами для dividerList
 */
export const menuItemDivider = cva("", {
    variants: {
        show: {
            true: "after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[1px] after:bg-purple-light",
            false: "",
        },
    },
    defaultVariants: {
        show: false,
    },
});

/**
 * Кнопка (три точки)
 */
export const menuButton =
    "flex items-center justify-center w-10 h-10 rounded-full hover:bg-purple-light/20 transition";

/**
 * Иконка для пункта
 */
export const iconClass = "w-5 h-5 text-purple-light";
