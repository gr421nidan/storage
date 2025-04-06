import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";;
import {buttonsContainerStyle} from "@/features/trash/folders/delete-confirm/style.ts";
import useCleaningTrashPresenter from "@/entities/cases/storage/trash/cleaning/presenter";

interface ICleaningConfirmProps {
    isOpen: boolean;
    onClose: () => void;
}

const CleaningTrashConfirm: React.FC<ICleaningConfirmProps> = ({ isOpen, onClose}) => {
    const buttonsSize = "h-[52px]";
    const { handleCleaningTrash } = useCleaningTrashPresenter(onClose);
    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены в безвозвратной очистке корзины?</p>
                <div className={buttonsContainerStyle}>
                    <Button
                        className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[206px]", buttonsSize)}
                        onClick={onClose}>
                        Отменить
                    </Button>
                    <Button
                        type="button"
                        className={`w-[202px] ${buttonsSize}`}
                        onClick={() => handleCleaningTrash()}
                    >
                        Очистить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default CleaningTrashConfirm;
