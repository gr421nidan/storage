import {api} from "@/shared/api";

const deleteFileRepository = async (fileId: string): Promise<void> => {
    await api.delete(`/file/delete-file-trash/${fileId}`);

};
export default deleteFileRepository;
