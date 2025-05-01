import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import {enqueueSnackbar} from "notistack";
import QueryKey from "@/shared/common/enum/query-key";
import {IDeleteLogsDto, IDeleteLogsPort} from "@/shared/interface/logs";
import automaticDeleteUserLogsRepository from "@/entities/repo/logs-user/automatic-delete-user-logs";

const useAutomaticDeleteUserLogsUseCase = (userId:string) => {
    const queryClient = useQueryClient();
    const execute = (data: IDeleteLogsPort) => {
        return automaticDeleteUserLogsRepository(userId, data);
    };
    return useMutation<IDeleteLogsDto, AxiosError<IApiErrorDto>, IDeleteLogsPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.USER_LOGS]});
            enqueueSnackbar("Очистка логов запущена для пользователя", {variant: 'successSnackbar'});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useAutomaticDeleteUserLogsUseCase;