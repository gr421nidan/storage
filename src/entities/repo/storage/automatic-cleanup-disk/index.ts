import {api} from "@/shared/api";
import {IAutomaticCleanupDiskPort} from "@/shared/interface/storage";

const automaticCleanupDiskRepository = async (storageId: string, data: IAutomaticCleanupDiskPort): Promise<void> => {
    const response = await api.post(`/backup//${storageId}`, data);
    return response.data;
};
export default automaticCleanupDiskRepository;
