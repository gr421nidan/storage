import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import {AxiosError, AxiosResponse, HttpStatusCode} from "axios";
import updateUserRepository from "@/entities/repo/user/update-user-profile";
import {IUpdateUserDto, IUpdateUserPort} from "@/shared/type/user";
import QueryKey from "@/shared/common/enum/query-key";
import {enqueueSnackbar} from "notistack";

const useUpdateUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (data: IUpdateUserPort) => updateUserRepository(data);
    return useMutation<AxiosResponse<IUpdateUserDto>, AxiosError<IApiErrorDto>, IUpdateUserPort>({
        mutationFn: execute,
        onSuccess: async (response) => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USER_PROFILE] });
            if (response.status === HttpStatusCode.Ok) {
                enqueueSnackbar("Данные изменены", {variant: 'successSnackbar'});
            }
        }
    });
};

export default useUpdateUserUseCase;
