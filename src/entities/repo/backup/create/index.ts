import { ICreateBackupDto } from "@/shared/interface/backup";
import {api} from "@/shared/api";

const getCreateBackupRepository = async (): Promise<ICreateBackupDto> => {
    const response = await api.post<ICreateBackupDto>(`/backup/create`);
    return response.data;
};

export default getCreateBackupRepository;
