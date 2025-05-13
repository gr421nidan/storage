import {api} from "@/shared/api";
import {IUpdateUsersPort} from "@/shared/interface/admin";

const updateUsersRepository = async (data: IUpdateUsersPort, userId: string): Promise<void> => {
    await api.patch(`/storage/users/${userId}/grants`, data);
};

export default updateUsersRepository;
