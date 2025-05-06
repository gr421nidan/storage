import {IGetStorageFileDto} from "@/shared/interface/files";
import {IGetStorageFolderDto} from "@/shared/interface/folders";
import {EGrantID} from "@/shared/enum/admin";
import {IBackupDto} from "@/shared/interface/backup";

interface IGetStorageSizeDto {
    usedSpace: number;
    freeSpace: number;
    totalStorage: number;
}

interface IGetFilesAndFoldersDto {
    files: IGetStorageFileDto[],
    folders: IGetStorageFolderDto[],
    backups:IBackupDto[],
}

interface IGetStorageDto {
    id: string;
    title: string;
    storage_size: number | null;
    grant_id: EGrantID;
}

interface IGetAvailableStoragesDto {
    storages:IGetStorageDto[];
}

interface ICleanupDiskDto {
    message:string;
}
interface IConnectStorageS3Dto{
    message:string;
}

export type { IGetStorageSizeDto, IGetFilesAndFoldersDto, IGetStorageDto, IGetAvailableStoragesDto, ICleanupDiskDto, IConnectStorageS3Dto};