import {EGrantID} from "@/shared/enum/admin";

interface IUpdateUsersPort {
    grant_id: EGrantID;
}

interface IUpdateUsersDto {
    message: string;
}

export type {IUpdateUsersDto, IUpdateUsersPort}