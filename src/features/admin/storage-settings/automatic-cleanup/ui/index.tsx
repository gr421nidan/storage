import React, { useEffect, useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import PopupMenu from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import styles from "../style";
import { EClearingStorageInterval } from "@/shared/enum/storage/clearing-interval";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import useAutomaticCleanupDiskPresenter from "@/entities/cases/user-storage/automatic-cleanup-disk/presenter";
import useGetStorageInfoUseCase from "@/entities/cases/user-storage/get-info/use-case";

const AutomaticClearingLabels: { [key in EClearingStorageInterval]: string } = {
    [EClearingStorageInterval.DEFAULT]: "По умолчанию",
    [EClearingStorageInterval.DAILY]: "Каждый день",
    [EClearingStorageInterval.WEEKLY]: "Каждую неделю",
    [EClearingStorageInterval.MONTHLY]: "Каждый месяц",
};

interface IAutomaticClearingPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const AutomaticCleanupPopupMenu: React.FC<IAutomaticClearingPopupMenuProps> = ({
                                                                                    isOpen,
                                                                                    onClose
                                                                                }) => {
    const { data } = useGetStorageInfoUseCase();
    const { handleAutomaticCleanupDisk } = useAutomaticCleanupDiskPresenter();

    const [selected, setSelected] = useState<EClearingStorageInterval>(EClearingStorageInterval.DEFAULT);

    useEffect(() => {
        if (data?.clearing_interval !== undefined) {
            setSelected(data.clearing_interval);
        }
    }, [data]);

    const handleSubmit = async () => {
        await handleAutomaticCleanupDisk({ clearing_interval: selected });
        onClose();
    };

    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(styles.containerFilters, "h-[250px]")}>
            <p>Периодичность очистки:</p>
            <div className={styles.separator}></div>
            <div className={styles.containerButtonRadios}>
                {Object.entries(AutomaticClearingLabels).map(([key, label]) => (
                    <label key={key} className={styles.containerRadio}>
                        <CheckboxInput
                            type="radio"
                            value={key}
                            name="clearing_interval"
                            checked={selected === Number(key)}
                            onChange={() => setSelected(Number(key))}
                            className={styles.radioButton}
                        />
                        <span>{label}</span>
                    </label>
                ))}
                <div className={styles.buttonContainer}>
                    <Button
                        type="button"
                        className={cn(buttonStyles({ variant: "baseSecondary" }), styles.buttonSecond)}
                        onClick={onClose}
                    >
                        Отменить
                    </Button>
                    <Button type="button" className={styles.button} onClick={handleSubmit}>
                        Применить
                    </Button>
                </div>
            </div>
        </PopupMenu>
    );
};

export default AutomaticCleanupPopupMenu;