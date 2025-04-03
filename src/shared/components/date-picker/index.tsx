import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/shared/components/buttons/button";
import {cn} from "@/shared/utils/cn";
import { ru } from "date-fns/locale";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import {
    datePickerCalendar,
    datePickerDay,
    datePickerWeekDay,
} from "./style";
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
            <Button className={cn(buttonStyles({ variant: "date" }),"w-[92px] h-7")} onClick={handleButtonClick}>{value ? value.toLocaleDateString("ru-RU") : "дд.мм.гггг"}</Button>

            {isOpen && (
                <div className="absolute z-50">
                <DatePicker
                    locale={ru}
                    calendarClassName={datePickerCalendar}
                    dayClassName={() => datePickerDay}
                    weekDayClassName={()=>datePickerWeekDay}
                    selected={value}
                    onChange={(date: Date | null) => {
                        onChange(date);
                        setIsOpen(false);
                    }}
                    dateFormat={format}
                    inline
                />
                </div>
            )}
        </div>
    );
};

export default DatePickerButton;
