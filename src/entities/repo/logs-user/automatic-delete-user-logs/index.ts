import {api} from "@/shared/api";
import {IDeleteLogsPort} from "@/shared/interface/logs-user";

const automaticDeleteUserLogsRepository = async (userId: string, data: IDeleteLogsPort): Promise<void> => {
    await api.post(`logs/users/${userId}/cleanup`, data);
};
export default automaticDeleteUserLogsRepository;
