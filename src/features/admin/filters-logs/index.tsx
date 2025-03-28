import React, {useState} from "react";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import {ETypeLog} from "@/shared/emum/admin";
import Button from "@/shared/components/buttons/button";
import {PopupMenu} from "@/shared/components/popup-menu";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style";
import {
    buttonContainerStyle, buttonStyle, containerButtonRadiosStyle,
    containerFiltersStyle, containerRadioStyle,
    radioButtonStyle,
    separatorStyle, titleStyle
} from "../filters-users/style";

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
        <PopupMenu isOpen={isOpen} onClose={onClose} className={containerFiltersStyle}>
            <p className={titleStyle}>Тип операций</p>
            <div className={separatorStyle}></div>
            <div className={containerButtonRadiosStyle}>
                {Object.entries(ETypeLog).map(([key, value]) => (
                    <label className={containerRadioStyle} key={key}>
                        <CheckboxInput
                            type="radio"
                            name="logType"
                            value={value}
                            checked={logType === value}
                            onChange={() => handleLogTypeChange(value as ETypeLog)}
                            className={radioButtonStyle}
                        />
                        {logTypeLabels[value as ETypeLog]}
                    </label>
                ))}
            </div>
            <div className={separatorStyle}></div>
            <div className="flex">
                <p className={titleStyle}>Дата</p>
            </div>
            <div className={separatorStyle}></div>
            <p className={titleStyle}>Статус опрерации</p>
            <div>
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

export default FiltersUserLogsPopupMenu;
