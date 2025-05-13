import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {useCurrentStorage} from "@/shared/hooks/storage";
import updateBackupStatusRepository from "@/entities/repo/backup/update-backup-status";
import {enqueueSnackbar} from "notistack";
import {IUpdateBackupStatusPort} from "@/shared/interface/backup";

const useUpdateBackupStatusUseCase = () => {
    const queryClient = useQueryClient();
    const storageId = useCurrentStorage();
    const execute = (data:IUpdateBackupStatusPort) => updateBackupStatusRepository(storageId, data);
    return useMutation<void, AxiosError<IApiErrorDto>, IUpdateBackupStatusPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.STORAGE] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.BACKUP_DATE] });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("Недостаточно прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useUpdateBackupStatusUseCase;