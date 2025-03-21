import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import {IGetAllUsersDto} from "@/shared/type/admin/get-all-users";
import getAllUsersRepository from "@/entities/repo/storage/get-users";


const useGetAllUsersUseCase = () => {
    const { data, error } = useQuery<IGetAllUsersDto[], AxiosError>({
        queryKey: ["users"],
        queryFn: getAllUsersRepository,
    });
    return {
        data: data ?? [],
        error,
    };
};

export default useGetAllUsersUseCase;
