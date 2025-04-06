import {api} from "@/shared/api";
import {IGetFolderDto} from "@/shared/interface/folders";
import {IGetStorageFilesAndFoldersPort} from "@/shared/interface/storage";

const getFolderRepository = async (
    storageId: string, folderId: string | undefined, params: IGetStorageFilesAndFoldersPort = {}): Promise<IGetFolderDto> => {
    const response = await api.get<IGetFolderDto>(`/file/${storageId}/folder/${folderId}`, { params });
    return response.data;
};

export default getFolderRepository;