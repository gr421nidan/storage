import {api} from "@/shared/api";
import {IDeleteLogsDto} from "@/shared/interface/logs";

const deleteUserLogsRepository = async (userId: string): Promise<IDeleteLogsDto> => {
    const response = await api.delete<IDeleteLogsDto>(`/logs/users/${userId}`);
    return response.data;

};
export default deleteUserLogsRepository;
