import React from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { cn } from "@/shared/utils/cn";
import useUpdateUserPhotoPresenter from "@/entities/cases/user/update-user-photo/presenter";
import {
    fileInputContainerStyle,
    fileNameStyle,
    buttonsContainerStyle,
    cancelButtonStyle,
    saveButtonStyle,
    labelButtonStyle, formContainerStyle, formWrapperStyle
} from "../style";

interface IUserPhotoUploadProps {
    isOpen: boolean;
    onClose: () => void;
}

const UserPhotoUploadForm: React.FC<IUserPhotoUploadProps> = ({ isOpen, onClose }) => {
    const { register, onSubmit, handleFileChange, fileName } = useUpdateUserPhotoPresenter({
        onClose,
    });

    if (!isOpen) return null;

    return (
        <Modal className="w-[655px]" title="Изменить фото" onClose={onClose}>
            <form onSubmit={onSubmit} className={formContainerStyle}>
                <div className={formWrapperStyle}>
                    <label
                        className={cn(
                            buttonStyles({ variant: "baseSecondary" }),
                            labelButtonStyle
                        )}>
                        Выберите файл
                        <input
                            type="file"
                            className="hidden"
                            {...register("file")}
                            onChange={handleFileChange}
                        />
                    </label>

                    <div className={fileInputContainerStyle}>
                        <span className={fileNameStyle}>
                            {fileName || ""}
                        </span>
                    </div>
                </div>
                <div className={buttonsContainerStyle}>
                    <Button className={cn(buttonStyles({ variant: "baseSecondary" }), cancelButtonStyle)} onClick={onClose}>Отменить</Button>
                    <Button
                        type="submit"
                        disabled={!fileName}
                        className={saveButtonStyle}>
                        Сохранить
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default UserPhotoUploadForm;
