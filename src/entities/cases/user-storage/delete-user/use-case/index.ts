import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import {AxiosError, AxiosResponse, HttpStatusCode} from "axios";
import deleteUserRepository from "@/entities/repo/user-storage/delete-user";
import {enqueueSnackbar} from "notistack";
import {IDeleteUserDto} from "@/shared/type/admin";
import QueryKey from "@/shared/common/enum/query-key";

const useDeleteUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => deleteUserRepository(userId);
    return useMutation<AxiosResponse<IDeleteUserDto>, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USERS_STORAGE] });
            if (data.status === HttpStatusCode.Ok) {
                enqueueSnackbar("Пользователь удалён", {variant: 'successSnackbar'});
            }
        },
    });
};

export default useDeleteUserUseCase;