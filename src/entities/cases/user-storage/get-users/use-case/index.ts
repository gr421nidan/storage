import { IGetUserDto, IGetUsersPort } from "@/shared/interface/admin";
import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import getUsersRepository from "@/entities/repo/user-storage/get-users";
import QueryKey from "@/shared/common/enum/query-key";

const useGetUsersUseCase = ({ search, grant_id, is_active }: IGetUsersPort) => {

    const execute = async ()=>{
        const params = {search,grant_id,is_active};
        return getUsersRepository(params);
    };

    const { data, ...rest } = useQuery<IGetUserDto[], AxiosError>({
        queryKey: [QueryKey.USERS_STORAGE, search, grant_id, is_active],
        queryFn: execute,
        select: (users) => users ?? [],
    });

    return { data, ...rest };
};

export default useGetUsersUseCase;