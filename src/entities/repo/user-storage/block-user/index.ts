import {api} from "@/shared/api";

const blockUserRepository = async (userId: string): Promise<void> => {
    await api.post(`/storage/users/${userId}/block`);
};
export default blockUserRepository;
