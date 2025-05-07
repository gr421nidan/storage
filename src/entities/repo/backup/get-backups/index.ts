import { api } from "@/shared/api";
import {IBackupDto} from "@/shared/interface/backup";

const getBackupsRepository = async (): Promise<IBackupDto[]> => {
    const response = await api.get<IBackupDto[]>("/backup");
    return response.data;
};

export default getBackupsRepository;