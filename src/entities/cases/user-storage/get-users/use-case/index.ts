import {IGetUserDto} from "@/shared/type/admin";
import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import getUsersRepository from "@/entities/repo/user-storage/get-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetUsersUseCase = () => {
    const { data, error } = useQuery<IGetUserDto[], AxiosError>({
        queryKey: [QueryKey.USERS_STORAGE],
        queryFn: getUsersRepository,
    });
    return {
        data: data ?? [],
        error,
    };
};

export default useGetUsersUseCase;
