import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionFileDto} from "@/shared/interface/files";
import recoverFileRepository from "@/entities/repo/storage/files/recover";

const useRecoverFileUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (fileId: string) => recoverFileRepository(fileId);
    return useMutation<AxiosResponse<IActionFileDto>, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
        },
    });
};

export default useRecoverFileUseCase;