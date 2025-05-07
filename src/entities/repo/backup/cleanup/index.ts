import {api} from "@/shared/api";
import {IActionBackupDto} from "@/shared/interface/backup";

const cleanupBackupsRepository= async (storageId: string): Promise<IActionBackupDto> => {
    const response = await api.delete<IActionBackupDto>(`/backup/del/${storageId}`);
    return response.data;

};
export default cleanupBackupsRepository;
