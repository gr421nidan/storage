import {api} from "@/shared/api";
import {IActionFolderDto, IDeleteUserWithAccessPort} from "@/shared/interface/folders";

const deleteUserWithAccessRepository = async ({ userId, folderId }: IDeleteUserWithAccessPort): Promise<IActionFolderDto> => {
    const response = await api.delete<IActionFolderDto>(`/file/folders/${folderId}/access/${userId}`);
    return response.data;

};
export default deleteUserWithAccessRepository;
