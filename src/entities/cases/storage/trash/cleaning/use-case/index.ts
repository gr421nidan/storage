import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import cleaningTrashRepository from "@/entities/repo/storage/trash/cleaning";
import {useCurrentStorage} from "@/shared/hooks/storage";

const useCleaningTrashUseCase = () => {
    const queryClient = useQueryClient();
    const storageId = useCurrentStorage();
    const execute = () => {
        return cleaningTrashRepository(storageId);
    };

    return useMutation<void, AxiosError<IApiErrorDto>>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [QueryKey.TRASH]});
        },
    });
};

export default useCleaningTrashUseCase;
