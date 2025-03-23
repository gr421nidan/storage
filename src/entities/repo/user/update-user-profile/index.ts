import { api } from "@/shared/api";
import {IUpdateUserDto, IUpdateUserPort} from "@/shared/type/user";

const updateUserRepository = async (data:IUpdateUserPort): Promise<IUpdateUserDto> => {
    const response = await api.patch<IUpdateUserDto>("/user/update-image", data);
    return response.data;
};

export default updateUserRepository;