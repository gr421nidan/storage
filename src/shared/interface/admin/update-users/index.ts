import {EGrantID} from "@/shared/emum/admin";

interface IUpdateUsersPort {
    grant_id: EGrantID;
}

interface IUpdateUsersDto {
    message: string;
}

export type {IUpdateUsersDto, IUpdateUsersPort}