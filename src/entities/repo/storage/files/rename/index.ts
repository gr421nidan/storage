import {api} from "@/shared/api";
import {IGetStorageFileDto, IRenameFilePort} from "@/shared/interface/files";

const renameFileRepository = async (data: IRenameFilePort, fileId: string): Promise<IGetStorageFileDto> => {
    const response = await api.patch<IGetStorageFileDto>(`/file/rename-file/${fileId}`, data);
    return response.data;
};
export default renameFileRepository;
