import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import getUserLogsRepository from "@/entities/repo/user-storage/get-user-logs";
import { IGetStorageUserLogDto } from "@/shared/interface/admin";
import QueryKey from "@/shared/common/enum/query-key";

const useGetUserLogsUseCase = (userId: string) => {
    return useQuery<IGetStorageUserLogDto, AxiosError>({
        queryKey: [QueryKey.USER_LOGS, userId],
        queryFn: () => getUserLogsRepository(userId),
        enabled: Boolean(userId),
    });
};

export default useGetUserLogsUseCase;
