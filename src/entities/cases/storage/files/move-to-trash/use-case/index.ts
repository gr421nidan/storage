import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import moveToTrashFileRepository from "@/entities/repo/storage/files/move-to-trash";
import {IActionFileDto} from "@/shared/interface/files";

const useMoveToTrashFileUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (fileId: string) => moveToTrashFileRepository(fileId);
    return useMutation<AxiosResponse<IActionFileDto>, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
        },
    });
};

export default useMoveToTrashFileUseCase;