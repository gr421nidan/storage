import {api} from "@/shared/api";
import {IUpdateUserDto, IUpdateUserPort} from "@/shared/type/user";
import {AxiosResponse} from "axios";

const updateUserRepository = async (data: IUpdateUserPort): Promise<AxiosResponse<IUpdateUserDto>> => {
    return api.patch<IUpdateUserDto>("/user/me", data);
};

export default updateUserRepository;
