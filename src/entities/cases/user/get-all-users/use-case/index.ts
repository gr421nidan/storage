import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import {IGetAllUsersDto} from "@/shared/interface/admin/get-all-users";
import getAllUsersRepository from "@/entities/repo/storage/get-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetAllUsersUseCase = () => {
    const { data, error } = useQuery<IGetAllUsersDto[], AxiosError>({
        queryKey: [QueryKey.USERS],
        queryFn: getAllUsersRepository,
    });
    return {
        data: data ?? [],
        error,
    };
};

export default useGetAllUsersUseCase;
