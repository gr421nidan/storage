import {useMutation, useQueryClient} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import downloadFolderRepository from "@/entities/repo/storage/folders/download";
import {IDownloadFolderDto} from "@/shared/interface/folders";
import {AxiosError, HttpStatusCode} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import {enqueueSnackbar} from "notistack";

const useDownloadFolderUseCase = () => {
    const queryClient = useQueryClient();
    const execute = async (folderId: string) =>  downloadFolderRepository( folderId);
    return useMutation<IDownloadFolderDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FOLDER] });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас нет доступа на эту папку", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useDownloadFolderUseCase;
