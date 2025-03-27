import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse, HttpStatusCode} from "axios";
import {IUpdateUsersDto, IUpdateUsersPort} from "@/shared/interface/admin";
import QueryKey from "@/shared/common/enum/query-key";
import updateUsersRepository from "@/entities/repo/user-storage/update-user";
import {enqueueSnackbar} from "notistack";

const useUpdateUserGrantUseCase = () => {
    const queryClient = useQueryClient();
    const execute = ({ data, userId }: { data: IUpdateUsersPort, userId: string }) =>
        updateUsersRepository(data, userId);
    return useMutation<AxiosResponse<IUpdateUsersDto>, AxiosError<IApiErrorDto>, { data: IUpdateUsersPort; userId: string }>({
        mutationFn: execute,
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USERS_STORAGE] });
            if (data.status === HttpStatusCode.Ok) {
                enqueueSnackbar("Права доступа пользователя изменены", {variant: 'successSnackbar'});
            }
        },
    });
};

export default useUpdateUserGrantUseCase;