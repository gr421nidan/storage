import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IDeleteUserDto} from "@/shared/interface/admin";

const deleteUserRepository = async (userId: string): Promise<AxiosResponse<IDeleteUserDto>> => {
    return api.delete<IDeleteUserDto>(`/storage/users/${userId}`);

};
export default deleteUserRepository;
