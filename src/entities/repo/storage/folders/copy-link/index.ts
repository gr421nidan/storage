import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFolderDto,ILinkActivityPort} from "@/shared/interface/folders";

const copyLinkToFolderRepository = async (folderId: string, data: ILinkActivityPort): Promise<AxiosResponse<IActionFolderDto>> => {
    return api.post<IActionFolderDto>(`/file/copy-link/${folderId}`, data);
};
export default copyLinkToFolderRepository;
