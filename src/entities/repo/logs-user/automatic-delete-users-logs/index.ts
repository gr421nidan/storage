import {api} from "@/shared/api";
import {IDeleteLogsPort} from "@/shared/interface/logs-user";

const automaticDeleteUsersLogsRepository = async (data: IDeleteLogsPort): Promise<void> => {
    await api.post(`logs/users/cleanup`, data);
};
export default automaticDeleteUsersLogsRepository;
