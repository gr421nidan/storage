import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import { AxiosError } from "axios";
import { IAddUserDto, IAddUserPort } from "@/shared/type/admin";
import addUserRepository from "@/entities/repo/user-storage/add-user";
import {enqueueSnackbar} from "notistack";



const useAddUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (data: IAddUserPort) => addUserRepository(data);
    return useMutation<IAddUserDto, AxiosError<IApiErrorDto>, IAddUserPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["usersStorage"] });
        },
        onError(error){
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 409) {
                    enqueueSnackbar("Пользователь с данной почтой уже добавлен в хранилище", {variant: 'errorSnackbar'});
                }
            }
        }
    });
};

export default useAddUserUseCase;
