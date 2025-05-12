import {api} from "@/shared/api";
import {IGetBackupNextDateDto} from "@/shared/interface/backup";

const getDateNextBackupRepository = async (storageId: string): Promise<IGetBackupNextDateDto> => {
    const response = await api.get(`/backup/${storageId}`);
    return response.data;
};
export default getDateNextBackupRepository;
