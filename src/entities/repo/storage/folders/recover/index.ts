import {api} from "@/shared/api";

const recoverFolderRepository = async (folderId: string): Promise<void> => {
    await api.patch(`/folder/restore-folder/${folderId}`);
};
export default recoverFolderRepository;
