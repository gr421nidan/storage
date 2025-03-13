import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "../style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
                                     type = "button",
                                     className,
                                     ...props
                                 }) => {
    return (
        <button
            type={type}
            className={cn(buttonStyles({ variant: "base" }), className)}
            {...props}>
        </button>
    );
};

export default Button;
