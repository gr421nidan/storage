import { api } from "@/shared/api";
import {IUnblockUserDto} from "@/shared/type/admin";
import {userStore} from "@/app/store";

const unblockUserRepository = async (userId: string): Promise<IUnblockUserDto> => {
    try {
        const storageId = userStore.state.storage_id;
        const response = await api.post<IUnblockUserDto>(`/storage/${storageId}/users/${userId}/unblock`);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default unblockUserRepository;
