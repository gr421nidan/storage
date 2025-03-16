import { useState, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/shared/utils/cn";
import { selectBoxStyles, selectOptionStyles, optionStyles } from "./style";

interface IOption {
    label: string;
    value: number;
}

interface ISelectProps {
    options: IOption[];
    className?: string;
    defaultLabel?: string;
    isError?: boolean;
}

const CustomSelect = forwardRef<HTMLDivElement, ISelectProps>(
    ({ options, className, defaultLabel = "" , isError}, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedValue, setSelectedValue] = useState<number>();

        const selectedOption = options.find((opt) => opt.value === selectedValue);
        const displayLabel = selectedOption ? selectedOption.label : defaultLabel;

        return (
            <div className={cn("relative", className)} ref={ref}>
                <div
                    className={cn(selectBoxStyles({ isOpen , error: isError}))}
                    onClick={() => setIsOpen(!isOpen)}>
                    {displayLabel}
                    <Icon
                        icon="ep:arrow-down"
                        className={cn("text-purple transition-transform", isOpen && "rotate-180")}
                    />
                </div>

                {isOpen && (
                    <ul className={cn(selectOptionStyles())}>
                        {options.map((option, index) => (
                            <li
                                key={option.value}
                                className={cn(optionStyles(), index !== 0 && "border-t-2 border-purple-light")}
                                onClick={() => {
                                    setSelectedValue(option.value);
                                    setIsOpen(false);
                                }}>
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