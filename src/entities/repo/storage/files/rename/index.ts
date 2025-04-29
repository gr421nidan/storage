import {api} from "@/shared/api";
import {IActionFileDto, IRenameFilePort} from "@/shared/interface/files";

const renameFileRepository = async (data: IRenameFilePort, fileId: string): Promise<IActionFileDto> => {
    const response = await api.patch<IActionFileDto>(`/file/rename-file/${fileId}`, data);
    return response.data;
};
export default renameFileRepository;
