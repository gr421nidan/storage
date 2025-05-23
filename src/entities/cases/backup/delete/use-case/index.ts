import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import deleteBackupRepository from "@/entities/repo/backup/delete";
import {enqueueSnackbar} from "notistack";
import useInvalidateManyQueries from "@/shared/hooks/invalidate-many-queries";

const useDeleteBackupUseCase = () => {
    const invalidateManyQueries = useInvalidateManyQueries();
    const execute = (backupId: string) => deleteBackupRepository(backupId);
    return useMutation<void, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await invalidateManyQueries([
                [QueryKey.FILES_AND_FOLDERS],
                [QueryKey.BACKUPS],
            ]);
            enqueueSnackbar("Резервная копия успешно удалена", {variant: "successSnackbar"});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("Вы не являетесь владельцем этой резервной копии", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useDeleteBackupUseCase;