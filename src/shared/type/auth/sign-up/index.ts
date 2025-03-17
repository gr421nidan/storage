export enum ERoleID {
    ADMIN = 1,
    USER = 0,
}

interface ISignUpPort {
    firstname: string,
    surname: string;
    password: string;
    email: string;
    role_id: ERoleID
}

type IFormData = ISignUpPort;

interface ISignUpDto {
    accessToken: string;
    id: number;
}

interface IApiErrorDto {
    message?: string;
    type?: string;
    property?: string;
}

export type {ISignUpPort, IFormData, ISignUpDto, IApiErrorDto}