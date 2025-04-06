import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { buttonsContainerStyle } from "../style.ts";
import useMoveToTrashFolderPresenter from "@/entities/cases/storage/folders/move-to-trash/presenter";

interface IMoveToTrashFolderConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    folderId: string;
}

const MoveToTrashFolderConfirm: React.FC<IMoveToTrashFolderConfirmProps> = ({ isOpen, onClose, folderId }) => {
    const buttonsSize = "h-[52px]";
    const { handleMoveToTrashFolder } = useMoveToTrashFolderPresenter(onClose);

    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите удалить папку?</p>
                <div className={buttonsContainerStyle}>
                    <Button
                        className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[206px]", buttonsSize)}
                        onClick={onClose}>
                        Отменить
                    </Button>
                    <Button
                        type="button"
                        className={`w-[217px] ${buttonsSize}`}
                        onClick={() => handleMoveToTrashFolder(folderId)}>
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default MoveToTrashFolderConfirm;
