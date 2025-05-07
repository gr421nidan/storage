import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { buttonsContainerStyle } from "@/features/admin/delete-user-confirm/style.ts";
import useDeleteUserLogsPresenter from "@/entities/cases/logs-user/delete-user-logs/presenter";

interface IDeleteLogsUserConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
}

const DeleteLogsUserConfirm: React.FC<IDeleteLogsUserConfirmProps> = ({ isOpen, onClose, userId }) => {
    const buttonsSize = "h-[52px]";
    const { handleDeleteUserLogs } = useDeleteUserLogsPresenter(onClose);

    if (!isOpen) return null;

    return (
        <Modal title="Очистить историю" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите очистить историю?</p>
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
                        onClick={() => handleDeleteUserLogs(userId)}
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteLogsUserConfirm;
