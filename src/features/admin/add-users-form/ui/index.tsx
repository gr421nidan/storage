import React, { useState } from "react";
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
    const { onSubmit, errors, watch, setValue } = useAddUserPresenter();
    const [selectedEmail, setSelectedEmail] = useState<IGetAllUsersDto | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Обработчик выбора пользователя
    const handleEmailChange = (selectedOption: IGetAllUsersDto | null) => {
        setSelectedEmail(selectedOption);
        setValue("user_id", selectedOption?.id || ""); // Используем id пользователя
    };

    // Опции для прав пользователя
    const grantOptions = [
        { value: EGrantID.VIEW, label: "Просмотр" },
        { value: EGrantID.FULL_ACCESS, label: "Полный доступ" },
    ];

    // Используем хук для поиска пользователей с параметром query
    const { data: users } = useGetAllUsersUseCase(searchQuery);

    // Обработчик для изменения текста в поле поиска
    const handleSearchChange = (inputValue: string) => {
        setSearchQuery(inputValue); // Устанавливаем новый текст запроса
    };

    // Функция для загрузки пользователей на основе поиска
    const loadUsers = async (inputValue: string): Promise<IGetAllUsersDto[]> => {
        if (!inputValue) return []; // Если ничего не введено, возвращаем пустой список
        const filteredUsers = users.filter(user => user.email.includes(inputValue)); // Фильтруем пользователей по email
        return filteredUsers;
    };

    return (
        <form onSubmit={onSubmit} className={formStyles}>
            <h3>Добавление учетной записи</h3>
            <div className="flex justify-between gap-[12px]">
                <div>
                    <SearchSelect
                        value={selectedEmail}
                        onChange={handleEmailChange}
                        loadOptions={loadUsers}  // Передаем функцию для загрузки пользователей
                        placeholder="Введите email"
                        isSearchable
                        onInputChange={handleSearchChange}  // Изменение запроса при вводе
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
                <Button type="submit" className="h-[52px] w-[273px]">
                    Сохранить
                </Button>
            </div>
        </form>
    );
};

export default AddUserForm;
