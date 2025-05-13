import {api} from "@/shared/api";
import {ICreateStorageFolderDto, ICreateStorageFolderPort} from "@/shared/interface/folders";

const createFolderRepository = async (data: ICreateStorageFolderPort, storageId: string): Promise<ICreateStorageFolderDto> => {
    const response = await api.post<ICreateStorageFolderDto>(`/folder/create-folder/${storageId}`, data);
    return response.data;
};
export default createFolderRepository;
