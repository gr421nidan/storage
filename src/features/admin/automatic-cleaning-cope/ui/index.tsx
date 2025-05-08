import React from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import Button from "@/shared/components/buttons/button";
import PopupMenu from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import styles from "../style";
import { EClearingInterval } from "@/shared/enum/admin";
import useAutomaticDeleteLogsPresenter from "@/entities/cases/logs-user/automatic-delete-user-logs/presenter";
import {buttonStyles} from "@/shared/components/buttons/style.ts";

const automaticClearingLabels: { [key in EClearingInterval]: string } = {
    [EClearingInterval.DEFAULT]: "По умолчанию",
    [EClearingInterval.DAILY]: "Каждый день",
    [EClearingInterval.WEEKLY]: "Каждую неделю",
    [EClearingInterval.MONTHLY]: "Каждый месяц",
};

interface IAutomaticClearingPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    userId?: string;
}

const AutomaticClearingPopupMenu: React.FC<IAutomaticClearingPopupMenuProps> = ({
                                                                                    isOpen,
                                                                                    onClose,
                                                                                    userId,
                                                                                }) => {
    const { register, onSubmit } = useAutomaticDeleteLogsPresenter(userId);
    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(styles.containerFilters, "h-[280px]")}>
            <p>Периодичность очистки:</p>
            <div className={styles.separator}></div>
            <form className={styles.containerButtonRadios}>
                {Object.entries(automaticClearingLabels).map(([key, label]) => (
                    <label key={key} className={styles.containerRadio}>
                        <CheckboxInput
                            type="radio"
                            value={key}
                            {...register("clearing_interval")}
                            name="clearing_interval"
                            className={styles.radioButton}
                        />
                        <span>{label}</span>
                    </label>
                ))}
                <div className={styles.buttonContainer}>
                    <Button type="button" className={cn(buttonStyles({ variant: "baseSecondary" }), styles.buttonSecond)} onClick={() => onSubmit(true)()}>
                        Применить
                    </Button>
                    <Button type="button" className={styles.button} onClick={() => onSubmit(false)()}>
                        Отменить
                    </Button>
                </div>
            </form>
        </PopupMenu>
    );
};

export default AutomaticClearingPopupMenu;