import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AxiosError, HttpStatusCode} from "axios";
import {enqueueSnackbar} from "notistack";
import addAccessForUserRepository from "@/entities/repo/storage/folders/add-access-for-user";
import {IApiErrorDto} from "@/shared/interface/auth";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionFolderDto, IAddAccessForUserPort} from "@/shared/interface/folders";

const useAddAccessForUserUseCase = (folderId: string) => {
    const queryClient = useQueryClient();

    const execute = (data: IAddAccessForUserPort) => {
        return addAccessForUserRepository(data, folderId);
    };

    return useMutation<IActionFolderDto, AxiosError<IApiErrorDto>, IAddAccessForUserPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.ACCESS_USERS, folderId]});
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Conflict) {
                enqueueSnackbar("Данному пользователю уже открыт доступ", {variant: 'errorSnackbar'});
            }
            enqueueSnackbar("Не удалось добавить доступ", {variant: "errorSnackbar"});
        },
    });
};

export default useAddAccessForUserUseCase;
