import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import {IGetStorageFilesDto, IUploadFilePort} from "@/shared/interface/storage";
import uploadFileRepository from "@/entities/repo/storage/upload-files";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";

const useUploadFileUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (data: IUploadFilePort) => uploadFileRepository(data.file);
    return useMutation<IGetStorageFilesDto, AxiosError<IApiErrorDto>, IUploadFilePort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.FILES]});
            enqueueSnackbar("Файл успешно загружен", {variant: "successSnackbar"});
        },
        onError(error) {
            if (error instanceof AxiosError && error.response) {
                enqueueSnackbar("Ошибка загрузки файла", {variant: "errorSnackbar"});
            }
        },
    });
};

export default useUploadFileUseCase;
