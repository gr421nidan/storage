import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {enqueueSnackbar} from "notistack";
import {ICreateBackupDto} from "@/shared/interface/backup";
import getCreateBackupRepository from "@/entities/repo/backup/create";
import {useCurrentStorage} from "@/shared/hooks/storage";

const useCreateBackupUseCase = () => {
    const queryClient = useQueryClient();
    const storageId = useCurrentStorage();
    const execute = () => getCreateBackupRepository(storageId);
    return useMutation<ICreateBackupDto, AxiosError<IApiErrorDto>>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.BACKUPS] });
            enqueueSnackbar("Резервная копия успешно создана.", {variant: "successSnackbar"});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("Нет прав для создания резервной копии.", {variant: 'errorSnackbar'});
            }
            if (error.status === HttpStatusCode.BadRequest) {
                enqueueSnackbar("Недостаточно места для осуществление операции.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useCreateBackupUseCase;