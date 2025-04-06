import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFolderDto} from "@/shared/interface/folders";

const moveToTrashFolderRepository = async (folderId: string): Promise<AxiosResponse<IActionFolderDto>> => {
    return api.delete<IActionFolderDto>(`/file/folder-delete/${folderId}`);
};
export default moveToTrashFolderRepository;
