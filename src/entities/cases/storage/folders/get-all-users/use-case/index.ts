import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import {IGetAllUsersDto, IGetAllUsersPort} from "@/shared/interface/admin/get-all-users";
import QueryKey from "@/shared/common/enum/query-key";
import getAllUsersForAccessRepository from "@/entities/repo/storage/folders/get-all-users";

const useGetAllUsersForAccessUseCase = (params?: IGetAllUsersPort) => {
    const execute = () => getAllUsersForAccessRepository(params);
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

export default useGetAllUsersForAccessUseCase;
