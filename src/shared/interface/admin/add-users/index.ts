import {EGrantID} from "@/shared/enum/admin";

interface IAddUserPort {
    user_id: string;
    grant_id: EGrantID;
}

export type {IAddUserPort}