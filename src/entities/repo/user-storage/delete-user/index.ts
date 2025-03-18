import { api } from "@/shared/api";
import {userStore} from "@/app/store";
import {IDeleteUserDto} from "@/shared/type/admin";

const deleteUserRepository = async (userId: string): Promise<IDeleteUserDto> => {
    try {
        const storageId = userStore.state.storage_id;
        const response = await api.delete<IDeleteUserDto>(`/storage/${storageId}/users/${userId}`);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default deleteUserRepository;
