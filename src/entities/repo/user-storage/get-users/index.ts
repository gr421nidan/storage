import {api} from "@/shared/api";
import {IGetUserDto, IGetUsersPort} from "@/shared/interface/admin";

const getUsersRepository = async (params: IGetUsersPort): Promise<IGetUserDto[]> => {
    const response = await api.get<IGetUserDto[]>("/storage/users", { params });
    return response.data;
};

export default getUsersRepository;