import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFileDto} from "@/shared/interface/files";

const moveToTrashFileRepository = async (fileId: string): Promise<AxiosResponse<IActionFileDto>> => {
    return api.delete<IActionFileDto>(`/file/file-delete/${fileId}`);
};
export default moveToTrashFileRepository;
