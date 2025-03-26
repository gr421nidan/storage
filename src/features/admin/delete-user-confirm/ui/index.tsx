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
                <div className="mt-[40px] flex justify-center gap-[181px] w-full">
                    <Button type="submit" className="w-[217px] h-[52px]" onClick={onDelete}>Удалить</Button>
                    <Button className="w-[206px] h-[52px]" onClick={onClose}>Отмена</Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteUserConfirm;
