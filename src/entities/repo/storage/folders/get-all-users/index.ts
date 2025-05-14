import { api } from "@/shared/api";
import {IGetAllUsersDto, IGetAllUsersPort} from "@/shared/interface/folders";

const getAllUsersForAccessRepository = async (params?: IGetAllUsersPort): Promise<IGetAllUsersDto[]> => {
    const response = await api.get<IGetAllUsersDto[]>("/user/all", {params});
    return response.data;
};

export default getAllUsersForAccessRepository;
