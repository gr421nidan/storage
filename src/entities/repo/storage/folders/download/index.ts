import {api} from "@/shared/api";
import {IDownloadFolderDto} from "@/shared/interface/folders";

const downloadFolderRepository = async (folderId: string): Promise<IDownloadFolderDto> => {
    const response = await api.get<IDownloadFolderDto>(`/file/download-folder/${folderId}`);
    return response.data;
};
export default downloadFolderRepository;
