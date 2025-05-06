
interface IBaseFolder {
    title: string;
}

interface ICreateStorageFolderPort extends IBaseFolder {
    parent_folder_id?: string | null;
}

type IRenameStorageFolderPort = IBaseFolder
interface IAddAccessForUserPort {
    user_id: string;
}
interface IChooseAccessForFolderPort {
    is_restricted: boolean;
}
export type { ICreateStorageFolderPort, IRenameStorageFolderPort, IAddAccessForUserPort, IChooseAccessForFolderPort, IBaseFolder};