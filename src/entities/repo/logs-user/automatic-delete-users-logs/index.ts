import {api} from "@/shared/api";
import {IDeleteLogsDto, IDeleteLogsPort} from "@/shared/interface/logs-user";

const automaticDeleteUsersLogsRepository = async (data: IDeleteLogsPort): Promise<IDeleteLogsDto> => {
    const response = await api.post<IDeleteLogsDto>(`logs/users/cleanup`, data);
    return response.data;

};
export default automaticDeleteUsersLogsRepository;
