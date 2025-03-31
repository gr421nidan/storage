interface IGetStorageFileDto {
    id: string;
    title: string;
    type: string;
    size: number;
    created_at:string;
    tag: string | null;
    path: string;
}

export type {IGetStorageFileDto};