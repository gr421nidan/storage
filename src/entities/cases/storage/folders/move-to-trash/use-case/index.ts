import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import moveToTrashFolderRepository from "@/entities/repo/storage/folders/move-to-trash";
import {enqueueSnackbar} from "notistack";
import useInvalidateManyQueries from "@/shared/hooks/invalidate-many-queries";

const useMoveToTrashFolderUseCase = () => {
    const invalidateManyQueries = useInvalidateManyQueries();
    const execute = (folderId: string) => moveToTrashFolderRepository(folderId);
    return useMutation<void, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await invalidateManyQueries([
                [QueryKey.FILES_AND_FOLDERS],
                [QueryKey.FOLDER],
            ]);
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useMoveToTrashFolderUseCase;