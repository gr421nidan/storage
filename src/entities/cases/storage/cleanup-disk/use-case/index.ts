import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {enqueueSnackbar} from "notistack";
import cleanupDiskRepository from "@/entities/repo/storage/cleanup-disk";
import {ICleanupDiskDto} from "@/shared/interface/storage";

const useCleanupDiskUseCase = () => {
    const queryClient = useQueryClient();
    const execute = () => cleanupDiskRepository();
    return useMutation<AxiosResponse<ICleanupDiskDto>, AxiosError<IApiErrorDto>>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useCleanupDiskUseCase;