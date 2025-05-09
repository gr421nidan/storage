import {api} from "@/shared/api";
import {IAutomaticCleanupDiskPort} from "@/shared/interface/storage";

const automaticCleanupDiskRepository = async (storageId: string, data: IAutomaticCleanupDiskPort): Promise<void> => {
    await api.post(`/backup//${storageId}`, data);
};
export default automaticCleanupDiskRepository;
