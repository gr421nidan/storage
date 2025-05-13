import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import { AxiosError } from "axios";
import deleteUserRepository from "@/entities/repo/user-storage/delete-user";
import { enqueueSnackbar } from "notistack";
import QueryKey from "@/shared/common/enum/query-key";

const useDeleteUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => deleteUserRepository(userId);

    return useMutation<void, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USERS_STORAGE] });
            enqueueSnackbar("Пользователь удалён", { variant: "successSnackbar" });
        },
    });
};

export default useDeleteUserUseCase;
