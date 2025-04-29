import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFolderDto, IChooseAccessForFolderPort} from "@/shared/interface/folders";

const chooseAccessForFolderRepository = async (folderId: string, data: IChooseAccessForFolderPort): Promise<AxiosResponse<IActionFolderDto>> => {
    return api.patch<IActionFolderDto>(`/file/choose-access/${folderId}`, data);
};
export default chooseAccessForFolderRepository;
