import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFolderDto} from "@/shared/interface/folders";

const deleteFolderRepository = async (folderId: string): Promise<AxiosResponse<IActionFolderDto>> => {
    return api.delete<IActionFolderDto>(`/file/delete-folder-basket/${folderId}`);

};
export default deleteFolderRepository;
