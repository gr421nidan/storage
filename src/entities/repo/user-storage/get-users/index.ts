import {api} from "@/shared/api";
import {IGetUserDto} from "@/shared/type/admin";

const getUsersRepository = async (): Promise<IGetUserDto[]> => {
    const response = await api.get<IGetUserDto[]>("/storage/users");
    return response.data;

};

export default getUsersRepository;
