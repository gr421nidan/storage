import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IGuestGetFileDto} from "@/shared/interface/files";

const guestGetFileRepository = async (fileId: string): Promise<AxiosResponse<IGuestGetFileDto>> => {
    return api.get<IGuestGetFileDto>(`/file/file-path/${fileId}`);
};
export default guestGetFileRepository;
