import {api} from "@/shared/api";
import {IDeleteUserDto} from "@/shared/interface/admin";
import {AxiosResponse} from "axios";

const deleteUserRepository = async (userId: string): Promise<AxiosResponse<IDeleteUserDto>> => {
    return api.delete<IDeleteUserDto>(`/storage/users/${userId}`);

};
export default deleteUserRepository;
