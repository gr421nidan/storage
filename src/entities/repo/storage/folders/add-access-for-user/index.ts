import {api} from "@/shared/api";
import {IAddAccessForUserPort} from "@/shared/interface/folders";

const addAccessForUserRepository = async (data: IAddAccessForUserPort, folderId: string): Promise<void> => {
    await api.post(`/folder/${folderId}/access`, data);
};
export default addAccessForUserRepository;
