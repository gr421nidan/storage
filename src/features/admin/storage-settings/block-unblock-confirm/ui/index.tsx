import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { buttonsContainerStyle } from "@/features/admin/delete-user-confirm/style.ts";
import useBlockUnblockStoragePresenter from "@/entities/cases/storage/block-unblock-storage/presenter";

interface IBlockUnblockConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    isActive?: boolean;
}

const BlockUnblockConfirm: React.FC<IBlockUnblockConfirmProps> = ({ isOpen, onClose, isActive }) => {
    const buttonsSize = "h-[52px]";
    const { handleBlockUnblockStorage } = useBlockUnblockStoragePresenter(onClose);

    if (!isOpen) return null;

    const handleConfirm = () => {
        handleBlockUnblockStorage({ is_active: !isActive });
    };

    return (
        <Modal title={isActive ? "Заблокировать" : "Разблокировать"} className="w-[655px]" onClose={onClose}>
            <p className="text-xl">
                Вы уверены, что хотите {isActive ? "заблокировать" : "разблокировать"} хранилище?
            </p>
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
                    onClick={handleConfirm}>
                    Подтвердить
                </Button>
            </div>
        </Modal>
    );
};

export default BlockUnblockConfirm;
