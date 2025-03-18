import {EGrantID} from "@/shared/type/admin";

interface IUpdateUserPort {
    grant_id: EGrantID;
}
interface IUpdateUserDto {
    message: string;
}
export type {IUpdateUserDto, IUpdateUserPort}