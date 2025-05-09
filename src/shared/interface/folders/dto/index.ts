import {IGetStorageFileDto} from "@/shared/interface/files";
import {IGetAllUsersDto} from "@/shared/interface/admin";

interface IGetStorageFolderDto {
    id: string;
    title: string;
    size: number;
    parent_folder_id: string | null,
    is_restricted: false,
}

interface ICreateStorageFolderDto {
    id: string,
    title: string,
    created_at: string,
    is_deleted: boolean,
    parent_folder_id: string | null,
    is_restricted: false,
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

interface IGetUsersWithAccessDto {
    users: IGetAllUsersDto[],
}

interface IGetTrashFolderDto extends IGetStorageFolderDto {
    deleted_at: string,
}

interface IDownloadFolderDto {
    folder_id: string,
    folder_name: string,
}

type IGetAvailableFolderDto = IGetStorageFolderDto

export type {
    IGetStorageFolderDto,
    ICreateStorageFolderDto,
    IActionFolderDto,
    IGetFolderDto,
    IGetTrashFolderDto,
    IGetUsersWithAccessDto,
    IDownloadFolderDto,
    IGetAvailableFolderDto
};