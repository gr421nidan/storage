import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionFolderDto} from "@/shared/interface/folders";
import moveToTrashFolderRepository from "@/entities/repo/storage/folders/move-to-trash";
import {enqueueSnackbar} from "notistack";

const useMoveToTrashFolderUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (folderId: string) => moveToTrashFolderRepository(folderId);
    return useMutation<AxiosResponse<IActionFolderDto>, AxiosError<IApiErrorDto>, string>({
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

export default useMoveToTrashFolderUseCase;