import React, {useState} from "react";
import Button from "@/shared/components/buttons/button";
import PopupMenu from "@/shared/components/popup-menu";
import { cn } from "@/shared/utils/cn";
import useChooseAccessTypePresenter from "@/entities/cases/storage/folders/choose-access/presenter";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import styles from "../style";

interface IChooseAccessForFolderProps {
    folderId: string;
}

const ChooseAccessForFolder: React.FC<IChooseAccessForFolderProps> = ({ folderId }) => {
    const {
        isRestricted,
        setRestrictedAccess,
        setLinkAccess,
    } = useChooseAccessTypePresenter({ folderId });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    return (
        <div className="relative">
            <div className="flex">
                <Button
                    onClick={openPopup}
                    className={cn(
                        buttonStyles({
                            variant: "baseSecondary",
                            isActive: isPopupOpen,
                        }),
                        styles.buttonAccess
                    )}>
                    Тип доступа
                </Button>
            </div>
            <PopupMenu
                isOpen={isPopupOpen}
                onClose={closePopup}
                className={styles.popupWrapper}>
                <label className={styles.buttonWrapper}>
                    <CheckboxInput
                        name="accessType"
                        type="radio"
                        checked={!isRestricted}
                        value="false"
                        onChange={setRestrictedAccess}
                        className={styles.radioButton}
                    />
                    Ограниченный
                </label>
                <label className={styles.buttonWrapper}>
                    <CheckboxInput
                        name="accessType"
                        type="radio"
                        checked={isRestricted}
                        value="true"
                        onChange={setLinkAccess}
                        className={styles.radioButton}
                    />
                    Кто имеет ссылку
                </label>
            </PopupMenu>
        </div>
    );
};

export default ChooseAccessForFolder;
