import {api} from "@/shared/api";
import {IChooseAccessForFolderPort} from "@/shared/interface/folders";

const chooseAccessForFolderRepository = async (folderId: string, data: IChooseAccessForFolderPort): Promise<void> => {
    await api.patch(`/folder/${folderId}/access`, data);
};
export default chooseAccessForFolderRepository;
