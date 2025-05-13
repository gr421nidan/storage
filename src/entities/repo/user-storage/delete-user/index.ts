import { api } from "@/shared/api";

const deleteUserRepository = async (userId: string): Promise<void> => {
    await api.delete(`/storage/users/${userId}`);
};

export default deleteUserRepository;
