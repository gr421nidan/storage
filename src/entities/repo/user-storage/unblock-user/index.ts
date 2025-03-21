import {api} from "@/shared/api";
import {IUnblockUserDto} from "@/shared/type/admin";

const unblockUserRepository = async (userId: string): Promise<IUnblockUserDto> => {
    const response = await api.post<IUnblockUserDto>(`/storage/users/${userId}/unblock`);
    return response.data;

};
export default unblockUserRepository;
