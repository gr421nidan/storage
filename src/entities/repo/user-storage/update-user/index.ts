import {api} from "@/shared/api";
import {IUpdateUsersDto, IUpdateUsersPort} from "@/shared/type/admin";

const updateUsersRepository = async (data: IUpdateUsersPort, userId: string): Promise<IUpdateUsersDto> => {
    const response = await api.patch<IUpdateUsersDto>(`/storage/users/${userId}/grants`, data);
    return response.data;
};

export default updateUsersRepository;
