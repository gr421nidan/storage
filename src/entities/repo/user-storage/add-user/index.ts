import {api} from "@/shared/api";
import {IAddUserDto, IAddUserPort} from "@/shared/type/admin";

const addUserRepository = async (data: IAddUserPort): Promise<IAddUserDto> => {
    const response = await api.post<IAddUserDto>("/storage/add-user", data);
    return response.data;
};
export default addUserRepository;

