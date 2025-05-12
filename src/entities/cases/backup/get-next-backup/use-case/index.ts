import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import {useCurrentStorage} from "@/shared/hooks/storage";
import getDateNextBackupRepository from "@/entities/repo/backup/get-next-backup";
import formatedDate from "@/shared/utils/formatedDate";

const useGetDateNextBackupUseCase = () => {
    const storageId = useCurrentStorage();
    const execute = async () => {
        const data = await getDateNextBackupRepository(storageId);
        return data.next_backup_date
            ? formatedDate(data.next_backup_date)
            : "Не назначено";
    }
    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.BACKUP_DATE, storageId],
        queryFn: execute,
        enabled: !!storageId,
    });
    return {
        formattedDate: data,
        ...rest
    };
};
export default useGetDateNextBackupUseCase;