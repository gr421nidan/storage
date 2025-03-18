import { api } from "@/shared/api";
import {IBlockUserDto} from "@/shared/type/admin";
import {userStore} from "@/app/store";

const blockUserRepository = async (userId: string): Promise<IBlockUserDto> => {
    try {
        const storageId = userStore.state.storage_id;
        const response = await api.post<IBlockUserDto>(`/storage/${storageId}/users/${userId}/block`);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default blockUserRepository;
