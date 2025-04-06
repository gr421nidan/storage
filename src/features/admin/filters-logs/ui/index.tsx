import React, { useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import { ETypeLog } from "@/shared/enum/admin";
import Button from "@/shared/components/buttons/button";
import PopupMenu from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import styles from "@/features/admin/filters-users/style";

const logTypeLabels: { [key in ETypeLog]: string } = {
    [ETypeLog.DELETE_FOLDER]: "Удаление папки",
    [ETypeLog.DELETE_FILE]: "Удаление файла",
    [ETypeLog.CREATE_FOLDER]: "Создание папки",
    [ETypeLog.UPLOAD_FILE]: "Загрузка файла",
    [ETypeLog.DOWNLOAD_FOLDER]: "Скачивание папки",
    [ETypeLog.DOWNLOAD_FILE]: "Скачивание файла",
};

interface IFilters {
    logType: ETypeLog | undefined;
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

    const handleLogTypeChange = (value: ETypeLog | undefined) => {
        setLogType(value);
    };

    const handleApply = () => {
        onApply({
            logType,
        });
    };

    const handleReset = () => {
        setLogType(undefined);
        onReset();
    };

    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={styles.containerFilters}>
            <p className={styles.title}>Тип операций</p>
            <div className={styles.separator}></div>
            <div className={styles.containerButtonRadios}>
                {Object.entries(ETypeLog).map(([key, value]) => (
                    <label className={styles.containerRadio} key={key}>
                        <CheckboxInput
                            type="radio"
                            name="logType"
                            value={value}
                            checked={logType === value}
                            onChange={() => handleLogTypeChange(value as ETypeLog)}
                            className={styles.radioButton}
                        />
                        {logTypeLabels[value as ETypeLog]}
                    </label>
                ))}
            </div>
            <div className={styles.separator}></div>
            <div className="flex">
                <p className={styles.title}>Дата</p>
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
