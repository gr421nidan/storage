import {api} from '@/shared/api';

const cleanupBackupsRepository = async (storageId: string): Promise<void> => {
    await api.delete(`/backup/delete/${storageId}`);
};

export default cleanupBackupsRepository;
