import {ETypeLog} from "@/shared/enum/admin";

interface IFiltersLogsPort {
    search?: string;
    type?: ETypeLog;
    dateFrom?: string;
    dateTo?:string;
}
export type {IFiltersLogsPort}