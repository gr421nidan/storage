import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import {IGetAllUsersDto} from "@/shared/interface/admin/get-all-users";
import getAllUsersRepository from "@/entities/repo/user/get-all-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetAllUsersUseCase = (query?: string) => {
    const execute = () => getAllUsersRepository(query);
    const {data, ...rest} = useQuery<IGetAllUsersDto[], AxiosError>({
        queryKey: [QueryKey.USERS, query],
        queryFn: execute,
        enabled: !!query,
    });
    return {
        data: data ?? [],
        ...rest,
    };
};

export default useGetAllUsersUseCase;
