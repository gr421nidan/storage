import {api} from "@/shared/api";
import {IActionFolderDto} from "@/shared/interface/folders";

const recoverFolderRepository = async (folderId: string): Promise<IActionFolderDto> => {
    const response = await api.patch<IActionFolderDto>(`/folder/restore-folder/${folderId}`);
    return response.data;
};
export default recoverFolderRepository;
