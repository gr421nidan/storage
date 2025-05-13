import {api} from "@/shared/api";
import {IRenameStorageFolderPort} from "@/shared/interface/folders";

const renameFolderRepository = async (data: IRenameStorageFolderPort, folderId: string): Promise<void> => {
    await api.patch(`/folder/rename-folder/${folderId}`, data);
};
export default renameFolderRepository;
