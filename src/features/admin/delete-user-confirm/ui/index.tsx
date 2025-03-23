import React from 'react';
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";

interface IDeleteUserConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteUserConfirm: React.FC<IDeleteUserConfirmProps> = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) return null;
    return (
        <Modal title="Удалить" className="w-[655px]" onClose={onClose}>
            <div>
                <p className='text-xl'>
                    Вы уверены, что хотите удалить пользователя?
                </p>
                <div className="text-center mt-[40px]">
                    <Button onClick={onDelete} className="w-[190px] h-[52px]">
                        Удалить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteUserConfirm;
