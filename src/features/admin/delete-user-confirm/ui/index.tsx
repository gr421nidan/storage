import React from 'react';
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import {buttonsContainerStyle} from "../style";

interface IDeleteUserConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteUserConfirm: React.FC<IDeleteUserConfirmProps> = ({ isOpen, onClose, onDelete }) => {
    const buttonsSize ="h-[52px]"
    if (!isOpen) return null;
    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className='text-xl'>
                    Вы уверены, что хотите удалить пользователя?
                </p>
                <div className={buttonsContainerStyle}>
                    <Button type="submit" className={`w-[217px] ${buttonsSize}`} onClick={onDelete}>Удалить</Button>
                    <Button className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[206px]", buttonsSize )} onClick={onClose}>Отмена</Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteUserConfirm;
