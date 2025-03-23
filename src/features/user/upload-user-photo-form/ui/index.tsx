import React, { useState } from "react";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import { cn } from "@/shared/utils/cn";
import useUpdateUserPhotoPresenter from "@/entities/cases/user/update-user-photo/presenter";

interface IUserPhotoUploadProps {
    isOpen: boolean;
    onClose: () => void;
}

const UserPhotoUploadForm: React.FC<IUserPhotoUploadProps> = ({ isOpen, onClose }) => {
    const { register, onSubmit, errors } = useUpdateUserPhotoPresenter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    if (!isOpen) return null;

    return (
        <Modal className="w-[655px]" title="Изменить фото" onClose={onClose}>
            <form onSubmit={onSubmit} className="flex flex-col items-center gap-[40px]">
                <div className="flex gap-[19px]">
                    <label className={cn(buttonStyles({ variant: "base" }), "w-[275px] h-[52px]")}>
                        Выберите файл
                        <input
                            type="file"
                            className="hidden"
                            accept="image/jpeg, image/png, image/gif"
                            {...register("img")}
                        />
                    </label>
                    <div className="w-[296px] h-[52px] flex items-center justify-between border-2 border-purple dark:bg-white/17 dark:border-purple-light rounded-[20px] px-4">
                        <span className="text-xl dark:text-white">
                            {selectedFile ? selectedFile.name : ""}
                        </span>
                    </div>
                    {errors.img && <span className="text-red-500">{errors.img.message}</span>}
                </div>
                <Button type="submit" className="w-[275px] h-[52px]">Сохранить</Button>
            </form>
        </Modal>
    );
};

export default UserPhotoUploadForm;
