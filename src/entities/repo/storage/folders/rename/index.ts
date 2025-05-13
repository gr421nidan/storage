import {api} from "@/shared/api";
import {IActionFolderDto, IRenameStorageFolderPort} from "@/shared/interface/folders";

const renameFolderRepository = async (data: IRenameStorageFolderPort, folderId: string): Promise<IActionFolderDto> => {
    const response = await api.patch<IActionFolderDto>(`/folder/rename-folder/${folderId}`, data);
    return response.data;
};
export default renameFolderRepository;
