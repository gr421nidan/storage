import {EClearingStorageInterval} from "@/shared/enum/storage/clearing-interval";

interface IGetStorageFilesAndFoldersPort {
    search?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    type?: string[];
    created_at?: string;
}
interface IUpdateStoragePort {
    title: string;
    description: string;
}

interface IBlockUnblockStoragePort {
    is_active: boolean;
}
interface IAutomaticCleanupDiskPort {
    clearing_interval: EClearingStorageInterval;
}
export type {IGetStorageFilesAndFoldersPort, IUpdateStoragePort, IBlockUnblockStoragePort, IAutomaticCleanupDiskPort}