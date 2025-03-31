import { useState, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/shared/utils/cn";
import { selectBoxStyles, selectOptionStyles, optionStyles } from "./style";
import {EGrantID} from "@/shared/emum/admin";

interface IOption {
    label: string;
    value: EGrantID;
}

interface ISelectProps extends Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
    options: IOption[];
    className?: string;
    defaultLabel?: string;
    isError?: boolean;
    value?: string | number;
    onChange?: (value: EGrantID) => void;
}

const CustomSelect = forwardRef<HTMLDivElement, ISelectProps>(
    ({ options, className, defaultLabel, isError, value, onChange, name, ...props }, ref) => {
        const [isOpen, setIsOpen] = useState(false);

        const selectedOption = options.find((opt) => opt.value === value);
        const displayLabel = selectedOption ? selectedOption.label : defaultLabel;

        return (
            <div className={cn("relative", className)} ref={ref}>
                <input type="hidden" name={name} value={value} {...props} />
                <div
                    className={cn(selectBoxStyles({ isOpen, error: isError }))}
                    onClick={() => setIsOpen(!isOpen)}>
                    {displayLabel}
                    <Icon
                        icon="simple-line-icons:arrow-down"
                        width="25"
                        className={cn("transition-transform", isOpen && "rotate-180")}
                    />
                </div>

                {isOpen && (
                    <ul className={cn(selectOptionStyles())}>
                        {options.map((option, index) => (
                            <li
                                key={option.value}
                                className={cn(optionStyles(), index !== 0 && "border-t-2 border-purple-light")}
                                onClick={() => {
                                    onChange?.(option.value);
                                    setIsOpen(false);
                                }}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
);

export default CustomSelect;
