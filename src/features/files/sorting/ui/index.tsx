import React, { useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import { PopupMenu } from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import {
    buttonContainerStyle, buttonStyle,
    containerFiltersStyle, containerRadioStyle,
    radioButtonStyle, separatorStyle
} from "@/features/admin/filters-users/style.ts";
import {buttonStyles} from "@/shared/components/buttons/style.ts";

interface IFilters {
    fileType?: string[];
    sort?: Record<string, "asc" | "desc">;
}

interface IFiltersPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: IFilters) => void;
    onReset: () => void;
}

const SORT_OPTIONS: Array<"asc" | "desc"> = ["asc", "desc"];
const SORT_FIELDS = ["name", "createdAt", "updatedAt", "size"] as const;

type ISortField = typeof SORT_FIELDS[number];

type ISortCriteria = Partial<Record<ISortField, "asc" | "desc">>;

const SortingFilesPopupMenu: React.FC<IFiltersPopupMenuProps> = ({ isOpen, onClose, onApply, onReset }) => {
    const [selectedFileTypes, setSelectedFileTypes] = useState<string[]>([]);
    const [sortCriteria, setSortCriteria] = useState<ISortCriteria>({});

    const handleSortChange = (field: ISortField, order: "asc" | "desc") => {
        setSortCriteria(prev => ({ ...prev, [field]: order }));
    };

    const handleApply = () => {
        onApply({ fileType: selectedFileTypes, sort: sortCriteria });
    };

    const handleReset = () => {
        setSelectedFileTypes([]);
        setSortCriteria({});
        onReset();
    };

    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(containerFiltersStyle, "h-[468px]")}>
            {SORT_FIELDS.map(field => (
                <div key={field}>
                    <p className="mb-2">{field === "name" ? "Тип данных" : field === "createdAt" ? "Дата добавления" : field === "updatedAt" ? "Дата изменения" : "Размер файла"}</p>
                    <div className={separatorStyle}></div>
                    <div className="flex flex-col gap-2">
                        {SORT_OPTIONS.map(order => (
                            <label key={order} className={containerRadioStyle}>
                                <CheckboxInput
                                    name={`${field}-${order}`}
                                    type="radio"
                                    value={order}
                                    checked={sortCriteria[field] === order}
                                    onChange={() => handleSortChange(field, order)}
                                    className={radioButtonStyle}
                                />
                                {order === "asc" ? "По возрастанию" : "По убыванию"}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
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

export default SortingFilesPopupMenu;
