import { api } from "@/shared/api";
import {IUpdateUserPhotoPort, IUpdateUserDto} from "@/shared/interface/user";
import {CONTENT_TYPE_FORM} from "@/shared/config";

const updateUserPhotoRepository = async (data:IUpdateUserPhotoPort): Promise<IUpdateUserDto> => {
    const formData = new FormData();
    formData.append("file", data.file);
    const response = await api.patch<IUpdateUserDto>("/user/update-image", formData, {
        headers: {
            "Content-Type": CONTENT_TYPE_FORM,
        },
    });
    return response.data;
};

export default updateUserPhotoRepository;