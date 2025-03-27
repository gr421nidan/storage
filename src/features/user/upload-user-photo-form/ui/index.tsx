import React from "react";
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
    const { register, onSubmit, errors, handleFileChange, fileName } = useUpdateUserPhotoPresenter({
        onClose,
    });

    if (!isOpen) return null;

    return (
        <Modal className="w-[655px]" title="Изменить фото" onClose={onClose}>
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <div className="flex items-center gap-4 justify-center">
                    <label
                        className={cn(
                            buttonStyles({ variant: "baseSecondary" }),
                            "w-[275px] h-[52px] flex items-center justify-center")}>
                        Выберите файл
                        <input
                            type="file"
                            className="hidden"
                            {...register("file")}
                            onChange={handleFileChange}
                        />
                    </label>

                    <div className="w-[296px] h-[52px] flex items-center justify-between border-2 border-purple dark:bg-white/17 dark:border-purple-light rounded-[20px] px-4">
            <span className="text-xl dark:text-white">
              {fileName || ""}
            </span>
                    </div>
                </div>
                {errors.file && (
                    <div className="text-red-500 text-center">
                        {errors.file.message}
                    </div>
                )}
                <div className="mt-[40px] flex justify-center gap-[104px] w-full">
                    <Button className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[206px] h-13" )} onClick={onClose}>Отменить</Button>
                    <Button
                        type="submit"
                        className={"w-[274px] h-[52px]"}>
                        Сохранить
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default UserPhotoUploadForm;