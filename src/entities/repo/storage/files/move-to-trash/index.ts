import {api} from "@/shared/api";

const moveToTrashFileRepository = async (fileId: string): Promise<void> => {
    await api.patch(`/file/file-delete/${fileId}`);
};
export default moveToTrashFileRepository;
