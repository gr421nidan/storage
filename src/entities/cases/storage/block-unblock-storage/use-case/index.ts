import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, HttpStatusCode} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionStorageDto, IBlockUnblockStoragePort} from "@/shared/interface/storage";
import {useCurrentStorage} from "@/shared/hooks/storage";
import {enqueueSnackbar} from "notistack";
import blockUnblockStorageRepository from "@/entities/repo/storage/block-unblock-storage";

const useBlockUnblockStorageUseCase = () => {
    const queryClient = useQueryClient();
    const storageId = useCurrentStorage();
    const execute = (data:IBlockUnblockStoragePort) => blockUnblockStorageRepository(storageId, data);
    return useMutation<IActionStorageDto, AxiosError<IApiErrorDto>, IBlockUnblockStoragePort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.STORAGE] });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.Forbidden) {
                enqueueSnackbar("Недостаточно прав.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useBlockUnblockStorageUseCase;