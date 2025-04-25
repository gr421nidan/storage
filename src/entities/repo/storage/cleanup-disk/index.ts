import { api } from "@/shared/api";
import {ICleanupDiskDto} from "@/shared/interface/storage";
import {AxiosResponse} from "axios";

const cleanupDiskRepository = async (): Promise<AxiosResponse> => {
    return api.delete<ICleanupDiskDto>("/storage/usage");
};

export default cleanupDiskRepository;