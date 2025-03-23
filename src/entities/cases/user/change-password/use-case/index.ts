import { useMutation } from "@tanstack/react-query";
import changePasswordRepository from "@/entities/repo/user/password-change";
import { IPasswordUserChangePort } from "@/shared/type/user";
import {AxiosError, HttpStatusCode} from "axios";
import {enqueueSnackbar} from "notistack";

const useChangePasswordUseCase = () => {
    const execute = (data: IPasswordUserChangePort) => changePasswordRepository(data);
    return useMutation({
        mutationFn: execute,
        onError(error){
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === HttpStatusCode.Conflict) {
                    enqueueSnackbar("Неверный пароль", {variant: 'errorSnackbar'});
                }
                if (error.response.status === HttpStatusCode.Conflict) {
                    enqueueSnackbar("Введенный пароль совпадает с текущим", {variant: 'errorSnackbar'});
                }
            }
        }
    });
};

export default useChangePasswordUseCase;
