import {api} from "@/shared/api";
import {IActionBackupDto, IUpdateBackupStatusPort} from "@/shared/interface/backup";

const updateBackupStatusRepository = async (storageId: string, data: IUpdateBackupStatusPort): Promise<IActionBackupDto> => {
    const response = await api.patch(`/backup/status/${storageId}`, data);
    return response.data;
};
export default updateBackupStatusRepository;
