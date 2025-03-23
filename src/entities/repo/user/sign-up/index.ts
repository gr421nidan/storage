import {api} from "@/shared/api";
import {ISignUpDto, ISignUpPort} from "@/shared/type/auth";

const signUpUserRepository = async (data: ISignUpPort): Promise<ISignUpDto> => {
    const response = await api.post<ISignUpDto>("/user/sign-up", data);
    return response.data;
};
export default signUpUserRepository;