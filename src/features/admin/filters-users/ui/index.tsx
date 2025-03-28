import React, {useState} from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import {EGrantID} from "@/shared/emum/admin";
import Button from "@/shared/components/buttons/button";
import {PopupMenu} from "@/shared/components/popup-menu";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import {
    buttonContainerStyle, buttonStyle, containerButtonRadiosStyle,
    containerFiltersStyle, containerRadioStyle,
    radioButtonStyle,
    separatorStyle, titleStyle
} from "../style.ts";

interface IFilters {
    access:EGrantID | undefined,
    activity: boolean | undefined
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
        <PopupMenu isOpen={isOpen} onClose={onClose} className={cn(containerFiltersStyle, "h-[256px]") }>
            <p className={titleStyle}>Доступ</p>
            <div className={containerButtonRadiosStyle}>
                <label className={containerRadioStyle}>
                    <CheckboxInput
                        type="radio"
                        name="access"
                        value={EGrantID.FULL_ACCESS}
                        checked={access === EGrantID.FULL_ACCESS}
                        onChange={() => handleAccessChange(EGrantID.FULL_ACCESS)}
                        className={radioButtonStyle}
                    />
                    Полный доступ
                </label>
                <label className={containerRadioStyle}>
                    <CheckboxInput
                        type="radio"
                        name="access"
                        value={EGrantID.VIEW}
                        checked={access === EGrantID.VIEW}
                        onChange={() => handleAccessChange(EGrantID.VIEW)}
                        className={radioButtonStyle}
                    />
                    Просмотр
                </label>
            </div>
            <div className={separatorStyle}></div>
            <p className={titleStyle}>Активность</p>
            <div className={containerButtonRadiosStyle}>
                <label className={containerRadioStyle}>
                    <CheckboxInput
                        type="radio"
                        name="activity"
                        value="true"
                        checked={activity === true}
                        onChange={() => handleActivityChange(true)}
                        className={radioButtonStyle}
                    />
                    Активный
                </label>
                <label className={containerRadioStyle}>
                    <CheckboxInput
                        type="radio"
                        name="activity"
                        value="false"
                        checked={activity === false}
                        onChange={() => handleActivityChange(false)}
                        className={radioButtonStyle}
                    />
                    Неактивный
                </label>
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
        </PopupMenu>
    );
};

export default FiltersUsersPopupMenu;
