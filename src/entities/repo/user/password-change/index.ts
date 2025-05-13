import {api} from "@/shared/api";
import {IPasswordUserChangePort} from "@/shared/interface/user";

const changePasswordRepository = async (data: IPasswordUserChangePort): Promise<void> => {
    await api.patch("/user/change-password", data);
};

export default changePasswordRepository;