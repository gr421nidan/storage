import {IGetUserDto, IGetUsersParams} from "@/shared/interface/admin";
import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import getUsersRepository from "@/entities/repo/user-storage/get-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetUsersUseCase = ({ search, grant_id, is_active }:IGetUsersParams) => {
    const execute = () => getUsersRepository({ search, grant_id, is_active });
    const { data, ...rest } = useQuery<IGetUserDto[], AxiosError>({
        queryKey: [QueryKey.USERS_STORAGE, search, grant_id, is_active],
        queryFn: execute,
    });
    return {
        data: data ?? [],
        ...rest,
    };
};

export default useGetUsersUseCase;
