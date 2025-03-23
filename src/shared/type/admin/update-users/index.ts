import {EGrantID} from "@/shared/type/admin";

interface IUpdateUsersPort {
    grant_id: EGrantID;
}

type IFormUpdateUsersData = IUpdateUsersPort;

interface IUpdateUsersDto {
    message: string;
}

export type {IUpdateUsersDto, IUpdateUsersPort, IFormUpdateUsersData}