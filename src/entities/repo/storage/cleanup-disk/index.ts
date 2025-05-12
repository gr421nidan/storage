import { api } from "@/shared/api";

const cleanupDiskRepository = async (): Promise<void> => {
    const response = await api.delete("/storage/clear");
    return response.data;
};

export default cleanupDiskRepository;