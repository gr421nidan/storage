import React, { useState } from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import Input from "@/shared/components/inputs/base-input";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";

interface ICreateFolderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateFolderModal: React.FC<ICreateFolderModalProps> = ({ isOpen, onClose}) => {
    const [folderName, setFolderName] = useState("");

    if (!isOpen) return null;

    return (
        <Modal title="Создать папку" className="w-[655px]" onClose={onClose}>
            <div className="flex flex-col gap-[43px]">
                <Input  type="text"
                        className="w-[589px] h-[52px]"
                        placeholder="Название новой папки"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                />
                <div className="flex justify-between">
                    <Button className={cn(buttonStyles({variant: "baseSecondary"}), "w-[206px] h-[52px]")} onClick={onClose}>
                        Отменить
                    </Button>
                    <Button className="w-[217px] h-[52px]">
                        Сохранить
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default CreateFolderModal;
