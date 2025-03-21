import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import {AxiosError, HttpStatusCode} from "axios";
import deleteUserRepository from "@/entities/repo/user-storage/delete-user";
import {enqueueSnackbar} from "notistack";
import {IDeleteUserDto} from "@/shared/type/admin";



const useDeleteUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => deleteUserRepository(userId);
    return useMutation<IDeleteUserDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: ["usersStorage"] });
            if (data.status === HttpStatusCode.Ok) {
                enqueueSnackbar("Пользователь удалён", {variant: 'successSnackbar'});
            }
        },
    });
};

export default useDeleteUserUseCase;