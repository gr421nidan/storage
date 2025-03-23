import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import { AxiosError } from "axios";
import { IBlockUserDto } from "@/shared/type/admin";
import unblockUserRepository from "@/entities/repo/user-storage/unblock-user";
import QueryKey from "@/shared/common/enum/query-key";

const useUnblockUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => unblockUserRepository(userId);
    return useMutation<IBlockUserDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USERS_STORAGE] });
        },
    });
};

export default useUnblockUserUseCase;