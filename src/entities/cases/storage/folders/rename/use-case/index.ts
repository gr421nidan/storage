import {useMutation} from "@tanstack/react-query";
import {AxiosError, HttpStatusCode} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";
import {IRenameStorageFolderPort} from "@/shared/interface/folders";
import renameFolderRepository from "@/entities/repo/storage/folders/rename";
import useInvalidateManyQueries from "@/shared/hooks/invalidate-many-queries";

const useRenameFolderUseCase = (folderId: string) => {
    const invalidateManyQueries = useInvalidateManyQueries();

    const execute = (data: IRenameStorageFolderPort) => {
        return renameFolderRepository(data, folderId);
    };

    return useMutation<void, AxiosError<IApiErrorDto>, IRenameStorageFolderPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await invalidateManyQueries([
                [QueryKey.FILES_AND_FOLDERS],
                [QueryKey.FOLDER],
            ]);
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", { variant: 'errorSnackbar' });
            }
        },
    });
};

export default useRenameFolderUseCase;
