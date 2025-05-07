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

interface IActionBackupDto {
    message: string;
}

interface IGetBackupDto {
    backups: IBackupDto[]
}
export type {ICreateBackupDto, IBackupDto, IActionBackupDto, IGetBackupDto}