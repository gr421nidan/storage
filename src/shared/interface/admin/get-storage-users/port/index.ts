import {EGrantID} from "@/shared/enum/admin";

interface IGetUsersPort {
    search?: string;
    grant_id?: EGrantID;
    is_active?: boolean;
}

export type {IGetUsersPort};