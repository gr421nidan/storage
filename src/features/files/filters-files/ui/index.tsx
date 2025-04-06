import React, { useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import { PopupMenu } from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import DatePickerButton from "@/shared/components/date-picker";
import {
    buttonContainerStyle,
    buttonStyle,
    containerFiltersStyle,
    radioButtonStyle
} from "@/features/admin/filters-users/style";
import {buttonStyles} from "@/shared/components/buttons/style";
import {EFileType} from "@/shared/enum/file-types";
import {IFiltersPort} from "@/shared/interface/files";

interface IFiltersPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: IFiltersPort) => void;
    onReset: () => void;
}
const fileTypeMapping: Record<string, string[]> = {
    image: [EFileType.JPEG, EFileType.JPG, EFileType.PNG, EFileType.GIF],
    audio: [EFileType.MP3, EFileType.WAV, EFileType.FLAC, EFileType.AAC],
    video: [EFileType.MP4, EFileType.AVI],
    document: [EFileType.PDF, EFileType.DOC, EFileType.DOCX, EFileType.TXT, EFileType.ODT],
};

const fileTypeOptions = [
    { label: "Изображения", value: "image" },
    { label: "Аудио", value: "audio" },
    { label: "Видео", value: "video" },
    { label: "Текстовые файлы", value: "document" },
];

const FiltersFilesPopupMenu: React.FC<IFiltersPopupMenuProps> = ({ isOpen, onClose, onApply, onReset }) => {
    const [selectedFileTypes, setSelectedFileTypes] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleFileTypeChange = (type: string) => () => {
        setSelectedFileTypes((prev) =>
            prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
        );
    };
    const handleApply = () => {
        const fileTypeMIMEs = selectedFileTypes.flatMap((type) => fileTypeMapping[type] || []);
        onApply({ fileType: fileTypeMIMEs, date: selectedDate });
    };

    const handleReset = () => {
        setSelectedFileTypes([]);
        setSelectedDate(null);
        onReset();
    };

    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(containerFiltersStyle, "h-[311px]") }>
            <div>
                <div>
                    <p>Тип данных</p>
                    <div className="border-b-2 border-purple-light my-2"></div>
                    <div className="flex flex-col gap-2">
                        {fileTypeOptions.map(({ label, value }) => (
                            <label key={value} className="flex items-center gap-1">
                                <CheckboxInput
                                    name={value}
                                    type="checkbox"
                                    value={value}
                                    checked={selectedFileTypes.includes(value)}
                                    onChange={handleFileTypeChange(value)}
                                    className={radioButtonStyle}
                                />
                                {label}
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="border-b-2 border-purple-light my-1"></div>
                    <div className="flex justify-between items-center mt-4">
                        <p>Дата добавления</p>
                        <DatePickerButton value={selectedDate} onChange={setSelectedDate} format="dd.MM.yyyy" />
                    </div>
                </div>

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
            </div>
        </PopupMenu>
    );
};

export default FiltersFilesPopupMenu;
