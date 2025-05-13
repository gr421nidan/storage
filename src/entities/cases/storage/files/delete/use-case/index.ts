import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import deleteFileRepository from "@/entities/repo/storage/files/delete";

const useDeleteFileUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (fileId: string) => deleteFileRepository(fileId);
    return useMutation<void, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
        },
    });
};

export default useDeleteFileUseCase;