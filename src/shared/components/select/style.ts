import {cva} from "class-variance-authority";

export const selectBoxStyles = cva(
    "flex text-xl items-center justify-between h-[52px] px-[27px] rounded-[20px] border-2 border-purple bg-white dark:bg-gray cursor-pointer select-none transition-shadow",
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
    "absolute z-50 left-0 w-[250px] bg-white dark:bg-dark-theme py-[20px] overflow-hidden shadow-[0_0_5px_var(--color-custom-shadow)] mt-3 rounded-[20px] border-2 border-purple"
);
export const optionStyles = cva(
    "mx-[27px] text-[24px] py-3 text-black dark:text-white cursor-pointer whitespace-nowrap hover:text-purple dark:hover:text-purple"
);