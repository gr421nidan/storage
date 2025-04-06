import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AxiosError, HttpStatusCode} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";
import CurrentStorage from "@/shared/hooks/storage";
import {ICreateStorageFolderDto, ICreateStorageFolderPort} from "@/shared/interface/folders";
import createFolderRepository from "@/entities/repo/storage/folders/create";

const useCreateFolderUseCase = () => {
    const storageId = CurrentStorage();
    const queryClient = useQueryClient();
    const execute = (data: ICreateStorageFolderPort) => {
        if (!storageId) {
            return Promise.reject(new Error("Storage ID не найден"));
        }
        return createFolderRepository(data, storageId);
    };
    return useMutation<ICreateStorageFolderDto, AxiosError<IApiErrorDto>, ICreateStorageFolderPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.FILES_AND_FOLDERS]});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Conflict) {
                enqueueSnackbar("Папка с таким названием уже существует", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useCreateFolderUseCase;
