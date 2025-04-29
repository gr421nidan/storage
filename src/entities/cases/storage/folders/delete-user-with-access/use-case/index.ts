import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionFolderDto} from "@/shared/interface/folders";
import {enqueueSnackbar} from "notistack";
import deleteUserWithAccessRepository from "@/entities/repo/storage/folders/delete-user-with-access";

const useDeleteUserWithAccessUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (userId: string) => deleteUserWithAccessRepository(userId);
    return useMutation<AxiosResponse<IActionFolderDto>, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.ACCESS_USERS] });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не хватает прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useDeleteUserWithAccessUseCase;