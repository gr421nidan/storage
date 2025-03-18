import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import { AxiosError } from "axios";
import { IAddUserDto, IAddUserPort } from "@/shared/type/admin";
import addUserRepository from "@/entities/repo/user-storage/add-user";

const execute = (data: IAddUserPort) => addUserRepository(data);

const useAddUserUseCase = () => {
    const queryClient = useQueryClient();

    return useMutation<IAddUserDto, AxiosError<IApiErrorDto>, IAddUserPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};

export default useAddUserUseCase;
