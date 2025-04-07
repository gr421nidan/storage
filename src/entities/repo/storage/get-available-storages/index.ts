import { IGetAvailableStoragesDto } from "@/shared/interface/storage";
import {api} from "@/shared/api";

const getAvailableStoragesRepository = async (): Promise<IGetAvailableStoragesDto> => {
    const response = await api.get<IGetAvailableStoragesDto>(`/storage/`);
    return response.data;
};

export default getAvailableStoragesRepository;
