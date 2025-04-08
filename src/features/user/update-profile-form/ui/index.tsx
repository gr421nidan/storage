import {ReactNode, useState} from "react";
import {formStyles, inputWrapperStyles} from "../style";
import Input from "@/shared/components/inputs/base-input";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import {errorTextStyles} from "@/features/auth/style.ts";
import useUpdateUserPresenter from "@/entities/cases/user/update-user-profile/presenter";
import Button from "@/shared/components/buttons/button";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import {IFieldProfile, IUpdateUserPort} from "@/shared/interface/user";
import ChangePasswordForm from "@/features/user/change-password-form/ui";

const UserProfileForm = (): ReactNode => {
    const {data: userProfile} = useGetUserProfileUseCase();
    const {register, onSubmit, errors} = useUpdateUserPresenter();
    const [isModalOpen, setModalOpen] = useState(false);
    const inputSize = "h-[54px] w-[535px]"
    const fields: IFieldProfile[] = [
        {name: "firstname", placeholder: "Имя...", value: userProfile?.firstname},
        {name: "surname", placeholder: "Фамилия...", value: userProfile?.surname},
        {name: "patronymic", placeholder: "Отчество...", value: userProfile?.patronymic},
        {name: "phone", placeholder: "Телефон...", value: userProfile?.phone}
    ];
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const isError = (field: keyof IUpdateUserPort): boolean => !!errors[field];
    return (
        <div>
            <form className={formStyles} onSubmit={onSubmit}>
                <div className={inputWrapperStyles}>
                    {fields.map(({name, placeholder, value}) => (
                        <div key={name}>
                            <Input type="text" placeholder={placeholder}
                                   defaultValue={value ?? ""}
                                   className={cn(inputsStyles({error: isError(name)}), inputSize)}
                                   {...register(name)}/>
                            {errors[name] && <p className={errorTextStyles()}>{errors[name].message}</p>}
                        </div>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Button type="button" className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[294px] h-13" )} onClick={handleModalOpen}>
                        Изменить пароль
                    </Button>
                    <Button type="submit" className="w-[217px] h-13">Сохранить</Button>
                </div>
            </form>
            <ChangePasswordForm isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
    );
};

export default UserProfileForm;