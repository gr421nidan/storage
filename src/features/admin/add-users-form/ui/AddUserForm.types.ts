import { EGrantID } from "@/shared/emum/admin";

export interface IAddUserFormValues {
    user_id: string;
    grant_id: EGrantID;
}

export interface IFieldError {
    message: string;
}

export interface IErrors {
    user_id?: IFieldError;
    grant_id?: IFieldError;
}

// Тип для пользователя (возвращается из useGetAllUsersUseCase)
export interface IUser {
    id: string;
    email: string;
}

// Тип для опции селекта (используется в SearchSelect и CustomSelect)
export interface IOption {
    value: EGrantID;
    label: string;
}
