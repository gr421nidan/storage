import {api} from "@/shared/api";
import {IActionFolderDto, IChooseAccessForFolderPort} from "@/shared/interface/folders";

const chooseAccessForFolderRepository = async (folderId: string, data: IChooseAccessForFolderPort): Promise<IActionFolderDto> => {
    const response = await api.patch<IActionFolderDto>(`/file/folders/${folderId}/access`, data);
    return response.data;
};
export default chooseAccessForFolderRepository;
