import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import styles from "../style";
import useCleanupDiskPresenter from "@/entities/cases/storage/cleanup-disk/presenter";
import {IConfirmModalProps} from "@/shared/interface/modal";

const DiskCleanupConfirm: React.FC<IConfirmModalProps> = ({isOpen, onClose}) => {
    const { handleCleanupDisk } = useCleanupDiskPresenter(onClose);
    if (!isOpen) return null;

    return (
        <Modal title="Очистить" className={styles.wrapper} onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите очистить диск?</p>
                <div className={styles.buttonsContainer}>
                    <Button className={cn(buttonStyles({variant: "baseSecondary"}), styles.buttonCancel)}
                            onClick={onClose}>
                        Отменить
                    </Button>
                    <Button type="button" className={styles.buttonDelete} onClick={handleCleanupDisk}>
                        Очистить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DiskCleanupConfirm;
