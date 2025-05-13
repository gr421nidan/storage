import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError} from "axios";
import {IUpdateUsersPort} from "@/shared/interface/admin";
import QueryKey from "@/shared/common/enum/query-key";
import updateUsersRepository from "@/entities/repo/user-storage/update-user";
import {enqueueSnackbar} from "notistack";

const useUpdateUserGrantUseCase = () => {
    const queryClient = useQueryClient();

    const execute = ({data, userId}: { data: IUpdateUsersPort; userId: string }) =>
        updateUsersRepository(data, userId);

    return useMutation<void, AxiosError<IApiErrorDto>, { data: IUpdateUsersPort; userId: string }>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.USERS_STORAGE]});
            enqueueSnackbar("Права доступа пользователя изменены", {variant: "successSnackbar"});
        },
    });
};

export default useUpdateUserGrantUseCase;
