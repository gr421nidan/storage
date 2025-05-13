import {api} from "@/shared/api";
import {IAutomaticCleanupDiskPort} from "@/shared/interface/storage";

const automaticCleanupDiskRepository = async (storageId: string, data: IAutomaticCleanupDiskPort): Promise<void> => {
    await api.patch(`/storage/${storageId}/clearing-interval`, data);
};
export default automaticCleanupDiskRepository;
