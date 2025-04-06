import {EGrantID} from "@/shared/enum/admin";

interface IGetUserDto {
    id: string
    img: string | null;
    surname: string;
    firstname: string;
    patronymic: string | null;
    grant_id: number;
    is_active: boolean;
}

interface IGetUsersParams {
    search?: string;
    grant_id?: EGrantID;
    is_active?: boolean;
}

export type {IGetUserDto, IGetUsersParams};