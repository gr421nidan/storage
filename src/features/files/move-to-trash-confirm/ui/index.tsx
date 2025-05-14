import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import  styles  from "@/features/storage/confirm_disk_cleanup/style";
import useMoveToTrashFilePresenter from "@/entities/cases/storage/files/move-to-trash/presenter";
import {IConfirmModalProps} from "@/shared/interface/modal";

interface IMoveToTrashConfirmProps extends IConfirmModalProps{
    fileId: string;
}

const MoveToTrashConfirm: React.FC<IMoveToTrashConfirmProps> = ({isOpen, onClose, fileId}) => {
    const {handleMoveToTrashFile} = useMoveToTrashFilePresenter(onClose);
    const handleDeleteClick = () => handleMoveToTrashFile(fileId);
    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className={styles.wrapper} onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите удалить файл?</p>
                <div className={styles.buttonsContainer}>
                    <Button className={cn(buttonStyles({variant: "baseSecondary"}), styles.buttonCancel)}
                            onClick={onClose}>
                        Отменить
                    </Button>
                    <Button type="button" className={styles.buttonDelete} onClick={handleDeleteClick}>
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default MoveToTrashConfirm;
