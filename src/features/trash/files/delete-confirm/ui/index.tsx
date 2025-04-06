import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import  styles  from "@/features/files/move-to-trash-confirm/style";
import useDeleteFilePresenter from "@/entities/cases/storage/files/delete/presenter";

interface IDeleteFileConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    fileId: string;
}

const DeleteFileConfirm: React.FC<IDeleteFileConfirmProps> = ({ isOpen, onClose, fileId  }) => {
    const { handleDeleteFile } = useDeleteFilePresenter(onClose);
    const handleDelete = () => handleDeleteFile(fileId);
    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены в безвозвратном удалении?</p>
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

export default DeleteFileConfirm;
