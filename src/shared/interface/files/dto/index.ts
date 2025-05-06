import {EFileType} from "@/shared/enum/file-types";

interface IGetStorageFileDto {
    id: string;
    title: string;
    type: EFileType;
    size: number;
    created_at: string;
    update_at: string | null;
    path: string;
}

interface IGetTrashFileDto extends IGetStorageFileDto {
    deleted_at: string;
}
interface IUploadStorageFileDto extends IGetStorageFileDto{
    folder_id: string;
    deleted_at: string | null;
    is_deleted: boolean;
    owner_id: string;
    storage_id: string;
}
interface IActionFileDto {
    message: string,
}
type IGuestGetFileDto = IGetStorageFileDto

export type {IGetStorageFileDto, IGetTrashFileDto, IUploadStorageFileDto, IActionFileDto, IGuestGetFileDto};