import {api} from "@/shared/api";
import {IActionStorageDto, IAutomaticCleanupDiskPort} from "@/shared/interface/storage";

const automaticCleanupDiskRepository = async (storageId: string, data: IAutomaticCleanupDiskPort): Promise<IActionStorageDto> => {
    const response = await api.patch(`/storage/${storageId}/clearing-interval`, data);
    return response.data;
};
export default automaticCleanupDiskRepository;
