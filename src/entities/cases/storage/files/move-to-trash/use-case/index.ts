import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import moveToTrashFileRepository from "@/entities/repo/storage/files/move-to-trash";
import {enqueueSnackbar} from "notistack";

const useMoveToTrashFileUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (fileId: string) => moveToTrashFileRepository(fileId);
    return useMutation<void, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
            await queryClient.invalidateQueries({queryKey: [QueryKey.FOLDER]});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useMoveToTrashFileUseCase;