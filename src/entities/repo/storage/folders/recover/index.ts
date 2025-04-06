import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFolderDto} from "@/shared/interface/folders";

const recoverFolderRepository = async (folderId: string): Promise<AxiosResponse<IActionFolderDto>> => {
    return api.post<IActionFolderDto>(`/storage//${folderId}/block`);
};
export default recoverFolderRepository;
