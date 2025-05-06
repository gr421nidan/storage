import { api } from "@/shared/api";
import {ICleanupDiskDto} from "@/shared/interface/storage";

const cleanupDiskRepository = async (): Promise<ICleanupDiskDto> => {
    const response = await api.delete<ICleanupDiskDto>("/storage/usage");
    return response.data;
};

export default cleanupDiskRepository;