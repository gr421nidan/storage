import { api } from "@/shared/api";
import {IGetFileDto} from "@/shared/interface/files";

const getFileRepository = async (fileId: string): Promise<IGetFileDto> => {
    const response = await api.post<IGetFileDto>(`/file/file-path/${fileId}`);

    return response.data;
};

export default getFileRepository;
