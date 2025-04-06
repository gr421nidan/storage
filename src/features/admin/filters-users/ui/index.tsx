import React, { useState } from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import { EGrantID } from "@/shared/enum/admin";
import Button from "@/shared/components/buttons/button";
import { PopupMenu } from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import styles from "../style";

interface IFilters {
    access: EGrantID | undefined;
    activity: boolean | undefined;
}

interface IFiltersPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: IFilters) => void;
    onReset: () => void;
}

const FiltersUsersPopupMenu: React.FC<IFiltersPopupMenuProps> = ({
                                                                     isOpen,
                                                                     onClose,
                                                                     onApply,
                                                                     onReset,
                                                                 }) => {
    const [access, setAccess] = useState<EGrantID | undefined>(undefined);
    const [activity, setActivity] = useState<boolean | undefined>(undefined);

    const handleAccessChange = (value: EGrantID | undefined) => {
        setAccess(value);
    };

    const handleActivityChange = (value: boolean | undefined) => {
        setActivity(value);
    };

    const handleApply = () => {
        onApply({
            access,
            activity,
        });
    };

    const handleReset = () => {
        setAccess(undefined);
        setActivity(undefined);
        onReset();
    };

    return (
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(styles.containerFilters, "h-[256px]")}>
            <p className={styles.title}>Доступ</p>
            <div className={styles.containerButtonRadios}>
                <label className={styles.containerRadio}>
                    <CheckboxInput
                        type="radio"
                        name="access"
                        value={EGrantID.FULL_ACCESS}
                        checked={access === EGrantID.FULL_ACCESS}
                        onChange={() => handleAccessChange(EGrantID.FULL_ACCESS)}
                        className={styles.radioButton}
                    />
                    Полный доступ
                </label>
                <label className={styles.containerRadio}>
                    <CheckboxInput
                        type="radio"
                        name="access"
                        value={EGrantID.VIEW}
                        checked={access === EGrantID.VIEW}
                        onChange={() => handleAccessChange(EGrantID.VIEW)}
                        className={styles.radioButton}
                    />
                    Просмотр
                </label>
            </div>
            <div className={styles.separator}></div>
            <p className={styles.title}>Активность</p>
            <div className={styles.containerButtonRadios}>
                <label className={styles.containerRadio}>
                    <CheckboxInput
                        type="radio"
                        name="activity"
                        value="true"
                        checked={activity === true}
                        onChange={() => handleActivityChange(true)}
                        className={styles.radioButton}
                    />
                    Активный
                </label>
                <label className={styles.containerRadio}>
                    <CheckboxInput
                        type="radio"
                        name="activity"
                        value="false"
                        checked={activity === false}
                        onChange={() => handleActivityChange(false)}
                        className={styles.radioButton}
                    />
                    Неактивный
                </label>
            </div>
            <div className={styles.buttonContainer}>
                <Button onClick={handleReset} className={cn(buttonStyles({ variant: "baseSecondary" }), styles.button)}>
                    Сбросить
                </Button>
                <Button onClick={handleApply} className={styles.button}>
                    Применить
                </Button>
            </div>
        </PopupMenu>
    );
};

export default FiltersUsersPopupMenu;
