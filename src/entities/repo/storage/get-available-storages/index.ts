import { IGetAvailableStoragesDto } from "@/shared/interface/storage";
import {api} from "@/shared/api";

const getAvailableStoragesRepository = async (): Promise<IGetAvailableStoragesDto> => {
    const response = await api.get<IGetAvailableStoragesDto>(`/storage/`);
    console.log(response.data);
    return response.data;
};

export default getAvailableStoragesRepository;
