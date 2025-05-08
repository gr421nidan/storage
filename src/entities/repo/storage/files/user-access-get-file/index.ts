import {api} from "@/shared/api";
import {IUserAccessGetFileDto} from "@/shared/interface/files";

const userAccessGetFileRepository = async (fileId: string): Promise<IUserAccessGetFileDto> => {
    const response= await api.get<IUserAccessGetFileDto>(`/file/file-path/${fileId}`);
    return response.data
};
export default userAccessGetFileRepository;
