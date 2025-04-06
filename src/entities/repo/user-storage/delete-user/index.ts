import {api} from "@/shared/api";
import {AxiosResponse} from "axios";
import {IDeleteUserDto} from "@/shared/interface/admin";

const deleteUserRepository = async (folderId: string): Promise<AxiosResponse<IDeleteUserDto>> => {
    return api.delete<IDeleteUserDto>(`/storage/${folderId}`);

};
export default deleteUserRepository;
