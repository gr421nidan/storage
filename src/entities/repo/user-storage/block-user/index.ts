import {api} from "@/shared/api";
import {IBlockUserDto} from "@/shared/interface/admin";

const blockUserRepository = async (userId: string): Promise<IBlockUserDto> => {
    const response = await api.post<IBlockUserDto>(`/storage/users/${userId}/block`);
    return response.data;
};
export default blockUserRepository;
