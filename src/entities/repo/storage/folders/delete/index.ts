import {api} from "@/shared/api";
import {IActionFolderDto} from "@/shared/interface/folders";

const deleteFolderRepository = async (folderId: string): Promise<IActionFolderDto> => {
    const response = await api.delete<IActionFolderDto>(`/folder/delete-folder-trash/${folderId}`);
    return response.data;

};
export default deleteFolderRepository;
