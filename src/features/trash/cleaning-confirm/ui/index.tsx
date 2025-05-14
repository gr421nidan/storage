import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import  styles  from "@/features/storage/confirm_disk_cleanup/style";
import useCleaningTrashPresenter from "@/entities/cases/storage/trash/cleaning/presenter";
import {IConfirmModalProps} from "@/shared/interface/modal";

const CleaningTrashConfirm: React.FC<IConfirmModalProps> = ({ isOpen, onClose}) => {
    const { handleCleaningTrash } = useCleaningTrashPresenter(onClose);

    if (!isOpen) return null;
    const handleCleaning = () => handleCleaningTrash();
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
