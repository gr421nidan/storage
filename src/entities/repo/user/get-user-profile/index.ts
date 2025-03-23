import { api } from "@/shared/api";
import { IGetUserProfileDto } from "@/shared/type/user";

const getUserProfileRepository = async (): Promise<IGetUserProfileDto> => {
    const response = await api.get<IGetUserProfileDto>("/user/me");
    return response.data;
};

export default getUserProfileRepository;