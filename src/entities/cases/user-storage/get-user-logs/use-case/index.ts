import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import getUserLogsRepository from "@/entities/repo/user-storage/get-user-logs";
import {IFiltersLogsPort, IGetStorageUserLogDto} from "@/shared/interface/admin";
import QueryKey from "@/shared/common/enum/query-key";

const useGetUserLogsUseCase = (userId: string, filters: IFiltersLogsPort = {}) => {
    const execute = () => getUserLogsRepository(userId, filters);
    return useQuery<IGetStorageUserLogDto, AxiosError>({
        queryKey: [QueryKey.USER_LOGS, userId, filters],
        queryFn: execute,
        enabled: !!userId,
    });
};

export default useGetUserLogsUseCase;
