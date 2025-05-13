import {api} from "@/shared/api";

const deleteUserLogsRepository = async (userId: string): Promise<void> => {
     await api.delete(`/logs/users/${userId}`);
};
export default deleteUserLogsRepository;
