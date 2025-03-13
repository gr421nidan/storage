import { cva } from "class-variance-authority";

export const inputsStyles = cva(
    "border-2 outline-none transition-all hover:custom-shadow " +
    "dark:text-white dark:placeholder-white-secondary hover:placeholder-black dark:hover:placeholder-white focus:border-purple hover:border-purple",
    {
        variants: {
            variant: {
                basic: "text-black border-purple-light text-[20px] px-6 rounded-[20px] bg-white dark:bg-gray placeholder-dark-gray ",
                otp: "text-black border-purple-light rounded-[10px] w-[60px] h-[60px] focus:border-purple text-center focus:outline-none hover:custom-shadow dark:text-white text-[32px]",
                check:"peer appearance-none rounded-[5px] border-purple flex text-white items-center cursor-pointer transition-all checked:bg-purple"
            },
            error: {
                true: "border-error-primary bg-error-secondary focus:border-error-primary hover:border-error-primary",
                false: "",
            },
        },
    }
);

export const iconStyles =
    "absolute text-white opacity-0 peer-checked:opacity-100";

export const buttonInputStyles =
    "absolute right-4 top-1/2 transform -translate-y-1/2";

export const iconInputStyles =
    "text-black dark:text-white w-[20px] h-[20px]";