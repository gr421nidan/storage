import {ISortField, ISortOrder} from "@/shared/type/files/sorting";

interface IUploadFilePort {
    file: File[];
    folderId?: string;
}
interface IFiltersPort {
    type?: string[];
    date?: Date | null;
}

interface ISortingPort {
    sort_by: ISortField;
    sort_order: ISortOrder;
}
export type {IUploadFilePort, IFiltersPort, ISortingPort};