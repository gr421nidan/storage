import { api } from "@/shared/api";
import { IGetUserDto } from "@/shared/type/admin";
import { userStore } from "@/app/store";

const getUsersRepository = async (): Promise<IGetUserDto[]> => {
    try {
        const storageId = userStore.state.storage_id;
        const response = await api.get<IGetUserDto[]>(`/storage/${storageId}/users`);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};

export default getUsersRepository;
