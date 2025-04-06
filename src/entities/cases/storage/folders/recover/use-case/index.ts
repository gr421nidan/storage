import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {enqueueSnackbar} from "notistack";
import {IActionFolderDto} from "@/shared/interface/folders";
import recoverFolderRepository from "@/entities/repo/storage/folders/recover";

const useRecoverFolderUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (folderId: string) => recoverFolderRepository(folderId);
    return useMutation<AxiosResponse<IActionFolderDto>, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
            if (data.status === HttpStatusCode.Ok) {
                enqueueSnackbar("Папка восстановлена", {variant: 'successSnackbar'});
            }
        },
    });
};

export default useRecoverFolderUseCase;