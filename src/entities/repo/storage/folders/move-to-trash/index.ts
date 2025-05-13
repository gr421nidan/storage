import {api} from "@/shared/api";

const moveToTrashFolderRepository = async (folderId: string): Promise<void> => {
    await api.patch(`/folder/folder-delete/${folderId}`);
};
export default moveToTrashFolderRepository;
