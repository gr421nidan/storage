import {api} from "@/shared/api";

const unblockUserRepository = async (userId: string): Promise<void> => {
    await api.post(`/storage/users/${userId}/unblock`);
};

export default unblockUserRepository;
