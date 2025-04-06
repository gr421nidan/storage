import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import Input from "@/shared/components/inputs/base-input";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import useCreateFolderPresenter from "@/entities/cases/storage/folders/create/presenter";
import {errorTextStyles} from "@/features/auth/style.ts";

interface ICreateFolderModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentFolder?: string;
}

const CreateFolderModal: React.FC<ICreateFolderModalProps> = ({isOpen, onClose, currentFolder}) => {
    const {register, onSubmit, errors} = useCreateFolderPresenter(currentFolder, onClose);

    if (!isOpen) return null;

    return (
        <Modal title="Создать папку" className="w-[655px]" onClose={onClose}>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-[43px]">
                    <Input type="text"
                           className="w-[589px] h-[52px]"
                           placeholder="Название новой папки"
                           {...register("title")}
                    />
                    {errors.title && (
                        <p className={errorTextStyles()}>{errors.title.message}</p>
                    )}
                    <div className="flex justify-between">
                        <Button className={cn(buttonStyles({variant: "baseSecondary"}), "w-[206px] h-[52px]")}
                                onClick={onClose}>
                            Отменить
                        </Button>
                        <Button className="w-[217px] h-[52px]" type="submit">
                            Сохранить
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default CreateFolderModal;
