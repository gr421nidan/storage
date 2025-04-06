import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { buttonsContainerStyle } from "../style.ts";
import useMoveToTrashFilePresenter from "@/entities/cases/storage/files/move-to-trash/presenter";

interface IMoveToTrashConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    fileId: string;
}

const MoveToTrashConfirm: React.FC<IMoveToTrashConfirmProps> = ({ isOpen, onClose, fileId }) => {
    const buttonsSize = "h-[52px]";
    const { handleMoveToTrashFile } = useMoveToTrashFilePresenter(onClose);

    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите удалить файл?</p>
                <div className={buttonsContainerStyle}>
                    <Button
                        className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[206px]", buttonsSize)}
                        onClick={onClose}
                    >
                        Отменить
                    </Button>
                    <Button
                        type="button"
                        className={`w-[217px] ${buttonsSize}`}
                        onClick={() => handleMoveToTrashFile(fileId)}
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default MoveToTrashConfirm;
