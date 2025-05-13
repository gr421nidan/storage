import {api} from "@/shared/api";
import {IGetUsersWithAccessDto} from "@/shared/interface/folders";

const getUsersWithAccessRepository = async (folderId: string): Promise<IGetUsersWithAccessDto> => {
    const response = await api.get<IGetUsersWithAccessDto>(`/folder/${folderId}/access`);
    return response.data;
};

export default getUsersWithAccessRepository;