import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFileDto} from "@/shared/interface/files";

const recoverFileRepository = async (fileId: string): Promise<AxiosResponse<IActionFileDto>> => {
    return api.post<IActionFileDto>(`/storage//${fileId}/block`);
};
export default recoverFileRepository;
