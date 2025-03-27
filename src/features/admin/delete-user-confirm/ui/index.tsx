import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { buttonsContainerStyle } from "../style";
import useDeleteUserPresenter from "@/entities/cases/user-storage/delete-user/presenter";

interface IDeleteUserConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
}

const DeleteUserConfirm: React.FC<IDeleteUserConfirmProps> = ({ isOpen, onClose, userId }) => {
    const buttonsSize = "h-[52px]";
    const { handleDeleteUser } = useDeleteUserPresenter(onClose);

    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите удалить пользователя?</p>
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
                        onClick={() => handleDeleteUser(userId)}
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteUserConfirm;
