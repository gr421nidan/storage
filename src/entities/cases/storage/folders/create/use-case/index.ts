import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AxiosError, HttpStatusCode} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";
import CurrentStorage from "@/shared/hooks/storage";
import {ICreateStorageFolderDto, ICreateStorageFolderPort} from "@/shared/interface/folders";
import createFolderRepository from "@/entities/repo/storage/folders/create";

const useCreateFolderUseCase = () => {
    const storageId = CurrentStorage() as string;
    const queryClient = useQueryClient();
    const execute = (data: ICreateStorageFolderPort) => {
        return createFolderRepository(data, storageId);
    };
    return useMutation<ICreateStorageFolderDto, AxiosError<IApiErrorDto>, ICreateStorageFolderPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.FILES_AND_FOLDERS]});
            await queryClient.invalidateQueries({queryKey: [QueryKey.FOLDER]});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Conflict) {
                enqueueSnackbar("Папка с таким названием уже существует", {variant: 'errorSnackbar'});
            }
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useCreateFolderUseCase;
