import { api } from "@/shared/api";
import {IUpdateUserPhotoPort, IUpdateUserDto} from "@/shared/type/user";

const updateUserPhotoRepository = async (data:IUpdateUserPhotoPort): Promise<IUpdateUserDto> => {
    const response = await api.patch<IUpdateUserDto>("/user/me", data);
    return response.data;
};

export default updateUserPhotoRepository;