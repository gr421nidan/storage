import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import {IGetAllUsersDto, IGetAllUsersPort} from "@/shared/interface/admin/get-all-users";
import getAllUsersRepository from "@/entities/repo/user/get-all-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetAllUsersUseCase = (params?: IGetAllUsersPort) => {
    const execute = () => getAllUsersRepository(params);
    const {data, ...rest} = useQuery<IGetAllUsersDto[], AxiosError>({
        queryKey: [QueryKey.USERS, params],
        queryFn: execute,
        enabled: !!params?.email,
    });
    return {
        data: data ?? [],
        ...rest,
    };
};

export default useGetAllUsersUseCase;
