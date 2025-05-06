import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFolderDto} from "@/shared/interface/folders";

const copyLinkToFolderRepository = async (folderId: string): Promise<AxiosResponse<IActionFolderDto>> => {
    return api.post<IActionFolderDto>(`/file/copy-link/${folderId}`);
};
export default copyLinkToFolderRepository;
