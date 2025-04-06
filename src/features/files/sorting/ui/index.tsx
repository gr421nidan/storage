import React, { useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import { PopupMenu } from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import styles from "@/features/admin/filters-users/style";
import {ISortingPort} from "@/shared/interface/files";
import {ISortField, ISortOrder} from "@/shared/type/files/sorting";

interface ISortingPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (sorting: ISortingPort) => void;
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

    const createSortChangeHandler = (field: ISortField, order: ISortOrder) => () => {
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
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(styles.containerFilters, "h-[510px]")}>
            <div>
                {SORT_FIELDS.map(({ key, label, options }, index) => (
                    <div key={key}>
                        <p className="mb-2">{label}</p>
                        <div className="flex flex-col gap-2">
                            {options.map(({ label, value }) => (
                                <label key={value} className={styles.containerRadio}>
                                    <CheckboxInput
                                        name={key}
                                        type="radio"
                                        value={value}
                                        checked={sortBy === key && sortOrder === value}
                                        onChange={createSortChangeHandler(key, value)}
                                        className={styles.radioButton}
                                    />
                                    {label}
                                </label>
                            ))}
                        </div>
                        {index !== SORT_FIELDS.length - 1 && index < 3 && (
                            <div className={cn(styles.separator, "my-2")}></div>
                        )}
                    </div>
                ))}
                <div className={styles.buttonContainer}>
                    <Button onClick={handleReset} className={cn(buttonStyles({ variant: "baseSecondary" }), styles.button)}>
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

export default SortingFilesPopupMenu;
