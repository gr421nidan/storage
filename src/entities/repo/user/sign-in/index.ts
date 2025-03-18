import { api } from "@/shared/api";
import {ISignInDto, ISignInPort} from "@/shared/type/auth";

const loginUserRepository = async (data: ISignInPort): Promise<ISignInDto> => {
    try {
        const response = await api.post<ISignInDto>("/user/login", data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default loginUserRepository;

