import {api} from "@/shared/api";

const recoverFileRepository = async (fileId: string): Promise<void> => {
    await api.patch(`/file/restore-file/${fileId}`);
};
export default recoverFileRepository;
