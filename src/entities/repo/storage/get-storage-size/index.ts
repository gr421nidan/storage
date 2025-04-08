import { api } from "@/shared/api";
import {IGetStorageSizeDto} from "@/shared/interface/storage";

const getStorageDataRepository = async (): Promise<IGetStorageSizeDto> => {
    const response = await api.get<IGetStorageSizeDto>("/storage/usage");
    return response.data;
};

export default getStorageDataRepository;