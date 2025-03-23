import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import { AxiosError } from "axios";
import {IUpdateUsersDto, IUpdateUsersPort} from "@/shared/type/admin";
import QueryKey from "@/shared/common/enum/query-key";
import updateUsersRepository from "@/entities/repo/user-storage/update-user";

const useUpdateUserGrantUseCase = () => {
    const queryClient = useQueryClient();
    const execute = ({ data, userId }: { data: IUpdateUsersPort, userId: string }) =>
        updateUsersRepository(data, userId);
    return useMutation<IUpdateUsersDto, AxiosError<IApiErrorDto>, { data: IUpdateUsersPort, userId: string }>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USERS_STORAGE] });
        },
    });
};

export default useUpdateUserGrantUseCase;