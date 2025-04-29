import React, { useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import { ETypeLog } from "@/shared/enum/admin";
import Button from "@/shared/components/buttons/button";
import PopupMenu from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import styles from "../style";
import DatePickerButton from "@/shared/components/date-picker";
import { format } from "date-fns"; // чтобы удобно форматировать дату для бэка

const logTypeLabels: { [key in ETypeLog]: string } = {
    [ETypeLog.DELETE_FOLDER]: "Удаление папки",
    [ETypeLog.DELETE_FILE]: "Удаление файла",
    [ETypeLog.CREATE_FOLDER]: "Создание папки",
    [ETypeLog.UPLOAD_FILE]: "Загрузка файла",
    [ETypeLog.RENAME_FOLDER]: "Переименование папки",
    [ETypeLog.RENAME_FILE]: "Переименование файла",
};

interface IFilters {
    type: ETypeLog | undefined;
    dateFrom: string | undefined;
    dateTo: string | undefined;
}

interface IFiltersPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: IFilters) => void;
    onReset: () => void;
}

const FiltersUserLogsPopupMenu: React.FC<IFiltersPopupMenuProps> = ({
                                                                        isOpen,
                                                                        onClose,
                                                                        onApply,
                                                                        onReset,
                                                                    }) => {
    const [logType, setLogType] = useState<ETypeLog | undefined>(undefined);
    const [dateFrom, setDateFrom] = useState<Date | null>(null);
    const [dateTo, setDateTo] = useState<Date | null>(null);

    const handleApply = () => {
        onApply({
            type: logType,
            dateFrom: dateFrom ? format(dateFrom, "yyyy-MM-dd") : undefined,
            dateTo: dateTo ? format(dateTo, "yyyy-MM-dd") : undefined,
        });
    };

    const handleReset = () => {
        setLogType(undefined);
        setDateFrom(null);
        setDateTo(null);
        onReset();
    };

    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={styles.containerFilters}>
            <p className={styles.title}>Тип операций</p>
            <div className={styles.separator}></div>
            <div className={styles.containerButtonRadios}>
                {Object.entries(ETypeLog)
                    .filter(([key]) => isNaN(Number(key))) // исключаем числовые ключи
                    .map(([key, value]) => (
                        <label className={styles.containerRadio} key={key}>
                            <CheckboxInput
                                type="radio"
                                name="logType"
                                value={value}
                                checked={logType === value}
                                onChange={() => setLogType(value as ETypeLog)}
                                className={styles.radioButton}
                            />
                            {logTypeLabels[value as ETypeLog]}
                        </label>
                    ))}
            </div>
            <div className={styles.separator}></div>
            <div className="flex gap-2">
                <p className={styles.title}>Дата</p>
                <DatePickerButton
                    value={dateFrom}
                    onChange={(date) => setDateFrom(date)}
                    format="dd.MM.yyyy"
                />
                <DatePickerButton
                    value={dateTo}
                    onChange={(date) => setDateTo(date)}
                    format="dd.MM.yyyy"
                />
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    onClick={handleReset}
                    className={cn(buttonStyles({ variant: "baseSecondary" }), styles.button)}
                >
                    Сбросить
                </Button>
                <Button onClick={handleApply} className={styles.button}>
                    Применить
                </Button>
            </div>
        </PopupMenu>
    );
};

export default FiltersUserLogsPopupMenu;
