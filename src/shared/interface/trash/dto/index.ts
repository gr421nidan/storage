import {IGetTrashFileDto} from "@/shared/interface/files";
import {IGetTrashFolderDto} from "@/shared/interface/folders";

interface IGetTrashFilesAndFoldersDto {
    files: IGetTrashFileDto[],
    folders: IGetTrashFolderDto[]
}

export type {IGetTrashFilesAndFoldersDto}