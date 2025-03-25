import {EGrantID} from "@/shared/emum/admin";

interface IAddUserPort {
    user_id: string;
    grant_id: EGrantID;
}

interface IAddUserDto {
    message: string;
}

export type {IAddUserPort, IAddUserDto}