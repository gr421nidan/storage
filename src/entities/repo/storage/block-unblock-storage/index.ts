import {api} from "@/shared/api";
import {IActionStorageDto, IBlockUnblockStoragePort} from "@/shared/interface/storage";

const blockUnblockStorageRepository = async (storageId: string, data: IBlockUnblockStoragePort): Promise<IActionStorageDto> => {
    const response = await api.patch(`/storage/${storageId}`, data);
    return response.data;
};
export default blockUnblockStorageRepository;
