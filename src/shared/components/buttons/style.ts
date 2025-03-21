import {cva, type VariantProps} from "class-variance-authority";

export const buttonStyles = cva(
    "cursor-pointer  rounded-[20px] transition-all duration-200 outline-none",
    {
        variants: {
            variant: {
                base: "border border-3 text-center items-center justify-center bg-white text-black border-purple hover:border-purple-light hover:text-dark-gray hover:custom-shadow dark:text-white dark:hover:text-white dark:bg-gray dark:active:text-purple dark:hover:border-purple active:text-purple active:shadow-none active:border-purple text-2xl",

                icon: "text-purple  hover:custom-drop-shadow dark:text-purple-light dark:hover:text-purple dark:hover:custom-drop-shadow",

                withIcon:
                    "px-[27px] justify-between flex items-center border bg-white border-2 border-purple dark:bg-gray dark:text-white hover:custom-shadow focus:custom-shadow  hover:text-purple dark:hover:text-purple text-2xl",

                two: "border border-3 text-center items-center justify-center bg-purple text-white border-purple-light dark:border-purple hover:text-purple-light hover:custom-shadow dark:text-black dark:hover:text-white dark:bg-purple-light dark:active:text-purple active:text-white active:shadow-none active:border-white"
            },
        },
        defaultVariants: {
            variant: "base",
        },
    }
);

export type ButtonVariantProps = VariantProps<typeof buttonStyles>;