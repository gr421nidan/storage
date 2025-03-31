// import {useMutation, useQueryClient} from "@tanstack/react-query";
// import {AxiosError} from "axios";
// import {IApiErrorDto} from "@/shared/interface/auth";
// import {IGetStorageFileDto, IUploadFilePort} from "@/shared/interface/storage";
// import uploadFileRepository from "@/entities/repo/storage/files/upload-files";
// import {enqueueSnackbar} from "notistack";
// import QueryKey from "@/shared/common/enum/query-key";
//
// const useUploadFileUseCase = () => {
//     const queryClient = useQueryClient();
//     const execute = (data: IUploadFilePort) => uploadFileRepository(data.file);
//     return useMutation<IGetStorageFileDto, AxiosError<IApiErrorDto>, IUploadFilePort>({
//         mutationFn: execute,
//         onSuccess: async () => {
//             await queryClient.invalidateQueries({queryKey: [QueryKey.FILES_AND_FOLDERS]});
//             enqueueSnackbar("Файл успешно загружен", {variant: "successSnackbar"});
//         },
//         onError(error) {
//             if (error instanceof AxiosError && error.response) {
//                 enqueueSnackbar("Ошибка загрузки файла", {variant: "errorSnackbar"});
//             }
//         },
//     });
// };
//
// export default useUploadFileUseCase;
