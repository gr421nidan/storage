import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AxiosError, HttpStatusCode} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionFolderDto, IRenameStorageFolderPort} from "@/shared/interface/folders";
import renameFolderRepository from "@/entities/repo/storage/folders/rename";

const useRenameFolderUseCase = (folderId: string) => {
    const queryClient = useQueryClient();

    const execute = (data: IRenameStorageFolderPort) => {
        return renameFolderRepository(data, folderId);
    };

    return useMutation<IActionFolderDto, AxiosError<IApiErrorDto>, IRenameStorageFolderPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FOLDER] });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", { variant: 'errorSnackbar' });
            }
        },
    });
};

export default useRenameFolderUseCase;
