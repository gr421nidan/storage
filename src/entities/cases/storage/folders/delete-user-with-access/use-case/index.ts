import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import { AxiosError } from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {IDeleteUserWithAccessPort} from "@/shared/interface/folders";
import deleteUserWithAccessRepository from "@/entities/repo/storage/folders/delete-user-with-access";

const useDeleteUserWithAccessUseCase = () => {
    const queryClient = useQueryClient();

    const execute = (params: IDeleteUserWithAccessPort) =>
        deleteUserWithAccessRepository(params);

    return useMutation<void, AxiosError<IApiErrorDto>, IDeleteUserWithAccessPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.ACCESS_USERS] });
        },
    });
};

export default useDeleteUserWithAccessUseCase;
