import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import  styles  from "@/features/files/move-to-trash-confirm/style";
import useMoveToTrashFolderPresenter from "@/entities/cases/storage/folders/move-to-trash/presenter";

interface IMoveToTrashFolderConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    folderId: string;
}

const MoveToTrashFolderConfirm: React.FC<IMoveToTrashFolderConfirmProps> = ({ isOpen, onClose, folderId }) => {
    const { handleMoveToTrashFolder } = useMoveToTrashFolderPresenter(onClose);
    const handleDelete = () => {
        handleMoveToTrashFolder(folderId);
    };
    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите удалить папку?</p>
                <div className={styles.buttonsContainer}>
                    <Button
                        className={cn(buttonStyles({ variant: "baseSecondary" }), styles.buttonCancel)}
                        onClick={onClose}>
                        Отменить
                    </Button>
                    <Button
                        type="button"
                        className={styles.buttonDelete}
                        onClick={handleDelete}>
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default MoveToTrashFolderConfirm;
