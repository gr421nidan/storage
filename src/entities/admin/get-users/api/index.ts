
import { api } from "@/shared/api";
import { IGetUserDto } from "@/shared/type/admin";
import { userStore } from "@/app/store";

const getUsers = async (): Promise<IGetUserDto[]> => {
    try {
        const storageId = userStore.state.storage_id;
        const response = await api.get<IGetUserDto[]>(`/storage/${storageId}/users`);
        console.log("Fetched users:", response.data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};

export default getUsers;
