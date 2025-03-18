import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import { AxiosError } from "axios";
import { IBlockUserDto } from "@/shared/type/admin";
import deleteUserRepository from "@/entities/repo/user-storage/delete-user";

const execute = (userId: string) => deleteUserRepository(userId);

const useDeleteUserUseCase = () => {
    const queryClient = useQueryClient();

    return useMutation<IBlockUserDto, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};

export default useDeleteUserUseCase;