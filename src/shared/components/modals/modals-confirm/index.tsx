import React from 'react';
import { Dialog } from '@headlessui/react';
import Button from "@/shared/components/buttons/button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}

const ConfirmModal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex justify-center items-center ">
            <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-96">
                <Dialog.Title className="text-xl font-semibold">{title}</Dialog.Title>
                <Dialog.Description className="mt-2">{message}</Dialog.Description>
                <div className="mt-4 flex justify-between">
                    <Button onClick={onClose}> Отмена</Button>
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        onClick={onConfirm}>
                        Подтвердить
                    </button>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default ConfirmModal;
