import {api} from "@/shared/api";
import {IUpdateUsersDto, IUpdateUsersPort} from "@/shared/interface/admin";
import {AxiosResponse} from "axios";

const updateUsersRepository = async (data: IUpdateUsersPort, userId: string): Promise<AxiosResponse<IUpdateUsersDto>> => {
    return api.patch<IUpdateUsersDto>(`/storage/users/${userId}/grants`, data);
};

export default updateUsersRepository;
