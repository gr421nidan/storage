import { useState, useEffect, ReactNode } from "react";
import useAddUserPresenter from "@/entities/cases/user-storage/add-user/presenter";
import { EGrantID } from "@/shared/enum/admin";
import Button from "@/shared/components/buttons/button";
import { errorTextStyles } from "@/features/auth/style";
import { formStyles } from "../style";
import CustomSelect from "@/shared/components/select";
import SearchSelect from "@/shared/components/search-select";
import { IGetAllUsersDto } from "@/shared/interface/admin";
import useGetAllUsersUseCase from "@/entities/cases/user/get-all-users/use-case";
import debounce from "lodash/debounce";
import { Controller } from "react-hook-form";

const AddUserForm = (): ReactNode => {
    const timeDebounce = 500;
    const { onSubmit, form } = useAddUserPresenter();
    const { setValue, formState: { errors } } = form;
    const [inputValue, setInputValue] = useState<string>("");
    const [debouncedValue, setDebouncedValue] = useState<string>("");

    useEffect(() => {
        const handler = debounce((value: string) => {
            setDebouncedValue(value);
        }, timeDebounce);

        handler(inputValue);

        return () => {
            handler.cancel();
        };
    }, [inputValue]);

    const { data: users } = useGetAllUsersUseCase({ email: debouncedValue });

    const userOptions = (users ?? []).map((user: IGetAllUsersDto) => ({
        value: user.id,
        label: user.email,
    }));

    const grantOptions = [
        { value: EGrantID.VIEW, label: "Просмотр" },
        { value: EGrantID.FULL_ACCESS, label: "Полный доступ" },
    ];
    const handleUserChange = (selectedUser: { value: string } | null) => {
        setValue("user_id", selectedUser?.value || "");
    };
    const handleInputChange = (value: string) => {
        setInputValue(value);
    };
    const handleGrantChange = (val: EGrantID) => {
        setValue("grant_id", val);
    };
    return (
        <form onSubmit={onSubmit} className={formStyles}>
            <h3>Добавление учетной записи</h3>
            <div className="flex justify-between gap-[12px]">
                <div>
                    <Controller
                        name="user_id"
                        control={form.control}
                        render={({ field }) => (
                            <SearchSelect
                                {...field}
                                placeholder="Почта"
                                className="w-[696px]"
                                options={userOptions}
                                onInputChange={handleInputChange}
                                onChange={handleUserChange}
                            />
                        )}
                    />
                    {errors.user_id && (
                        <p className={errorTextStyles()}>{errors.user_id.message}</p>
                    )}
                </div>

                <div>
                    <Controller
                        name="grant_id"
                        control={form.control}
                        render={({ field }) => (
                            <CustomSelect
                                {...field}
                                options={grantOptions}
                                className="h-[52px] w-[248px]"
                                defaultLabel="Права"
                                isError={!!errors.grant_id}
                                onChange={handleGrantChange}
                            />
                        )}
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
