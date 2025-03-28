import React, {useEffect} from "react";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import Modal from "@/shared/components/modals";
import {errorTextStyles} from "@/features/auth/style.ts";
import useChangePasswordPresenter from "@/entities/cases/user/change-password/presenter";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import {IFormPasswordChangeData} from "@/shared/interface/user";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import {buttonsContainerStyle, buttonWidthCancel, buttonWidthSave, formContainerStyle} from "../style";

interface IChangePasswordProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChangePasswordForm: React.FC<IChangePasswordProps> = ({isOpen, onClose}) => {
    const {register, onSubmit, errors, reset} = useChangePasswordPresenter({
        onClose,
    });
    const inputSize = "w-[474px] h-[54px]"
    const isError = (field: keyof IFormPasswordChangeData): boolean => !!errors[field];
    const fields: { name: keyof IFormPasswordChangeData; placeholder: string }[] = [
        {name: "oldPassword", placeholder: "Текущий пароль*"},
        {name: "newPassword", placeholder: "Новый пароль*"},
        {name: "passwordRepeater", placeholder: "Повтор пароля*"},
    ];
    useEffect(() => {
        if (!isOpen) {
            reset();
        }
    }, [isOpen, reset]);
    if (!isOpen) return null;
    return (
        <Modal className="w-[655px]" title="Сменить пароль" onClose={onClose}>
            <form onSubmit={onSubmit} className={formContainerStyle}>
                {fields.map(({name, placeholder}) => (
                    <div key={name}>
                        <Input
                            type="password"
                            placeholder={placeholder}
                            className={cn(inputsStyles({error: isError(name)}), inputSize)}
                            {...register(name)}
                        />
                        {errors[name] && <p className={errorTextStyles()}>{errors[name].message}</p>}
                    </div>
                ))}
                <div className={buttonsContainerStyle}>
                    <Button className={cn(buttonStyles({ variant: "baseSecondary" }), buttonWidthCancel )} onClick={onClose}>Отменить</Button>
                    <Button type="submit" className={buttonWidthSave}>Сохранить</Button>
                </div>
            </form>
        </Modal>
    );
};

export default ChangePasswordForm;
