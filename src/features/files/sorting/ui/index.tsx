import React, { useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import { PopupMenu } from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import { buttonContainerStyle, buttonStyle, containerFiltersStyle, radioButtonStyle } from "@/features/admin/filters-users/style";
import { buttonStyles } from "@/shared/components/buttons/style.ts";

type ISortOrder = "asc" | "desc";

type ISortField = "type" | "created_at" | "update_at" | "size";

interface ISorting {
    sort_by: ISortField;
    sort_order: ISortOrder;
}

interface ISortingPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (sorting: ISorting) => void;
    onReset: () => void;
}

interface ISortingPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (sorting: ISorting) => void;
    onReset: () => void;
}

const SORT_FIELDS: { key: ISortField; label: string; options: { label: string; value: ISortOrder }[] }[] = [
    { key: "type", label: "Тип данных", options: [
            { label: "От a до z", value: "asc" },
            { label: "От z до a", value: "desc" }
        ]},
    { key: "created_at", label: "Дата добавления", options: [
            { label: "По возрастанию", value: "asc" },
            { label: "По убыванию", value: "desc" }
        ]},
    { key: "update_at", label: "Дата изменения", options: [
            { label: "По возрастанию", value: "asc" },
            { label: "По убыванию", value: "desc" }
        ]},
    { key: "size", label: "Размер файла", options: [
            { label: "По возрастанию", value: "asc" },
            { label: "По убыванию", value: "desc" }
        ]}
];

const SortingFilesPopupMenu: React.FC<ISortingPopupMenuProps> = ({ isOpen, onClose, onApply, onReset }) => {
    const [sortBy, setSortBy] = useState<ISortField | undefined>(undefined);
    const [sortOrder, setSortOrder] = useState<ISortOrder | undefined>(undefined);

    const handleSortChange = (field: ISortField, order: ISortOrder) => {
        setSortBy(field);
        setSortOrder(order);
    };
    const handleApply = () => {
        if (sortBy && sortOrder) {
            onApply({ sort_by: sortBy, sort_order: sortOrder });
        }
    };
    const handleReset = () => {
        setSortBy(undefined);
        setSortOrder(undefined);
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
                                        checked={sortBy === key && sortOrder === value}
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
                    <Button onClick={handleReset} className={cn(buttonStyles({variant: "baseSecondary"}), buttonStyle)}>
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
