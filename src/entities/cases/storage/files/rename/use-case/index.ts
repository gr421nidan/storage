import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AxiosError, HttpStatusCode} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";
import renameFileRepository from "@/entities/repo/storage/files/rename";
import {IRenameFilePort} from "@/shared/interface/files";

const useRenameFileUseCase = (fileId: string) => {
    const queryClient = useQueryClient();

    const execute = (data: IRenameFilePort) => {
        return renameFileRepository(data, fileId);
    };

    return useMutation<void, AxiosError<IApiErrorDto>, IRenameFilePort>({
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

export default useRenameFileUseCase;
