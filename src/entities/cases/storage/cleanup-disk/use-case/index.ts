import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import cleanupDiskRepository from "@/entities/repo/storage/cleanup-disk";
import {enqueueSnackbar} from "notistack";
import useInvalidateManyQueries from "@/shared/hooks/invalidate-many-queries";

const useCleanupDiskUseCase = () => {
    const invalidateManyQueries = useInvalidateManyQueries();

    const execute = () => cleanupDiskRepository();
    return useMutation<void, AxiosError<IApiErrorDto>>({
        mutationFn: execute,
        onSuccess: async () => {
            await invalidateManyQueries([
                [QueryKey.FILES_AND_FOLDERS],
                [QueryKey.FOLDER],
                [QueryKey.STORAGE_SIZE],
                [QueryKey.TRASH],
            ]);
            enqueueSnackbar("Хранилище успешно очищено", {variant: "successSnackbar"});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Conflict) {
                enqueueSnackbar("В хранилище пусто", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useCleanupDiskUseCase;