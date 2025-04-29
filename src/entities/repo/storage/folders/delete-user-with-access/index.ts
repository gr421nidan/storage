import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IActionFolderDto} from "@/shared/interface/folders";

const deleteUserWithAccessRepository = async (userId: string): Promise<AxiosResponse<IActionFolderDto>> => {
    return api.delete<IActionFolderDto>(`/file/delete-folder-user/${userId}`);

};
export default deleteUserWithAccessRepository;
