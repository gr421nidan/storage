interface IGetStorageFilesAndFoldersPort {
    search?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    fileType?: string[];
    created_at?: string;
}
export type {IGetStorageFilesAndFoldersPort}