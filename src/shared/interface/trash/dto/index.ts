import {IGetTrashFileDto} from "@/shared/interface/files";
import {IGetTrashFolderDto} from "@/shared/interface/folders";

interface IGetTrashFilesAndFoldersDto {
    files: IGetTrashFileDto[],
    folders: IGetTrashFolderDto[]
}
interface ICleaningTrashDto {
    message: string,
}
export type {ICleaningTrashDto, IGetTrashFilesAndFoldersDto}