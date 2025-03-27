import {IGetUserDto} from "@/shared/interface/admin";
import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import getUsersRepository from "@/entities/repo/user-storage/get-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetUsersUseCase = () => {
    const execute=getUsersRepository;
    const { data, ...rest } = useQuery<IGetUserDto[], AxiosError>({
        queryKey: [QueryKey.USERS_STORAGE],
        queryFn: execute,
    });
    return {
        data: data ?? [],
        ...rest,
    };
};

export default useGetUsersUseCase;
