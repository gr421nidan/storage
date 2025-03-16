import { api } from "@/shared/api";
import {IAddUserDto, IAddUserPort} from "@/shared/type/admin";

const addUser = async (data: IAddUserPort): Promise<IAddUserDto> => {
    try {
        console.log("Sending data:", data);
        const response = await api.post<IAddUserDto>("/storage/add-user", data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default addUser;

