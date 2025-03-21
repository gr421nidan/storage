import React, {useState} from "react";
import useAddUserPresenter from "@/entities/cases/user-storage/add-user/presenter";
import {EGrantID} from "@/shared/type/admin";
import {cn} from "@/shared/utils/cn";
import Button from "@/shared/components/buttons/button";

import {errorTextStyles} from "@/features/auth/style";
import {formStyles} from "@/features/admin/add-users-form/style";
import CustomSelect from "@/shared/components/select";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import useGetAllUsersUseCase from "@/entities/cases/user/get-all-users/use-case";
import SearchSelect from "@/shared/components/search-select";

const AddUserForm: React.FC = () => {
    const {
        onSubmit,
        errors,
        watch,
        setValue,
    } = useAddUserPresenter();
    const { data: users} = useGetAllUsersUseCase();

    const grantOptions = [
        { value: EGrantID.VIEW, label: "Просмотр" },
        { value: EGrantID.FULL_ACCESS, label: "Полный доступ" },
    ];

    const [selectedEmail, setSelectedEmail] = useState<any>(null);

    const userOptions = users?.map((user: any) => ({
        value: user.id,
        label: user.email,
    })) || [];

    // Обработчик выбора почты
    const handleEmailChange = (selectedOption: any) => {
        setSelectedEmail(selectedOption); // Обновляем состояние выбранного значения
        setValue("user_id", selectedOption?.value); // Обновляем значение email в форме
    };

    return (
        <form onSubmit={onSubmit}
              className={formStyles}>
            <h3>Добавление учетной записи</h3>
            <div className="flex justify-between gap-[12px]">
                <div>
                    <SearchSelect
                        options={userOptions} // Передаем данные с почтами
                        value={selectedEmail} // Отображаем выбранное значение
                        onChange={handleEmailChange} // Обрабатываем изменения почты
                        placeholder="Почта"
                        className={ "h-[52px] w-[696px] text-xl"}
                    />
                    {errors.user_id && (
                        <p className={errorTextStyles()}>{errors.user_id.message}</p>
                    )}
                </div>
                <div>
                    <CustomSelect
                        options={grantOptions}
                        value={watch("grant_id")}
                        onChange={(val) => setValue("grant_id", val as EGrantID)}
                        className="h-[52px] w-[248px]"
                        isError={!!errors.grant_id}
                        defaultLabel="Права"
                    />
                    {errors.grant_id && (
                        <p className={errorTextStyles()}>{errors.grant_id.message}</p>
                    )}
                </div>
                <Button type="submit" className={cn(buttonStyles({ variant: "two" }),"h-[52px] w-[273px]")}>Сохранить</Button>
            </div>
        </form>
    );
};

export default AddUserForm;
