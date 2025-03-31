import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/shared/components/buttons/button";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";

interface IDatePickerButtonProps {
    value: Date | null;
    onChange: (date: Date | null) => void;
    format?: string;
}

const DatePickerButton: React.FC<IDatePickerButtonProps> = ({ value, onChange, format = "dd/MM/yyyy" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <Button className={cn(buttonStyles({ variant: "date" }),"w-[109px] h-[30px]")} onClick={handleButtonClick}>{value ? value.toLocaleDateString("ru-RU") : "дд.мм.гггг"}</Button>

            {isOpen && (
                <DatePicker
                    selected={value}
                    onChange={(date: Date | null) => {
                        onChange(date);
                        setIsOpen(false);
                    }}
                    dateFormat={format}
                    inline
                />
            )}
        </div>
    );
};

export default DatePickerButton;
