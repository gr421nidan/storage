import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import { AxiosError } from "axios";
import { IBlockUserDto } from "@/shared/type/admin";
import blockUserRepository from "@/entities/repo/user-storage/block-user";



const useBlockUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => blockUserRepository(userId);
    return useMutation<IBlockUserDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["usersStorage"] });
        },
    });
};

export default useBlockUserUseCase;