import {cva} from "class-variance-authority";

export const buttonStyles = cva(
    "cursor-pointer rounded-[20px] transition-all duration-200 outline-none",
    {
        variants: {
            variant: {
                base: "border border-3 text-center items-center justify-center bg-purple text-white border-purple-light hover:custom-shadow active:text-purple-light dark:bg-purple-light dark:text-black dark:active:text-purple dark:border-purple active:shadow-none text-2xl",

                icon: "text-purple  hover:custom-drop-shadow dark:text-purple-light dark:hover:text-purple dark:hover:custom-drop-shadow",

                withIcon:
                    "px-[27px] justify-between flex items-center border bg-white border-2 border-purple dark:bg-gray dark:text-white hover:custom-shadow focus:custom-shadow  hover:text-purple dark:hover:text-purple text-2xl",
            },
        },
        defaultVariants: {
            variant: "base",
        },
    }
);
