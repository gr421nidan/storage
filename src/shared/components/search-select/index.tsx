// Обновленный интерфейс для SearchSelect
import React from "react";
import AsyncSelect from "react-select/async";
import { IGetAllUsersDto } from "@/shared/interface/admin"; // Подключаем IGetAllUsersDto

interface ISearchSelectProps {
    value: IGetAllUsersDto | null;
    onChange: (selectedOption: IGetAllUsersDto | null) => void;
    loadOptions: (inputValue: string) => Promise<IGetAllUsersDto[]>; // Функция для загрузки пользователей
    placeholder?: string;
    isSearchable?: boolean;  // Добавлено свойство isSearchable
    onInputChange?: (inputValue: string) => void; // Добавлено свойство onInputChange
}

const SearchSelect: React.FC<ISearchSelectProps> = ({ value, onChange, loadOptions, placeholder, isSearchable = true, onInputChange }) => {
    return (
        <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isSearchable={isSearchable}  // Используем переданное свойство isSearchable
            onInputChange={onInputChange} // Передаем onInputChange в AsyncSelect
            getOptionLabel={(e: IGetAllUsersDto) => e.email} // Используем email пользователя как label
            getOptionValue={(e: IGetAllUsersDto) => e.id}  // Используем id пользователя как value
            styles={{
                control: (provided) => ({
                    ...provided,
                    minHeight: "52px",
                    fontSize: "16px",
                }),
            }}
        />
    );
};

export default SearchSelect;
