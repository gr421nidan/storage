import {api} from "@/shared/api";
import {IGetUserDto} from "@/shared/interface/admin";

const getUsersRepository = async (search?: string): Promise<IGetUserDto[]> => {
    const response = await api.get<IGetUserDto[]>("/storage/users", {
        params: search ? { surname: search } : {},
    });
    return response.data;
};

export default getUsersRepository;
