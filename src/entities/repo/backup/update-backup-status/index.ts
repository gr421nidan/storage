import {api} from "@/shared/api";
import {IUpdateBackupStatusPort} from "@/shared/interface/storage";

const updateBackupStatusRepository = async (storageId:string, data: IUpdateBackupStatusPort): Promise<void> => {
    await api.patch(`/backup//${storageId}`, data);
};
export default updateBackupStatusRepository;
