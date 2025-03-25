import { api } from "@/shared/api";
import {IUpdateUserPhotoPort, IUpdateUserDto} from "@/shared/interface/user";

const updateUserPhotoRepository = async (data:IUpdateUserPhotoPort): Promise<IUpdateUserDto> => {
    const formData = new FormData();
    formData.append("file", data.file);
    const response = await api.patch<IUpdateUserDto>("/user/update-image", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export default updateUserPhotoRepository;