import {IGetStorageFileDto, IGetStorageFolderDto} from "@/shared/interface/storage";

interface IGetFilesAndFoldersDto {
    files: IGetStorageFileDto[],
    folders: IGetStorageFolderDto[]
}

export type {IGetFilesAndFoldersDto};