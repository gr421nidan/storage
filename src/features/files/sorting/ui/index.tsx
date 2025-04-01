import React, { useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import { PopupMenu } from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import {
    buttonContainerStyle,
    buttonStyle,
    containerFiltersStyle,
    radioButtonStyle
} from "@/features/admin/filters-users/style";
import {buttonStyles} from "@/shared/components/buttons/style.ts";

type ISortOrder = "asc" | "desc";

interface ISorting {
    sort?: Record<string, ISortOrder>;
}

interface ISortingPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (sorting: ISorting) => void;
    onReset: () => void;
}

const SORT_FIELDS: { key: string; label: string; options: { label: string; value: ISortOrder }[] }[] = [
    { key: "name", label: "Тип данных", options: [
            { label: "От a до z", value: "asc" },
            { label: "От z до a", value: "desc" }
        ]},
    { key: "createdAt", label: "Дата добавления", options: [
            { label: "По возрастанию", value: "asc" },
            { label: "По убыванию", value: "desc" }
        ]},
    { key: "updatedAt", label: "Дата изменения", options: [
            { label: "По возрастанию", value: "asc" },
            { label: "По убыванию", value: "desc" }
        ]},
    { key: "size", label: "Размер файла", options: [
            { label: "По возрастанию", value: "asc" },
            { label: "По убыванию", value: "desc" }
        ]}
];

const SortingFilesPopupMenu: React.FC<ISortingPopupMenuProps> = ({ isOpen, onClose, onApply, onReset }) => {
    const [sortCriteria, setSortCriteria] = useState<Record<string, ISortOrder>>({});

    const handleSortChange = (field: string, order: ISortOrder) => {
        setSortCriteria((prev) => ({ ...prev, [field]: order }));
    };

    const handleApply = () => {
        onApply({ sort: sortCriteria });
    };

    const handleReset = () => {
        setSortCriteria({});
        onReset();
    };

    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(containerFiltersStyle, "h-[512px]")}>
            <div className="space-y-4">
                {SORT_FIELDS.map(({ key, label, options }) => (
                    <div key={key}>
                        <p className="mb-[3px]">{label}</p>
                        <div className="border-b border-purple-light mb-2"></div>
                        <div className="flex flex-col gap-2">
                            {options.map(({ label, value }) => (
                                <label key={value} className="flex items-center">
                                    <CheckboxInput
                                        name={key}
                                        type="radio"
                                        value={value}
                                        checked={sortCriteria[key] === value}
                                        onChange={() => handleSortChange(key, value)}
                                        className={radioButtonStyle}
                                    />
                                    {label}
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
            </div>
        </PopupMenu>
    );
};

export default SortingFilesPopupMenu;
