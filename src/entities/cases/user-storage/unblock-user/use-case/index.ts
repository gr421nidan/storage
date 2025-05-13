import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import { AxiosError } from "axios";
import unblockUserRepository from "@/entities/repo/user-storage/unblock-user";
import QueryKey from "@/shared/common/enum/query-key";

const useUnblockUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => unblockUserRepository(userId);
    return useMutation<void, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USERS_STORAGE] });
        },
    });
};

export default useUnblockUserUseCase;