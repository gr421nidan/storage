import {cva} from "class-variance-authority";

export const selectBoxStyles = cva(
    "flex items-center justify-between h-[52px] px-[27px] rounded-[20px] border-2 border-purple dark:bg-gray text-purple cursor-pointer select-none transition-shadow",
    {
        variants: {
            isOpen: {
                true: "custom-shadow",
                false: "",
            },
            error: {
                true: "border-error-primary bg-error-secondary focus:border-error-primary hover:border-error-primary",
                false: "",
            },
        },
        defaultVariants: {
            isOpen: false,
        },
    }
);
export const selectOptionStyles = cva(
    "absolute left-0 bg-white dark:bg-purple-dark overflow-hidden shadow-[0_0_5px_var(--color-custom-shadow)] mt-2 rounded-[20px] border-2 border-purple"
);
export const optionStyles = cva(
    "mx-[27px] py-2 text-black dark:text-white cursor-pointer whitespace-nowrap hover:text-purple dark:hover:text-purple"
);