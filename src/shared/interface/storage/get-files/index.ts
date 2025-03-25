interface IGetStorageFilesDto {
    id: string;
    title: string;
    type: string;
    size: number;
    created_at:string;
    tag_id: number;
}

export type {IGetStorageFilesDto};