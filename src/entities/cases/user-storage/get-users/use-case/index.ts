import {IGetUserDto} from "@/shared/type/admin";
import {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import getUsers from "@/entities/repo/user-storage/get-users";


const useGetUsersUseCase = () => {
    const { data, error } = useQuery<IGetUserDto[], AxiosError>({
        queryKey: ["users"],
        queryFn: getUsers,
    });
    return {
        data: data ?? [],
        error,
    };
};

export default useGetUsersUseCase;
