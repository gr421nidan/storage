import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { buttonsContainerStyle } from "../style";

interface IDeleteFolderConfirmProps {
    isOpen: boolean;
    onClose: () => void;
}

const DeleteFolderConfirm: React.FC<IDeleteFolderConfirmProps> = ({ isOpen, onClose }) => {
    const buttonsSize = "h-[52px]";

    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите безвазвратно удалить папку?</p>
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
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteFolderConfirm;
