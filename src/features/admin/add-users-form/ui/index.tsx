import React, { useState, useEffect } from "react";
import useAddUserPresenter from "@/entities/cases/user-storage/add-user/presenter";
import { EGrantID } from "@/shared/emum/admin";
import Button from "@/shared/components/buttons/button";
import { errorTextStyles } from "@/features/auth/style";
import { formStyles } from "@/features/admin/add-users-form/style";
import CustomSelect from "@/shared/components/select";
import SearchSelect from "@/shared/components/search-select";
import { IGetAllUsersDto } from "@/shared/interface/admin";
import useGetAllUsersUseCase from "@/entities/cases/user/get-all-users/use-case";

const AddUserForm: React.FC = () => {
    const { onSubmit, errors, watch, setValue} = useAddUserPresenter();
    const [inputValue, setInputValue] = useState<string>("");
    const [debouncedValue, setDebouncedValue] = useState<string>("");
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);
        return () => clearTimeout(handler);
    }, [inputValue]);

    const { data: users = []} = useGetAllUsersUseCase(debouncedValue);

    const userOptions = users.map((user: IGetAllUsersDto) => ({
        value: user.id,
        label: user.email,
    }));

    const grantOptions = [
        { value: EGrantID.VIEW, label: "Просмотр" },
        { value: EGrantID.FULL_ACCESS, label: "Полный доступ" },
    ];
    const grantValue = watch("grant_id") ?? "";
    return (
        <form onSubmit={onSubmit} className={formStyles}>
            <h3>Добавление учетной записи</h3>
            <div className="flex justify-between gap-[12px]">
                <div>
                    <SearchSelect
                        placeholder="Почта"
                        className="w-[696px]"
                        options={userOptions}
                        onChange={(selectedUser) => setValue("user_id", selectedUser?.value || "")}
                        onInputChange={(value) => setInputValue(value)}
                    />
                    {errors.user_id && (
                        <p className={errorTextStyles()}>{errors.user_id.message}</p>
                    )}
                </div>

                <div>
                    <CustomSelect
                        options={grantOptions}
                        value={grantValue}
                        onChange={(val) => setValue("grant_id", val as EGrantID)}
                        className="h-[52px] w-[248px]"
                        isError={!!errors.grant_id}
                        defaultLabel="Права"
                    />
                    {errors.grant_id && (
                        <p className={errorTextStyles()}>{errors.grant_id.message}</p>
                    )}
                </div>

                <Button type="submit" className="h-[52px] w-[273px]">
                    Сохранить
                </Button>
            </div>
        </form>
    );
};

export default AddUserForm;
