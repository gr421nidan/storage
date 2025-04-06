import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { buttonsContainerStyle } from "../style";
import useDeleteFilePresenter from "@/entities/cases/storage/files/delete/presenter";

interface IDeleteFileConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    fileId: string;
}

const DeleteFileConfirm: React.FC<IDeleteFileConfirmProps> = ({ isOpen, onClose, fileId  }) => {
    const buttonsSize = "h-[52px]";
    const { handleDeleteFile } = useDeleteFilePresenter(onClose);
    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены в безвозвратном удалении?</p>
                <div className={buttonsContainerStyle}>
                    <Button
                        className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[206px]", buttonsSize)}
                        onClick={onClose}>
                        Отменить
                    </Button>
                    <Button
                        type="button"
                        className={`w-[217px] ${buttonsSize}`}
                        onClick={() => handleDeleteFile(fileId)}
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteFileConfirm;
