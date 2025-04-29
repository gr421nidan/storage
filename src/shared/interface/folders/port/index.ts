import {ELinkActivity} from "@/shared/enum/folder";

interface ICreateStorageFolderPort {
    title: string;
    parent_folder_id?: string | null;
}
interface IRenameStorageFolderPort {
    title: string;
}
interface IAddAccessForUserPort {
    user_id: string;
}
interface IChooseAccessForFolderPort {
    is_restricted: boolean;
}
interface ILinkActivityPort {
    date_of_expiration: ELinkActivity;
}
export type { ICreateStorageFolderPort, IRenameStorageFolderPort, IAddAccessForUserPort, IChooseAccessForFolderPort, ILinkActivityPort};