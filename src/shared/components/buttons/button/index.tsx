import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "../style";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IButtonProps> = ({
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
