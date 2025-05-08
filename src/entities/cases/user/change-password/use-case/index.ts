import { useMutation } from "@tanstack/react-query";
import changePasswordRepository from "@/entities/repo/user/password-change";
import { IPasswordUserChangePort, IUpdateUserDto } from "@/shared/interface/user";
import { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import { enqueueSnackbar } from "notistack";
import { IApiErrorDto } from "@/shared/interface/auth";

const useChangePasswordUseCase = () => {
    const execute = (data: IPasswordUserChangePort) => changePasswordRepository(data);

    return useMutation<AxiosResponse<IUpdateUserDto>, AxiosError<IApiErrorDto>, IPasswordUserChangePort>({
        mutationFn: execute,
        onSuccess() {
            enqueueSnackbar("Данные изменены", { variant: "successSnackbar" });
        },
        onError(error) {
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === HttpStatusCode.Unauthorized) {
                    enqueueSnackbar("Неверный пароль", { variant: "errorSnackbar" });
                }
                if (error.response.status === HttpStatusCode.BadRequest) {
                    enqueueSnackbar("Введенный пароль совпадает с текущим", { variant: "errorSnackbar" });
                }
            }
        },
    });
};

export default useChangePasswordUseCase;
