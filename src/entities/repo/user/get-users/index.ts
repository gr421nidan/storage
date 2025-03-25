import { api } from "@/shared/api";
import {IGetAllUsersDto} from "@/shared/interface/admin/get-all-users";

const getAllUsersRepository = async (): Promise<IGetAllUsersDto[]> => {
    const response = await api.get<IGetAllUsersDto[]>(`/storage`);
    return response.data;
};

export default getAllUsersRepository;