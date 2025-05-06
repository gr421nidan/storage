import { ICreateBackupDto } from "@/shared/interface/backup";
import {api} from "@/shared/api";

const getCreateBackupRepository = async (storageId: string): Promise<ICreateBackupDto> => {
    const response = await api.post<ICreateBackupDto>(`/backup/${storageId}`);
    return response.data;
};

export default getCreateBackupRepository;
