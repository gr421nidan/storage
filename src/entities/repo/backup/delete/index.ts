import {api} from "@/shared/api";
import {IActionBackupDto} from "@/shared/interface/backup";

const deleteBackupRepository = async (backupId: string): Promise<IActionBackupDto> => {
    const response = await api.delete<IActionBackupDto>(`/backup/${backupId}`);
    return response.data;

};
export default deleteBackupRepository;
