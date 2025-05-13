import { api } from "@/shared/api";
import {IUpdateStoragePort} from "@/shared/interface/storage";

const updateStorageRepository = async (data: IUpdateStoragePort): Promise<void> => {
    await api.patch("/storage/settings", data);
};

export default updateStorageRepository;