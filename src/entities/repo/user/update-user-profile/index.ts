import {api} from "@/shared/api";
import {IUpdateUserPort} from "@/shared/interface/user";

const updateUserRepository = async (data: IUpdateUserPort): Promise<void> => {
    await api.patch("/user/me", data);
};

export default updateUserRepository;
