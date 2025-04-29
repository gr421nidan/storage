import { useQuery } from "@tanstack/react-query";
import getUsersWithAccessRepository from "@/entities/repo/storage/folders/get-users-with-access";
import QueryKey from "@/shared/common/enum/query-key";

const useGetUsersWithAccessUseCase = (folderId: string) => {
    const execute = () => getUsersWithAccessRepository(folderId);

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.ACCESS_USERS, folderId],
        queryFn: execute,
        enabled: !!folderId,
    });

    return {
        users: data?.users || [],
        ...rest,
    };
};

export default useGetUsersWithAccessUseCase;
