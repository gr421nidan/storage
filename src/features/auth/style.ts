import {cva} from "class-variance-authority";

export const flexCol = "flex flex-col";
export const formAuthStyles = `${flexCol} border-3 border-purple-lighter-opacity px-[76px] py-[40px] gap-[62px] w-[626px] rounded-[50px] bg-gr-purple backdrop-blur-[60px] items-center justify-center`;

export const inputContainerStyles = `${flexCol} gap-6`;

export const radioContainerStyles = "flex items-center gap-2 cursor-pointer";

export const formContainerStyles = `${flexCol} gap-8 items-center`;

export const errorTextStyles = cva(
    `pt-1 text-error-primary`, {
        variants: {
            error: {
                true: "text-error-primary",
                false: "",
            }
        },
    });
export const headerStyles = "bg-purple-light rounded-xl px-3 w-fit";

export const linkStyles = "flex gap-[15px] text-[20px]";

export const textFormStyles = "text-[20px] text-center";