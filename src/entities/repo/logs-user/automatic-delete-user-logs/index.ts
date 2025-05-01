import {api} from "@/shared/api";
import {IDeleteLogsDto, IDeleteLogsPort} from "@/shared/interface/logs-user";

const automaticDeleteUserLogsRepository = async (userId:string, data: IDeleteLogsPort): Promise<IDeleteLogsDto> => {
    const response = await api.post<IDeleteLogsDto>(`logs/users/${userId}/cleanup`, {data});
    return response.data;

};
export default automaticDeleteUserLogsRepository;
