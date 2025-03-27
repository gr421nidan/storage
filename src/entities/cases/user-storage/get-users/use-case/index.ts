import {IGetUserDto} from "@/shared/interface/admin";
import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import getUsersRepository from "@/entities/repo/user-storage/get-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetUsersUseCase = (search?: string) => {
    const execute = () => getUsersRepository(search);
    const { data, ...rest } = useQuery<IGetUserDto[], AxiosError>({
        queryKey: [QueryKey.USERS_STORAGE, search],
        queryFn: execute,
        enabled: search !== undefined,
    });
    return {
        data: data ?? [],
        ...rest,
    };
};

export default useGetUsersUseCase;
