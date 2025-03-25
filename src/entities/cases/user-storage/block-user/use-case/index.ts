import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import { AxiosError } from "axios";
import { IBlockUserDto } from "@/shared/interface/admin";
import blockUserRepository from "@/entities/repo/user-storage/block-user";
import QueryKey from "@/shared/common/enum/query-key";

const useBlockUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => blockUserRepository(userId);
    return useMutation<IBlockUserDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USERS_STORAGE] });
        },
    });
};

export default useBlockUserUseCase;