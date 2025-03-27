import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import {IGetAllUsersDto} from "@/shared/interface/admin/get-all-users";
import getAllUsersRepository from "../../../../repo/user/get-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetAllUsersUseCase = () => {
    const execute=getAllUsersRepository;
    const { data, ...rest } = useQuery<IGetAllUsersDto[], AxiosError>({
        queryKey: [QueryKey.USERS],
        queryFn: execute,
    });
    return {
        data: data ?? [],
        ...rest,
    };
};

export default useGetAllUsersUseCase;
