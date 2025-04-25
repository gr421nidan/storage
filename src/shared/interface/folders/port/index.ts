interface ICreateStorageFolderPort {
    title: string;
    parent_folder_id?: string | null;
}
interface IRenameStorageFolderPort {
    title: string;
}
export type { ICreateStorageFolderPort, IRenameStorageFolderPort };