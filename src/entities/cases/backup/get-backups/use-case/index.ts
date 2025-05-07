import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getBackupsRepository from "@/entities/repo/backup/get-backups";
import formatedDate from "@/shared/utils/formatedDate";
import {IBackupDto} from "@/shared/interface/backup";
import {formatSize} from "@/shared/utils/convertSize";

const useGetBackupsUseCase = () => {
    const execute = async () => {
        return (await getBackupsRepository()).map((backup: IBackupDto) => ({
            ...backup,
            backup_time: formatedDate(backup.backup_time),
            size: formatSize(backup.size)
        }));
    };
    const {data, ...rest} = useQuery({
        queryKey: [QueryKey.BACKUPS],
        queryFn: execute,
    });

    return {
        data: data || [],
        ...rest,
    };
};

export default useGetBackupsUseCase;