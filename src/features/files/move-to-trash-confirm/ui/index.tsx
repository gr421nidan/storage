import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import  styles  from "../style.ts";
import useMoveToTrashFilePresenter from "@/entities/cases/storage/files/move-to-trash/presenter";

interface IMoveToTrashConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    fileId: string;
}

const MoveToTrashConfirm: React.FC<IMoveToTrashConfirmProps> = ({ isOpen, onClose, fileId }) => {
    const { handleMoveToTrashFile } = useMoveToTrashFilePresenter(onClose);

    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className={styles.wrapper} onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите удалить файл?</p>
                <div className={styles.buttonsContainer}>
                    <Button className={cn(buttonStyles({ variant: "baseSecondary" }), styles.buttonCancel)} onClick={onClose}>
                        Отменить
                    </Button>
                    <Button type="button" className={styles.buttonDelete} onClick={() => handleMoveToTrashFile(fileId)}>
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default MoveToTrashConfirm;
