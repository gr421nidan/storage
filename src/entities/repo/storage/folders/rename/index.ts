import {api} from "@/shared/api";
import {IGetStorageFolderDto, IRenameStorageFolderPort} from "@/shared/interface/folders";

const renameFolderRepository = async (data: IRenameStorageFolderPort, folderId: string): Promise<IGetStorageFolderDto> => {
    const response = await api.patch<IGetStorageFolderDto>(`/file/rename-folder/${folderId}`, data);
    return response.data;
};
export default renameFolderRepository;
