import {ETypeLog} from "@/shared/enum/admin";

interface IUserLogs {
    id: string;
    surname: string;
    firstname: string;
    patronymic: string | null;
    img: string | null;
}

interface ILogs {
    id: string;
    date_time: string;
    type_logs_id: ETypeLog;
    is_successful: boolean;
    file_title: string | null;
    folder_title: string | null;
}

interface IGetStorageUserLogDto {
    user: IUserLogs;
    logs: ILogs[];
}

export type {IGetStorageUserLogDto, IUserLogs, ILogs};
