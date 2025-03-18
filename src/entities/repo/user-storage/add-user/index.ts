import { api } from "@/shared/api";
import {IAddUserDto, IAddUserPort} from "@/shared/type/admin";

const addUserRepository = async (data: IAddUserPort): Promise<IAddUserDto> => {
    try {
        const response = await api.post<IAddUserDto>("/storage/add-user", data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default addUserRepository;

