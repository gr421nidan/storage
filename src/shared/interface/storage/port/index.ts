interface IGetStorageFilesAndFoldersPort {
    search?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    type?: string[];
    created_at?: string;
}
interface IConnectStorageS3Port {
    endpoint: string;
    bucket_name: string;
    access_key: string;
    secret_key: string;
}
export type {IGetStorageFilesAndFoldersPort, IConnectStorageS3Port}