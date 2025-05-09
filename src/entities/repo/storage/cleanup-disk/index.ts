import { api } from "@/shared/api";

const cleanupDiskRepository = async (): Promise<void> => {
    await api.delete("/storage/clear");
};

export default cleanupDiskRepository;