import {api} from "@/shared/api";

const deleteBackupRepository = async (backupId: string): Promise<void> => {
    await api.delete(`/backup/${backupId}`);
};
export default deleteBackupRepository;
