import {IGetUserDto} from "@/shared/type/admin";
import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import getUsersRepository from "@/entities/repo/user-storage/get-users";

const useGetUsersUseCase = () => {
    const { data, error } = useQuery<IGetUserDto[], AxiosError>({
        queryKey: ["usersStorage"],
        queryFn: getUsersRepository,
    });
    return {
        data: data ?? [],
        error,
    };
};

export default useGetUsersUseCase;
