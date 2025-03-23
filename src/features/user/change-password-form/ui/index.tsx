import React from "react";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import Modal from "@/shared/components/modals";
import {errorTextStyles} from "@/features/auth/style.ts";
import useChangePasswordPresenter from "@/entities/cases/user/change-password/presenter";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import {IFormPasswordChangeData} from "@/shared/type/user";

interface IChangePasswordProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChangePasswordForm: React.FC<IChangePasswordProps> = ({isOpen, onClose}) => {
    const {register, onSubmit, errors} = useChangePasswordPresenter();
    const inputSize ="w-[474px] h-[54px]"
    const isError = (field: keyof IFormPasswordChangeData): boolean => !!errors[field];
    if (!isOpen) return null;
    return (
        <Modal className="w-[655px]" title="Сменить пароль" onClose={onClose}>
            <form onSubmit={onSubmit} className="flex flex-col gap-6 items-center">
                <div>
                    <Input
                        type="password"
                        placeholder="Текущий пароль*"
                        className={cn(inputsStyles({error: isError("oldPassword")}), inputSize)}
                        {...register("oldPassword")}
                    />
                    {errors.oldPassword && <p className={errorTextStyles()}>{errors.oldPassword.message}</p>}
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder="Новый пароль*"
                        className={cn(inputsStyles({error: isError("newPassword")}), inputSize)}
                        {...register("newPassword")}
                    />
                    {errors.newPassword && <p className={errorTextStyles()}>{errors.newPassword.message}</p>}
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder="Повтор пароля*"
                        className={cn(inputsStyles({error: isError("passwordRepeater")}), inputSize)}
                        {...register("passwordRepeater")}
                    />
                    {errors.passwordRepeater && <p className={errorTextStyles()}>{errors.passwordRepeater.message}</p>}
                </div>
                <div className="text-center mt-[40px]">
                    <Button type="submit" className="w-[217px] h-[52px]">Сохранить</Button>
                </div>
            </form>
        </Modal>
    );
};

export default ChangePasswordForm;
