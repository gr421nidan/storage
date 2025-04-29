import {api} from "@/shared/api";
import {IActionFileDto} from "@/shared/interface/files";

const deleteFileRepository = async (fileId: string): Promise<IActionFileDto> => {
    const response = await api.delete<IActionFileDto>(`/file/delete-file-trash/${fileId}`);
    return response.data;

};
export default deleteFileRepository;
