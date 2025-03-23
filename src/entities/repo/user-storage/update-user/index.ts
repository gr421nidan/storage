import {api} from "@/shared/api";
import {IUpdateUserDto, IUpdateUserPort} from "@/shared/type/admin";

const updateUserRepository = async (data: IUpdateUserPort, userId: string): Promise<IUpdateUserDto> => {
    const response = await api.patch<IUpdateUserDto>(`/storage/users/${userId}/grants`, data);
    return response.data;
};

export default updateUserRepository;
