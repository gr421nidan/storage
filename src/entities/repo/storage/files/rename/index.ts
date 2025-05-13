import {api} from "@/shared/api";
import {IRenameFilePort} from "@/shared/interface/files";

const renameFileRepository = async (data: IRenameFilePort, fileId: string): Promise<void> => {
    await api.patch(`/file/rename-file/${fileId}`, data);
};
export default renameFileRepository;
