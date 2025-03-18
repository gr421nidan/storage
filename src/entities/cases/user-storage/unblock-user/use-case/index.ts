import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import { AxiosError } from "axios";
import { IBlockUserDto } from "@/shared/type/admin";
import unblockUserRepository from "@/entities/repo/user-storage/unblock-user";

const execute = (userId: string) => unblockUserRepository(userId);

const useUnblockUserUseCase = () => {
    const queryClient = useQueryClient();

    return useMutation<IBlockUserDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};

export default useUnblockUserUseCase;