import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError} from "axios";
import updateUserRepository from "@/entities/repo/user/update-user-profile";
import {IUpdateUserPort} from "@/shared/interface/user";
import QueryKey from "@/shared/common/enum/query-key";
import {enqueueSnackbar} from "notistack";

const useUpdateUserUseCase = () => {
    const queryClient = useQueryClient();

    const execute = (data: IUpdateUserPort) => updateUserRepository(data);

    return useMutation<void, AxiosError<IApiErrorDto>, IUpdateUserPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.USER_PROFILE]});
            enqueueSnackbar("Данные изменены", {variant: "successSnackbar"});
        },
    });
};

export default useUpdateUserUseCase;
