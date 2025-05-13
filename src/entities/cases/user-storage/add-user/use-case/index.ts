import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import {IAddUserPort } from "@/shared/interface/admin";
import addUserRepository from "@/entities/repo/user-storage/add-user";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";

const useAddUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (data: IAddUserPort) => addUserRepository(data);
    return useMutation<void, AxiosError<IApiErrorDto>, IAddUserPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USERS_STORAGE] });
        },
        onError(error){
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === HttpStatusCode.Conflict) {
                    enqueueSnackbar("Пользователь с данной почтой уже добавлен в хранилище", {variant: 'errorSnackbar'});
                }
            }
        }
    });
};

export default useAddUserUseCase;
