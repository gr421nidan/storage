import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import { AxiosError } from "axios";
import { IBlockUserDto } from "@/shared/type/admin";
import blockUserRepository from "@/entities/repo/user-storage/block-user";

const execute = (userId: string) => blockUserRepository(userId);

const useBlockUserUseCase = () => {
    const queryClient = useQueryClient();

    return useMutation<IBlockUserDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute, // Функция для блокировки пользователя
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};

export default useBlockUserUseCase;