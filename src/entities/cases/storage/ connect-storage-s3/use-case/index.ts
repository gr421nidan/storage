import { useMutation } from "@tanstack/react-query";
import {IConnectStorageS3Port, IConnectStorageS3Dto} from "@/shared/interface/storage";
import {AxiosError, HttpStatusCode} from "axios";
import {enqueueSnackbar} from "notistack";
import {IApiErrorDto} from "@/shared/interface/auth";
import connectStorageS3Repository from "@/entities/repo/storage/connect-storage-s3";

const useConnectStorageS3UseCase = () => {
    const execute = (data: IConnectStorageS3Port) => connectStorageS3Repository(data);
    return useMutation<IConnectStorageS3Dto, AxiosError<IApiErrorDto>, IConnectStorageS3Port>({
        mutationFn: execute,
        onSuccess(){
                enqueueSnackbar("Подключение прошло успешно", {variant: 'successSnackbar'});
        },
        onError(error){
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === HttpStatusCode.Unauthorized) {
                    enqueueSnackbar("Неверный пароль", {variant: 'errorSnackbar'});
                }
            }
        }
    });
};

export default useConnectStorageS3UseCase;
