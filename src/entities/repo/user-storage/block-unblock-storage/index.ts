import {api} from "@/shared/api";
import {IBlockUnblockStoragePort} from "@/shared/interface/storage";

const blockUnblockStorageRepository = async (storageId: string, data: IBlockUnblockStoragePort): Promise<void> => {
    await api.patch(`/storage/${storageId}`, data);
};
export default blockUnblockStorageRepository;
