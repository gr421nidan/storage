import { api } from "@/shared/api";
import {IGetFilesAndFoldersDto, IGetStorageFilesAndFoldersPort} from "@/shared/interface/storage";

const getStorageFilesAndFoldersRepository = async (storageId: string, params: IGetStorageFilesAndFoldersPort = {}): Promise<IGetFilesAndFoldersDto> => {
    const response = await api.get<IGetFilesAndFoldersDto>(`/file/${storageId}`, { params });
    return response.data;
}

export default getStorageFilesAndFoldersRepository;
