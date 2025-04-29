import React from "react";
import Button from "@/shared/components/buttons/button";
import PopupMenu from "@/shared/components/popup-menu";
import {ELinkActivity} from "@/shared/enum/folder/link-activity";
import useCopyLinkFolderPresenter from "@/entities/cases/storage/folders/copy-link/presenter";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import styles from "../style";

interface ICopyLinkFolderProps {
    folderId: string;
}

const linkActivityOptions = [
    {label: "День", value: ELinkActivity.DAY},
    {label: "Неделя", value: ELinkActivity.WEEK},
    {label: "Месяц", value: ELinkActivity.MONTH},
    {label: "Неограниченно", value: ELinkActivity.UNLIMITED},
];

const CopyLinkFolder: React.FC<ICopyLinkFolderProps> = ({folderId}) => {
    const {
        selectedActivity,
        onSelectActivity,
        onCopyLink,
        isCopyButtonDisabled,isPopupOpen, openPopup, closePopup
    } = useCopyLinkFolderPresenter({
        folderId,
    });

    return (
        <div className={styles.wrapper}>
            <div className="relative">
                <Button
                    onClick={openPopup}
                    className={cn(
                        buttonStyles({
                            variant: "baseSecondary",
                            isActive: isPopupOpen,
                        }), styles.buttonActivity
                    )}
                >
                    Время активности ссылки
                </Button>

                <PopupMenu
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    className={styles.popupContent}>
                    {linkActivityOptions.map(({label, value}) => (
                        <label key={value} className={styles.radioButtonWrapper}>
                            <CheckboxInput
                                name={String(value)}
                                type="radio"
                                value={value}
                                checked={selectedActivity === value}
                                onChange={() => onSelectActivity(value)}
                                className={styles.radioButton}
                            />
                            {label}
                        </label>
                    ))}
                </PopupMenu>
            </div>

            <Button
                onClick={onCopyLink}
                disabled={isCopyButtonDisabled}
                className={cn(buttonStyles({variant: "baseSecondary"}), styles.buttonCopyLink)}
            >
                Копировать ссылку
            </Button>
        </div>
    );
};

export default CopyLinkFolder;
