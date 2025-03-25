import {ERoleID} from "@/shared/emum/auth";

interface ISignUpPort {
    firstname: string,
    surname: string;
    password: string;
    email: string;
    role_id: ERoleID
}

interface ISignUpDto {
    accessToken: string;
    id: number;
}

interface IApiErrorDto {
    message?: string;
    type?: string;
    property?: string;
}

export type {ISignUpPort, ISignUpDto, IApiErrorDto}