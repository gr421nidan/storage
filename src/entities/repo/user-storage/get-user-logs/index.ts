import { api } from "@/shared/api";
import { IGetStorageUserLogDto } from "@/shared/interface/admin";

const getUserLogsRepository = async (userId: string): Promise<IGetStorageUserLogDto> => {
    const response = await api.get<IGetStorageUserLogDto>(`/storage/users/${userId}`);
    return response.data;
};

export default getUserLogsRepository;
