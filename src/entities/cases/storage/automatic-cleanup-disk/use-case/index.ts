import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionStorageDto, IAutomaticCleanupDiskPort} from "@/shared/interface/storage";
import {useCurrentStorage} from "@/shared/hooks/storage";
import {enqueueSnackbar} from "notistack";
import automaticCleanupDiskRepository from "@/entities/repo/storage/automatic-cleanup-disk";

const useAutomaticCleanupDiskUseCase = () => {
    const queryClient = useQueryClient();
    const storageId = useCurrentStorage();
    const execute = (data:IAutomaticCleanupDiskPort) => automaticCleanupDiskRepository(storageId, data);
    return useMutation<IActionStorageDto, AxiosError<IApiErrorDto>, IAutomaticCleanupDiskPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.STORAGE] });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("Недостаточно прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useAutomaticCleanupDiskUseCase;