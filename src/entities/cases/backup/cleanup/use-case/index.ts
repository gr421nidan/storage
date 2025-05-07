import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionBackupDto} from "@/shared/interface/backup";
import {useCurrentStorage} from "@/shared/hooks/storage";
import cleanupBackupsRepository from "@/entities/repo/backup/cleanup";

const useCleanupBackupsUseCase = () => {
    const queryClient = useQueryClient();
    const storageId = useCurrentStorage();
    const execute = () => {
        return cleanupBackupsRepository(storageId);
    };
    return useMutation<IActionBackupDto, AxiosError<IApiErrorDto>>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.BACKUPS]});
        },
    });
};

export default useCleanupBackupsUseCase;