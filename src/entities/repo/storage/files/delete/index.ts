import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFileDto} from "@/shared/interface/files";

const deleteFileRepository = async (fileId: string): Promise<AxiosResponse<IActionFileDto>> => {
    return api.delete<IActionFileDto>(`/storage/${fileId}`);

};
export default deleteFileRepository;
