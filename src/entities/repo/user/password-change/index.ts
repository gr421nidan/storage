import {api} from "@/shared/api";
import {IPasswordUserChangePort, IUpdateUserDto} from "@/shared/interface/user";
import {AxiosResponse} from "axios";

const changePasswordRepository = async (data: IPasswordUserChangePort):  Promise<AxiosResponse<IUpdateUserDto>> => {
    return api.patch<IUpdateUserDto>("/user/change-password", data);
};

export default changePasswordRepository;