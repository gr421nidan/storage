import {api} from "@/shared/api";

const deleteFolderRepository = async (folderId: string): Promise<void> => {
    await api.delete(`/folder/delete-folder-trash/${folderId}`);
};
export default deleteFolderRepository;
