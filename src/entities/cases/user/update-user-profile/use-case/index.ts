import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import {AxiosError} from "axios";
import updateUserRepository from "@/entities/repo/user/update-user-profile";
import {IUpdateUserDto, IUpdateUserPort} from "@/shared/type/user";
import QueryKey from "@/shared/common/enum/query-key";

const useUpdateUserUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (data: IUpdateUserPort) => updateUserRepository(data);
    return useMutation<IUpdateUserDto, AxiosError<IApiErrorDto>, IUpdateUserPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USER_PROFILE] });
        }
    });
};

export default useUpdateUserUseCase;
