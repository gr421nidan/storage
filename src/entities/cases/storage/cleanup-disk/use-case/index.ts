import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import cleanupDiskRepository from "@/entities/repo/storage/cleanup-disk";
import {enqueueSnackbar} from "notistack";

const useCleanupDiskUseCase = () => {
    const queryClient = useQueryClient();
    const execute = () => cleanupDiskRepository();
    return useMutation<void, AxiosError<IApiErrorDto>>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FOLDER] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.STORAGE_SIZE] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
            enqueueSnackbar("Хранилище успешно очищено", {variant: "successSnackbar"});
        },
    });
};

export default useCleanupDiskUseCase;