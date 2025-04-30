import { api } from "@/shared/api";
import {IFiltersLogsPort, IGetStorageUserLogDto} from "@/shared/interface/admin";

const getUserLogsRepository = async (userId: string, params: IFiltersLogsPort = {} ): Promise<IGetStorageUserLogDto> => {
    const response = await api.get<IGetStorageUserLogDto>(`/storage/users/${userId}`, {params});
    return response.data;
};

export default getUserLogsRepository;
