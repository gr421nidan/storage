import {IGetStorageFileDto} from "@/shared/interface/files";

interface IGetStorageFolderDto {
    id: string;
    title: string;
    size: number;
}
interface ICreateStorageFolderDto {
    id: string,
    title: string,
    created_at: string,
    is_deleted: boolean,
    parent_folder_id: string | null,
    is_restricted: false,
    tag_id: string | null,
    storage_id: string,
    owner_id: string,
    deleted_at: string | null,
}
interface IActionFolderDto {
    message: string,
}
interface IGetFolderDto {
    files: IGetStorageFileDto[],
    folders: IGetStorageFolderDto[]
}
export type {IGetStorageFolderDto, ICreateStorageFolderDto, IActionFolderDto, IGetFolderDto};