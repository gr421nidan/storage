import { api } from "@/shared/api";
import {IGetUserDto, IGetUsersParams} from "@/shared/interface/admin";
import {EGrantID} from "@/shared/enum/admin";

const getUsersRepository = async ({ search, grant_id, is_active }: IGetUsersParams): Promise<IGetUserDto[]> => {
    const params: Record<string, string | EGrantID | boolean> = {};
    if (search) params.surname = search;
    if (grant_id !== undefined) params.grant_id = grant_id;
    if (is_active !== undefined) params.is_active = is_active;
    const response = await api.get<IGetUserDto[]>("/storage/users", {
        params,
    });

    return response.data;
};

export default getUsersRepository;
