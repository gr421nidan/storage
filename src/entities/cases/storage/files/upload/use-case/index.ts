import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AxiosError, HttpStatusCode} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import {IUploadFilePort, IUploadStorageFileDto} from "@/shared/interface/files";
import uploadFileRepository from "@/entities/repo/storage/files/upload-files";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";
import CurrentStorage from "@/shared/hooks/storage";
import uploadFileInFolderRepository from "@/entities/repo/storage/files/upload-in-folder";

const useUploadFileUseCase = () => {
    const storageId = CurrentStorage();
    const queryClient = useQueryClient();
    const execute = (data: IUploadFilePort) => {
        const { folderId } = data;
        if (folderId) {
            return uploadFileInFolderRepository(data, folderId);
        } else {
            if (!storageId) {
                return Promise.resolve([]);
            }
            return uploadFileRepository(data, storageId);
        }
    };
    return useMutation<IUploadStorageFileDto[], AxiosError<IApiErrorDto>, IUploadFilePort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.FILES_AND_FOLDERS]});
            await queryClient.invalidateQueries({ queryKey: [QueryKey.STORAGE_SIZE] });
            enqueueSnackbar("Файлы успешно загружены", {variant: "successSnackbar"});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.BadRequest) {
                enqueueSnackbar("Недопустимый тип файла. Разрешенные расширения JPG, JPEG PNG, GIF, ODT, DOC, DOCX, TXT, AAC, AVI, FLAC, MP3, MP4, WAV", {variant: 'errorSnackbar'});
            }
            if (error.status === HttpStatusCode.PayloadTooLarge) {
                enqueueSnackbar("Недопустимый размер файла.", {variant: 'errorSnackbar'});
            }
            if (error.status === HttpStatusCode.Conflict) {
                enqueueSnackbar("Файл с таким названием уже существует.", {variant: 'errorSnackbar'});
            }
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useUploadFileUseCase;
