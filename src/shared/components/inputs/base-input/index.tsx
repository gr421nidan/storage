import {forwardRef, InputHTMLAttributes, useState, useCallback} from "react";
import {Icon} from "@iconify/react";
import {cn} from "@/shared/utils/cn";
import {buttonInputStyles, iconInputStyles, inputsStyles} from "../style.ts";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({type = "text", className, ...props}, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === "password";
        const toggleShowPassword = useCallback(() => {
            setShowPassword((prev) => !prev);
        }, []);

        return (
            <div className="relative w-fit">
                <input
                    {...props}
                    ref={ref}
                    type={isPassword ? (showPassword ? "text" : "password") : type}
                    className={cn(
                        inputsStyles({variant: "basic"}),
                        {"pr-[47px]": isPassword},
                        className)}/>
                {isPassword && (
                    <button
                        type="button"
                        className={buttonInputStyles}
                        onClick={toggleShowPassword}>
                        <Icon
                            icon={showPassword ? "iconamoon:eye-thin" : "iconamoon:eye-off-thin"}
                            className={iconInputStyles}/>
                    </button>
                )}
            </div>
        );
    }
);

export default Input;
