import { api } from "@/shared/api";
import {ISignUpDto, ISignUpPort} from "@/shared/type/auth";

const signUpUser = async (data: ISignUpPort): Promise<ISignUpDto> => {
    try {
        const response = await api.post<ISignUpDto>("/user/sign-up", data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default signUpUser;