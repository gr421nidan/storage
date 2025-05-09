import { api } from "@/shared/api";
import {IGetStorageInfoDto} from "@/shared/interface/storage";

const getStorageInfoRepository = async (storageId:string): Promise<IGetStorageInfoDto> => {
    const response = await api.get<IGetStorageInfoDto>(`/storage/${storageId}`);
    return response.data;
};

export default getStorageInfoRepository;