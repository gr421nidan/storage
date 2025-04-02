import {IGetStorageFileDto} from "@/shared/interface/files";
import {IGetStorageFolderDto} from "@/shared/interface/folders";

interface IGetStorageSizeDto {
    usedSpace: number;
    freeSpace: number;
    totalStorage: number;
}

interface IGetFilesAndFoldersDto {
    files: IGetStorageFileDto[],
    folders: IGetStorageFolderDto[]
}

export type { IGetStorageSizeDto, IGetFilesAndFoldersDto };