import {api} from "@/shared/api";
import {IUpdateBackupStatusPort} from "@/shared/interface/backup";

const updateBackupStatusRepository = async (storageId: string, data: IUpdateBackupStatusPort): Promise<void> => {
    await api.patch(`/backup/status/${storageId}`, data);
};
export default updateBackupStatusRepository;
