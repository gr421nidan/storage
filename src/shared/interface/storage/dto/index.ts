import {IGetStorageFileDto} from "@/shared/interface/files";
import {IGetStorageFolderDto} from "@/shared/interface/folders";
import {EGrantID} from "@/shared/enum/admin";
import {IBackupDto} from "@/shared/interface/backup";
import {EClearingStorageInterval} from "@/shared/enum/storage/clearing-interval";

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
    is_active: boolean;
}

interface IGetAvailableStoragesDto {
    storages:IGetStorageDto[];
}

interface IBackupInterval {
    days: number;
}
interface IGetStorageInfoDto {
    id: string;
    title: string;
    description: string;
    is_active: boolean;
    backup_is_active: boolean;
    clearing_interval:EClearingStorageInterval;
    size: number | null;
    backup_interval:IBackupInterval
}
interface IActionStorageDto {
    message: string;
}

export type { IGetStorageSizeDto, IGetFilesAndFoldersDto, IGetStorageDto, IGetAvailableStoragesDto, IGetStorageInfoDto, IActionStorageDto};