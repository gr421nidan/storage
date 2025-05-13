import {api} from "@/shared/api";
import {IGetAvailableFolderDto} from "@/shared/interface/folders";

const userGetAvailableFolderRepository = async (folderId: string): Promise<IGetAvailableFolderDto> => {
    const response= await api.get<IGetAvailableFolderDto>(`/folder/${folderId}`);
    return response.data
};
export default userGetAvailableFolderRepository;
