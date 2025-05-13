import {api} from "@/shared/api";
import {IAddUserPort} from "@/shared/interface/admin";

const addUserRepository = async (data: IAddUserPort): Promise<void> => {
    await api.post("/storage/add-user", data);
};
export default addUserRepository;
