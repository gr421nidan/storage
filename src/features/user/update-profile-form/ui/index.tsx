import React, {useState} from "react";
import {formStyles} from "@/features/user/update-profile-form/style.ts";
import Input from "@/shared/components/inputs/base-input";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import {errorTextStyles} from "@/features/auth/style.ts";
import useUpdateUserPresenter from "@/entities/cases/user/update-user-profile/presenter";
import Button from "@/shared/components/buttons/button";
import {IFormUpdateUserData, IUpdateUserPort} from "@/shared/type/user";
import ChangePasswordForm from "@/features/user/change-password-form/ui";

const UserProfileForm: React.FC = () => {
    const {data: userProfile} = useGetUserProfileUseCase();
    const {register, onSubmit, errors} = useUpdateUserPresenter();
    const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
    const inputSize = "h-[54px] w-[535px]"

    const fields: { name: keyof IUpdateUserPort; placeholder: string; value: string | undefined }[] = [
        {name: "firstname", placeholder: "Имя...", value: userProfile?.firstname},
        {name: "surname", placeholder: "Фамилия...", value: userProfile?.surname},
        {name: "patronymic", placeholder: "Отчество...", value: userProfile?.patronymic},
        {name: "phone", placeholder: "Телефон...", value: userProfile?.phone}
    ];
    const isError = (field: keyof IFormUpdateUserData): boolean => !!errors[field];
    return (
        <div>
            <form className={formStyles} onSubmit={onSubmit}>
                <div className="flex flex-col gap-[32px]">
                    {fields.map(({name, placeholder, value}) => (
                        <div key={name}>
                            <Input type="text" placeholder={value || placeholder}
                                   className={cn(inputsStyles({error: isError(name)}), inputSize)}
                                   {...register(name)}/>
                            {errors[name] && <p className={errorTextStyles()}>{errors[name].message}</p>}
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 mt-4">
                    <Button type="button" className="w-[294px] h-[52px]" onClick={() => setPasswordModalOpen(true)}>
                        Изменить пароль
                    </Button>
                    <Button type="submit" className="w-[217px] h-[52px]">Сохранить</Button>
                </div>
            </form>
            <ChangePasswordForm isOpen={isPasswordModalOpen} onClose={() => setPasswordModalOpen(false)} />
        </div>
    );
};

export default UserProfileForm;
