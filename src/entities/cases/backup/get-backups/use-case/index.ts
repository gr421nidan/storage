import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getBackupsRepository from "@/entities/repo/backup/get-backups";

const useGetBackupsUseCase = () => {
    const execute = async () => {
        const {backups} = await getBackupsRepository();
        return {backups};
    };

    const {data, ...rest} = useQuery({
        queryKey: [QueryKey.BACKUPS],
        queryFn: execute,
    });

    return {
        backups: data || [],
        ...rest,
    };
};

export default useGetBackupsUseCase;