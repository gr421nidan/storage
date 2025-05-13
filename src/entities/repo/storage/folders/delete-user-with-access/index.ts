import {api} from "@/shared/api";
import {IDeleteUserWithAccessPort} from "@/shared/interface/folders";

const deleteUserWithAccessRepository = async ({userId, folderId}: IDeleteUserWithAccessPort): Promise<void> => {
    await api.delete(`/folder/${folderId}/access/${userId}`);
};
export default deleteUserWithAccessRepository;
