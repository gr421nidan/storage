import {api} from "@/shared/api";
import {IActionFolderDto, IAddAccessForUserPort} from "@/shared/interface/folders";

const addAccessForUserRepository = async (data: IAddAccessForUserPort, folderId: string): Promise<IActionFolderDto> => {
    const response = await api.post<IActionFolderDto>(`/file/add/${folderId}`, data);
    return response.data;
};
export default addAccessForUserRepository;
