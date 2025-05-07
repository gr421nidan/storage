import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";
import {IDeleteLogsDto} from "@/shared/interface/logs-user";
import deleteUserLogsRepository from "@/entities/repo/logs-user/delete-user-logs";

const useDeleteUserLogsUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => deleteUserLogsRepository(userId);
    return useMutation<IDeleteLogsDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.USER_LOGS]});
            enqueueSnackbar("Логи пользователя удалены", {variant: 'successSnackbar'});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useDeleteUserLogsUseCase;