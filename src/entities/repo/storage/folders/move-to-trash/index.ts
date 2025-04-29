import {api} from "@/shared/api";
import {IActionFolderDto} from "@/shared/interface/folders";

const moveToTrashFolderRepository = async (folderId: string): Promise<IActionFolderDto> => {
    const response = await api.patch<IActionFolderDto>(`/file/folder-delete/${folderId}`);
    return response.data;
};
export default moveToTrashFolderRepository;
