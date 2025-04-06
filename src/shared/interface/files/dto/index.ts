import {EFileType} from "@/shared/enum/file-types";

interface IGetStorageFileDto {
    id: string;
    title: string;
    type: EFileType;
    size: number;
    created_at:string;
    update_at: string | null;
    path: string;
    tag_title: string | null;
}
interface IGetTrashFileDto extends IGetStorageFileDto {
    deleted_at: string;
}

interface IUploadStorageFileDto {
    id: string;
    folder_id: string;
    title: string;
    type: EFileType;
    created_at:string;
    update_at: string | null;
    deleted_at: string | null;
    size: number;
    tag_id: string | null;
    is_deleted: boolean;
    owner_id:string;
    path: string;
    storage_id: string;
}
interface IActionFileDto {
    message: string,
}

export type {IGetStorageFileDto, IUploadStorageFileDto, IActionFileDto, IGetTrashFileDto};