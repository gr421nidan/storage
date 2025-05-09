import { api } from "@/shared/api";
import {IGetAllUsersDto, IGetAllUsersPort} from "@/shared/interface/admin/get-all-users";

const getAllUsersRepository = async (params?: IGetAllUsersPort): Promise<IGetAllUsersDto[]> => {
    const response = await api.get<IGetAllUsersDto[]>("/user", {params});
    return response.data;
};

export default getAllUsersRepository;
