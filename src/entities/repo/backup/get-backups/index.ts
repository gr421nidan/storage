import { api } from "@/shared/api";
import { IGetBackupDto } from "@/shared/interface/backup";

const getBackupsRepository = async (): Promise<IGetBackupDto> => {
    const response = await api.get<IGetBackupDto>("/backup");
    return response.data;
};

export default getBackupsRepository;