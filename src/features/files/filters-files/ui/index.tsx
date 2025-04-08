import React, {useState} from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import PopupMenu from "@/shared/components/popup-menu";
import {cn} from "@/shared/utils/cn";
import DatePickerButton from "@/shared/components/date-picker";
import styles from "@/features/admin/filters-users/style";
import {buttonStyles} from "@/shared/components/buttons/style";
import {IFiltersPort} from "@/shared/interface/files";

interface IFiltersPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: IFiltersPort) => void;
    onReset: () => void;
}

const fileTypeOptions = [
    {label: "Изображения", value: "image"},
    {label: "Аудио", value: "audio"},
    {label: "Видео", value: "video"},
    {label: "Текстовые файлы", value: "text"},
];

const FiltersFilesPopupMenu: React.FC<IFiltersPopupMenuProps> = ({isOpen, onClose, onApply, onReset}) => {
    const [selectedFileTypes, setSelectedFileTypes] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleFileTypeChange = (type: string) => () => {
        setSelectedFileTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };
    const handleApply = () => {
        const filters: IFiltersPort = {
            date: selectedDate,
            type: selectedFileTypes,
        };

        onApply(filters);
    };
    const handleReset = () => {
        setSelectedFileTypes([]);
        setSelectedDate(null);
        onReset();
    };
    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(styles.containerFilters, "h-[311px]")}>
            <div>
                <div>
                    <p>Тип данных</p>
                    <div className={cn(styles.separator, "my-2")}></div>
                    <div className="flex flex-col gap-2">
                        {fileTypeOptions.map(({label, value}) => (
                            <label key={value} className={styles.containerRadio}>
                                <CheckboxInput
                                    name={value}
                                    type="checkbox"
                                    value={value}
                                    checked={selectedFileTypes.includes(value)}
                                    onChange={handleFileTypeChange(value)}
                                    className={styles.radioButton}
                                />
                                {label}
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={cn(styles.separator, "my-2")}></div>
                    <div className={styles.datePickerContainer}>
                        <p>Дата добавления</p>
                        <DatePickerButton value={selectedDate} onChange={setSelectedDate} format="dd.MM.yyyy"/>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <Button
                        onClick={handleReset}
                        className={cn(buttonStyles({variant: "baseSecondary"}), styles.button)}>
                        Сбросить
                    </Button>
                    <Button onClick={handleApply} className={styles.button}>
                        Применить
                    </Button>
                </div>
            </div>
        </PopupMenu>
    );
};

export default FiltersFilesPopupMenu;
