import { api } from "@/shared/api";
import { IDeleteUserDto } from "@/shared/interface/admin";

const deleteUserRepository = async (userId: string): Promise<IDeleteUserDto> => {
    const response = await api.delete<IDeleteUserDto>(`/storage/users/${userId}`);
    return response.data;
};

export default deleteUserRepository;
