import {api} from "@/shared/api";
import {IActionFileDto} from "@/shared/interface/files";

const moveToTrashFileRepository = async (fileId: string): Promise<IActionFileDto> => {
    const response = await api.patch<IActionFileDto>(`/file/file-delete/${fileId}`);
    return response.data;
};
export default moveToTrashFileRepository;
