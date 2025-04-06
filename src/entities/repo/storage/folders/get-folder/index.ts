import {api} from "@/shared/api";
import {IGetFolderDto} from "@/shared/interface/folders";

const getFolderRepository = async (storageId: string, folderId: string): Promise<IGetFolderDto> => {
    const response = await api.post<IGetFolderDto>(`/file/${storageId}/folder/${folderId}`);
    return response.data;
};
export default getFolderRepository;
