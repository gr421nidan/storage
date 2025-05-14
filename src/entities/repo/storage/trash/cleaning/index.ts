import {api} from "@/shared/api";

const cleaningTrashRepository = async (storageId: string): Promise<void> => {
    await api.delete(`/file/clear-trash/${storageId}`);

};
export default cleaningTrashRepository;
