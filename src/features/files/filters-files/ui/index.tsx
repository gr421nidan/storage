import React, {useState} from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import {PopupMenu} from "@/shared/components/popup-menu";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import {
    buttonContainerStyle, buttonStyle,
    containerFiltersStyle, containerRadioStyle,
    radioButtonStyle,
    separatorStyle
} from "@/features/admin/filters-users/style.ts";
import DatePickerButton from "@/shared/components/datePicker";

interface IFilters {
    fileType?: string[];
    date?: Date | null;
}

interface IFiltersPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: IFilters) => void;
    onReset: () => void;
}

const FiltersFilesPopupMenu: React.FC<IFiltersPopupMenuProps> = ({
                                                                     isOpen,
                                                                     onClose,
                                                                     onApply,
                                                                     onReset,
                                                                 }) => {
    const [fileTypes, setFileTypes] = useState<string[]>([]);
    const [selectedFileTypes, setSelectedFileTypes] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleFileTypeChange = (type: string) => {
        setSelectedFileTypes(prev =>
            prev.includes(type)
                ? prev.filter(item => item !== type)
                : [...prev, type]
        );
    };
    const handleApply = () => {
        onApply({
            fileType: fileTypes,
            date: selectedDate,
        });
    };
    const handleReset = () => {
        setFileTypes([]);
        setSelectedDate(null);
        onReset();
    };

    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(containerFiltersStyle, "h-[323px]") }>
            <div>
                <p className="mb-2">Тип данных</p>
                <div className={separatorStyle}></div>
            </div>
            <div className="flex flex-col gap-3">
                <label className={containerRadioStyle}>
                    <CheckboxInput
                        name="image"
                        type="checkbox"
                        value="image"
                        checked={selectedFileTypes.includes("image")}
                        onChange={() => handleFileTypeChange("image")}
                        className={radioButtonStyle}
                    />
                    Изображения
                </label>
                <label className={containerRadioStyle}>
                    <CheckboxInput
                        name="audio"
                        type="checkbox"
                        value="audio"
                        checked={selectedFileTypes.includes("audio")}
                        onChange={() => handleFileTypeChange("audio")}
                        className={radioButtonStyle}
                    />
                    Аудио
                </label>
                <label className={containerRadioStyle}>
                    <CheckboxInput
                        name="video"
                        type="checkbox"
                        value="video"
                        checked={selectedFileTypes.includes("video")}
                        onChange={() => handleFileTypeChange("video")}
                        className={radioButtonStyle}
                    />
                    Видео
                </label>

                <label className={containerRadioStyle}>
                    <CheckboxInput
                        name="document"
                        type="checkbox"
                        value="document"
                        checked={selectedFileTypes.includes("document")}
                        onChange={() => handleFileTypeChange("document")}
                        className={radioButtonStyle}
                    />
                    Текстовые файлы
                </label>
            </div>
            <div>
                <p className="mb-2">Дата добавления</p>
                <div className={separatorStyle}></div>
            </div>
            <DatePickerButton
                value={selectedDate}
                onChange={setSelectedDate}
                format="dd/MM/yyyy"
            />
            <div className={buttonContainerStyle}>
                <Button
                    onClick={handleReset}
                    className={cn(buttonStyles({variant: "baseSecondary"}), buttonStyle)}>
                    Сбросить
                </Button>
                <Button onClick={handleApply} className={buttonStyle}>
                    Применить
                </Button>
            </div>
        </PopupMenu>
    );
};

export default FiltersFilesPopupMenu;
