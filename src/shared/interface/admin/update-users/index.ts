import {EGrantID} from "@/shared/type/admin";

interface IUpdateUsersPort {
    grant_id: EGrantID;
}

interface IUpdateUsersDto {
    message: string;
}

export type {IUpdateUsersDto, IUpdateUsersPort}