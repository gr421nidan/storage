import {api} from "@/shared/api";
import {IUpdateBackupStatusPort} from "@/shared/interface/storage";

const updateBackupStatusRepository = async (storageId: string, data: IUpdateBackupStatusPort): Promise<void> => {
    const response = await api.patch(`/backup//${storageId}`, data);
    return response.data;
};
export default updateBackupStatusRepository;
