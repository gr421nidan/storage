import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/shared/utils/cn";
import { Icon } from "@iconify/react";

interface DatePickerProps {
    placeholder?: string;
    className?: string;
    onChange?: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ placeholder, className, onChange }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
        if (onChange) onChange(date);
    };

    return (
        <div className={cn("relative flex items-center border rounded-[20px] px-[27px] bg-white dark:bg-gray-900", className)}>
            <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="dd.MM.yyyy"
                placeholderText={placeholder}
                className="outline-none bg-transparent dark:text-white"
            />
            <Icon icon="mdi:calendar-month-outline" className="w-5 h-5 text-gray-500 dark:text-gray-400 ml-2" />
        </div>
    );
};

export default CustomDatePicker;
