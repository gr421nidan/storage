import { api } from "@/shared/api";
import {IGetAllUsersDto} from "@/shared/interface/admin/get-all-users";

const getAllUsersRepository = async (query?: string): Promise<IGetAllUsersDto[]> => {
    const response = await api.get<IGetAllUsersDto[]>(`/user`, {
        params: query ? {email: query} : {}
    });
    return response.data;
};

export default getAllUsersRepository;