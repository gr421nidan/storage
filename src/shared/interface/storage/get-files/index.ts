interface IGetStorageFilesDto {
    id: string;
    title: string;
    type: string;
    size: number;
    created_at:string;
    tag: string | null;
}

export type {IGetStorageFilesDto};