import {api} from "@/shared/api";
import {ISignInDto, ISignInPort} from "@/shared/interface/auth";

const loginUserRepository = async (data: ISignInPort): Promise<ISignInDto> => {
    const response = await api.post<ISignInDto>("/user/login", data);
    return response.data;
};
export default loginUserRepository;
