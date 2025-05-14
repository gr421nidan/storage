interface IBackupDto {
    id: string;
    title: string;
    backup_time: string;
    path: string;
    size: number;
}

interface ICreateBackupDto extends IBackupDto {
    storage_id: string;
    user_id: string;
    type: string;
}

interface IGetBackupNextDateDto {
    next_backup_date: string | null;
}

export type {ICreateBackupDto, IBackupDto, IGetBackupNextDateDto}