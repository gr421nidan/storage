interface IGetStorageFilesAndFoldersPort {
    search?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    type?: string | string[];
    created_at?: string;
}
export type {IGetStorageFilesAndFoldersPort}