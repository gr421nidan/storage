import { api } from "@/shared/api";
import {IGetStorageFilesAndFoldersPort} from "@/shared/interface/storage";
import {IGetTrashFilesAndFoldersDto} from "@/shared/interface/trash";

const getTrashFilesAndFoldersRepository = async (storageId: string, params: IGetStorageFilesAndFoldersPort = {}): Promise<IGetTrashFilesAndFoldersDto> => {
    const response = await api.get<IGetTrashFilesAndFoldersDto>(`/file/${storageId}/deleted-files`, { params });
    return response.data;
}

export default getTrashFilesAndFoldersRepository;
