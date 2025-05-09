import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import { enqueueSnackbar } from "notistack";
import updateStorageRepository from "@/entities/repo/storage/settings-staorage/update";
import {IUpdateStoragePort} from "@/shared/interface/storage";

const useUpdateStorageUseCase = () => {
    const queryClient = useQueryClient();

    const execute = (data: IUpdateStoragePort) => updateStorageRepository(data);

    return useMutation<void, AxiosError<IApiErrorDto>, IUpdateStoragePort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.STORAGE] });
            enqueueSnackbar("Данные изменены", { variant: "successSnackbar" });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("У вас не доступа", { variant: 'errorSnackbar' });
            }
        },
    });
};

export default useUpdateStorageUseCase;
