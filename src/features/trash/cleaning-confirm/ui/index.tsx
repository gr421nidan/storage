import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";;
import  styles  from "@/features/files/move-to-trash-confirm/style";
import useCleaningTrashPresenter from "@/entities/cases/storage/trash/cleaning/presenter";

interface ICleaningConfirmProps {
    isOpen: boolean;
    onClose: () => void;
}

const CleaningTrashConfirm: React.FC<ICleaningConfirmProps> = ({ isOpen, onClose}) => {
    const { handleCleaningTrash } = useCleaningTrashPresenter(onClose);
    const handleCleaning = () => handleCleaningTrash();
    if (!isOpen) return null;

    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className="text-xl">Вы уверены в безвозвратной очистке корзины?</p>
                <div className={styles.buttonsContainer}>
                    <Button
                        className={cn(buttonStyles({ variant: "baseSecondary" }), styles.buttonCancel)}
                        onClick={onClose}>
                        Отменить
                    </Button>
                    <Button type="button" className="w-[202px] h-13"
                        onClick={handleCleaning}>
                        Очистить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default CleaningTrashConfirm;
