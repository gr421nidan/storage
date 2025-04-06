import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFolderDto} from "@/shared/interface/folders";

const deleteFolderRepository = async (userId: string): Promise<AxiosResponse<IActionFolderDto>> => {
    return api.delete<IActionFolderDto>(`/storage/users/${userId}`);

};
export default deleteFolderRepository;
