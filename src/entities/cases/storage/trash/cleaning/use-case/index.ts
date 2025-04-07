import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import cleaningTrashRepository from "@/entities/repo/storage/trash/cleaning";
import {ICleaningTrashDto} from "@/shared/interface/trash";
import CurrentStorage from "@/shared/hooks/storage";

const useCleaningTrashUseCase = () => {
    const queryClient = useQueryClient();
    const storageId = CurrentStorage();
    const execute = () => {
        if (!storageId) {
            return Promise.reject();
        }
        return cleaningTrashRepository(storageId);
    };
    return useMutation<AxiosResponse<ICleaningTrashDto>, AxiosError<IApiErrorDto>>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
        },
    });
};

export default useCleaningTrashUseCase;