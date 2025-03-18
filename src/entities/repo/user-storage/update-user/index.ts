import { api } from "@/shared/api";
import {userStore} from "@/app/store";
import {IUpdateUserDto, IUpdateUserPort} from "@/shared/type/admin";

const updateUserRepository = async (data: IUpdateUserPort, userId: string): Promise<IUpdateUserDto> => {
    try {
        const storageId = userStore.state.storage_id;
        const response = await api.patch<IUpdateUserDto>(`/storage/${storageId}/users/${userId}/grants`, data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default updateUserRepository;
