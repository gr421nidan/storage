import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { buttonsContainerStyle } from "@/features/admin/delete-user-confirm/style.ts";
import useCleanupBackupsPresenter from "@/entities/cases/backup/cleanup/presenter";

interface ICleanupBackupsConfirmProps {
    isOpen: boolean;
    onClose: () => void;
}

const CleanupBackupsConfirm: React.FC<ICleanupBackupsConfirmProps> = ({ isOpen, onClose}) => {
    const buttonsSize = "h-[52px]";
    const { handleCleanupBackups } = useCleanupBackupsPresenter(onClose);

    if (!isOpen) return null;

    return (
        <Modal title="Очистить список" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены, что хотите очистить список резервных копий?</p>
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
                        onClick={() => handleCleanupBackups()}
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default CleanupBackupsConfirm;
