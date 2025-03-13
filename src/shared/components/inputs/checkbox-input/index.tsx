import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/shared/utils/cn";
import { inputsStyles, iconStyles } from "../style";

interface ICheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value: string | number;
}

const CheckboxInput = forwardRef<HTMLInputElement, ICheckboxInputProps>(
    ({ name, value, type = "checkbox", className, ...props }, ref) => {
        return (
            <label className="flex items-center">
                <input
                    {...props}
                    ref={ref}
                    type={type}
                    value={String(value)}
                    name={name}
                    className={cn(inputsStyles({ variant: "check" }), className)}
                />
                <Icon icon="uil:check" className={cn(iconStyles, className)} />
            </label>
        );
    }
);

export default CheckboxInput;
