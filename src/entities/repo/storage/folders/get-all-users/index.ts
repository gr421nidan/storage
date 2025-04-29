import { api } from "@/shared/api";
import {IGetAllUsersDto, IGetAllUsersPort} from "@/shared/interface/admin/get-all-users";

const getAllUsersForAccessRepository = async (params?: IGetAllUsersPort): Promise<IGetAllUsersDto[]> => {
    const response = await api.get<IGetAllUsersDto[]>("/users", {params});
    return response.data;
};

export default getAllUsersForAccessRepository;
