import {api} from "@/shared/api";
import {IGetAvailableFileDto} from "@/shared/interface/files";

const userGetAvailableFileRepository = async (fileId: string): Promise<IGetAvailableFileDto> => {
    const response= await api.get<IGetAvailableFileDto>(`/file/file-path/${fileId}`);
    return response.data
};
export default userGetAvailableFileRepository;
