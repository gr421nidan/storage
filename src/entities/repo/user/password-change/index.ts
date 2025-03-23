import {api} from "@/shared/api";
import {IPasswordUserChangePort, IUpdateUserDto} from "@/shared/type/user";

const changePasswordRepository = async (data: IPasswordUserChangePort): Promise<IUpdateUserDto> => {
    const response = await api.patch<IUpdateUserDto>("/user/me", data);
    return response.data;
};

export default changePasswordRepository;